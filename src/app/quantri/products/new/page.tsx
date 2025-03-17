"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ArrowLeft, Loader2, Plus, Trash2, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewProductPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    code: "",
    price: "",
    surface: "",
    thickness: "",
    dimensions: "",
    finish: "",
    color: "",
    catalog_url: "",
    description: "",
  });

  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [imageUrlInputs, setImageUrlInputs] = useState<string[]>([""]); // URLs entered by user
  const [error, setError] = useState<string | null>(null);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Auto-generate slug from name
    if (name === "name") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      setFormData({
        ...formData,
        name: value,
        slug: slug,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const newFiles = Array.from(e.target.files);
    setImages([...images, ...newFiles]);

    // Create preview URLs
    const newUrls = newFiles.map((file) => URL.createObjectURL(file));
    setImageUrls([...imageUrls, ...newUrls]);
  };

  // Remove image
  const removeImage = (index: number) => {
    const newImages = [...images];
    const newUrls = [...imageUrls];

    // Revoke object URL to avoid memory leaks
    URL.revokeObjectURL(newUrls[index]);

    newImages.splice(index, 1);
    newUrls.splice(index, 1);

    setImages(newImages);
    setImageUrls(newUrls);
  };

  // Handle URL input changes
  const handleUrlInputChange = (index: number, value: string) => {
    const newUrls = [...imageUrlInputs];
    newUrls[index] = value;
    setImageUrlInputs(newUrls);
  };

  // Add new URL input field
  const addUrlInput = () => {
    if (imageUrlInputs.length + images.length < 10) {
      setImageUrlInputs([...imageUrlInputs, ""]);
    } else {
      setError("Tối đa 10 hình ảnh được phép (bao gồm cả tệp tải lên)");
    }
  };

  // Remove URL input field
  const removeUrlInput = (index: number) => {
    const newUrls = [...imageUrlInputs];
    newUrls.splice(index, 1);
    setImageUrlInputs(newUrls);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Validate required fields
      if (
        !formData.name ||
        !formData.slug ||
        !formData.code ||
        !formData.price
      ) {
        throw new Error("Tên, slug, mã sản phẩm và giá là các trường bắt buộc");
      }

      // Validate total number of images
      const validUrlInputs = imageUrlInputs.filter((url) => url.trim() !== "");
      if (images.length + validUrlInputs.length > 10) {
        throw new Error(
          "Tối đa 10 hình ảnh được phép (bao gồm cả tệp tải lên và URL)",
        );
      }

      // Insert product into database
      const { data: product, error: productError } = await supabase
        .from("products")
        .insert({
          ...formData,
          price: parseFloat(formData.price),
        })
        .select()
        .single();

      if (productError) throw productError;
      if (!product) throw new Error("Failed to create product");

      // Upload images if any
      let imageCount = 0;

      // Process file uploads
      if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
          const file = images[i];
          const fileExt = file.name.split(".").pop();
          const fileName = `${product.id}/${Date.now()}-${i}.${fileExt}`;
          const filePath = `products/${fileName}`;

          // Upload image to storage
          const { error: uploadError } = await supabase.storage
            .from("product-images")
            .upload(filePath, file);

          if (uploadError) throw uploadError;

          // Get public URL
          const { data: publicUrl } = supabase.storage
            .from("product-images")
            .getPublicUrl(filePath);

          // Insert image record
          const { error: imageError } = await supabase
            .from("product_images")
            .insert({
              product_id: product.id,
              url: publicUrl.publicUrl,
              alt_text: formData.name,
              is_primary: imageCount === 0, // First image is primary
              display_order: imageCount,
            });

          if (imageError) throw imageError;
          imageCount++;
        }
      }

      // Process URL images
      if (validUrlInputs.length > 0) {
        for (let i = 0; i < validUrlInputs.length; i++) {
          const url = validUrlInputs[i].trim();
          if (url) {
            // Insert image record directly with the URL
            const { error: imageError } = await supabase
              .from("product_images")
              .insert({
                product_id: product.id,
                url: url,
                alt_text: formData.name,
                is_primary: imageCount === 0, // First image is primary
                display_order: imageCount,
              });

            if (imageError) throw imageError;
            imageCount++;
          }
        }
      }

      // Redirect to admin dashboard
      router.push("/quantri");
      router.refresh();
    } catch (error: any) {
      console.error("Error creating product:", error);
      setError(error.message || "An error occurred while creating the product");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center">
            <button
              onClick={() => router.push("/quantri")}
              className="mr-4 text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Thêm Sản Phẩm Mới
              </h1>
              <p className="text-gray-600">
                Tạo sản phẩm mới với thông số kỹ thuật và hình ảnh
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow overflow-hidden"
        >
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium">Thông Tin Sản Phẩm</h2>
            <p className="text-gray-600">Thông tin cơ bản về sản phẩm</p>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Label htmlFor="name">Tên Sản Phẩm *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nhập tên sản phẩm"
                required
              />
            </div>

            <div>
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="duong-dan-san-pham"
                required
              />
            </div>

            <div>
              <Label htmlFor="code">Mã Sản Phẩm *</Label>
              <Input
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="SP-001"
                required
              />
            </div>

            <div>
              <Label htmlFor="price">Giá (đ) *</Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                placeholder="100000"
                required
              />
            </div>

            <div>
              <Label htmlFor="surface">Bề Mặt</Label>
              <Input
                id="surface"
                name="surface"
                value={formData.surface}
                onChange={handleChange}
                placeholder="VD: Nhám, Bóng"
              />
            </div>

            <div>
              <Label htmlFor="thickness">Độ Dày</Label>
              <Input
                id="thickness"
                name="thickness"
                value={formData.thickness}
                onChange={handleChange}
                placeholder="VD: 10mm, 15mm"
              />
            </div>

            <div>
              <Label htmlFor="dimensions">Kích Thước</Label>
              <Input
                id="dimensions"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                placeholder="VD: 60x60cm, 30x60cm"
              />
            </div>

            <div>
              <Label htmlFor="finish">Hoàn Thiện</Label>
              <Input
                id="finish"
                name="finish"
                value={formData.finish}
                onChange={handleChange}
                placeholder="VD: Đánh bóng, Nhám"
              />
            </div>

            <div>
              <Label htmlFor="color">Màu Sắc</Label>
              <Input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder="VD: Trắng, Be, Xám"
              />
            </div>

            <div>
              <Label htmlFor="catalog_url">Đường Dẫn Catalog</Label>
              <Input
                id="catalog_url"
                name="catalog_url"
                value={formData.catalog_url}
                onChange={handleChange}
                placeholder="Đường dẫn đến file PDF catalog"
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="description">Mô Tả</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Mô tả chi tiết về sản phẩm"
                rows={5}
              />
            </div>
          </div>

          <div className="p-6 border-t border-b border-gray-200">
            <h2 className="text-lg font-medium mb-4">Hình Ảnh Sản Phẩm</h2>
            <p className="text-sm text-gray-500 mb-4">
              Tối đa 10 hình ảnh (bao gồm cả tệp tải lên và URL)
            </p>

            <div className="mb-6">
              <Label htmlFor="images" className="block mb-2">
                Tải Lên Hình Ảnh
              </Label>
              <div className="flex items-center">
                <label className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="w-8 h-8 text-gray-400" />
                    <span className="mt-2 text-sm text-gray-500">
                      Nhấp để chọn tệp
                    </span>
                  </div>
                  <input
                    type="file"
                    id="images"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleImageChange}
                    disabled={
                      images.length +
                        imageUrlInputs.filter((url) => url.trim() !== "")
                          .length >=
                      10
                    }
                  />
                </label>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <Label>Thêm Hình Ảnh Bằng URL</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addUrlInput}
                  disabled={imageUrlInputs.length + images.length >= 10}
                  className="text-xs"
                >
                  <Plus className="w-3 h-3 mr-1" />
                  Thêm URL
                </Button>
              </div>

              {imageUrlInputs.map((url, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <Input
                    value={url}
                    onChange={(e) =>
                      handleUrlInputChange(index, e.target.value)
                    }
                    placeholder="https://example.com/image.jpg"
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeUrlInput(index)}
                    className="h-10 w-10 text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            {imageUrls.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {imageUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100">
                      <img
                        src={url}
                        alt={`Xem trước ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {index === 0 && (
                      <div className="absolute bottom-2 left-2 px-2 py-1 bg-blue-500 text-white text-xs rounded">
                        Chính
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/quantri")}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang lưu...</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Tạo Sản Phẩm</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
