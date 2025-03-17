"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Product, ProductImage } from "@/types/product";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ArrowLeft, Loader2, Plus, Save, Trash2, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface EditProductPageProps {
  params: { id: string };
}

export default function EditProductPage({ params }: EditProductPageProps) {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { id } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    slug: "",
    code: "",
    price: 0,
    surface: "",
    thickness: "",
    dimensions: "",
    finish: "",
    color: "",
    catalog_url: "",
    description: "",
  });

  const [existingImages, setExistingImages] = useState<ProductImage[]>([]);
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [newImageUrls, setNewImageUrls] = useState<string[]>([]);
  const [imageUrlInputs, setImageUrlInputs] = useState<string[]>([""]); // URLs entered by user
  const [error, setError] = useState<string | null>(null);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data: product, error: productError } = await supabase
          .from("products")
          .select("*")
          .eq("id", id)
          .single();

        if (productError) throw productError;
        if (!product) throw new Error("Không tìm thấy sản phẩm");

        setFormData(product);

        // Fetch product images
        const { data: images, error: imagesError } = await supabase
          .from("product_images")
          .select("*")
          .eq("product_id", id)
          .order("display_order", { ascending: true });

        if (imagesError) throw imagesError;
        setExistingImages(images || []);
      } catch (error: any) {
        console.error("Error fetching product:", error);
        setError(error.message || "Không thể tải sản phẩm");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id, supabase]);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Auto-generate slug from name if name is changed and slug was not manually edited
    if (
      name === "name" &&
      formData.slug ===
        formData.name
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
    ) {
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
        [name]: name === "price" ? parseFloat(value) : value,
      });
    }
  };

  // Handle new image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const newFiles = Array.from(e.target.files);
    setNewImages([...newImages, ...newFiles]);

    // Create preview URLs
    const newUrls = newFiles.map((file) => URL.createObjectURL(file));
    setNewImageUrls([...newImageUrls, ...newUrls]);
  };

  // Remove new image
  const removeNewImage = (index: number) => {
    const updatedImages = [...newImages];
    const updatedUrls = [...newImageUrls];

    // Revoke object URL to avoid memory leaks
    URL.revokeObjectURL(updatedUrls[index]);

    updatedImages.splice(index, 1);
    updatedUrls.splice(index, 1);

    setNewImages(updatedImages);
    setNewImageUrls(updatedUrls);
  };

  // Mark existing image for deletion
  const markImageForDeletion = (imageId: string) => {
    setImagesToDelete([...imagesToDelete, imageId]);
  };

  // Set image as primary
  const setImageAsPrimary = async (imageId: string) => {
    try {
      // First, set all images as non-primary
      await supabase
        .from("product_images")
        .update({ is_primary: false })
        .eq("product_id", id);

      // Then set the selected image as primary
      await supabase
        .from("product_images")
        .update({ is_primary: true })
        .eq("id", imageId);

      // Update local state
      setExistingImages(
        existingImages.map((img) => ({
          ...img,
          is_primary: img.id === imageId,
        })),
      );
    } catch (error) {
      console.error("Error setting primary image:", error);
    }
  };

  // Handle URL input changes
  const handleUrlInputChange = (index: number, value: string) => {
    const newUrls = [...imageUrlInputs];
    newUrls[index] = value;
    setImageUrlInputs(newUrls);
  };

  // Add new URL input field
  const addUrlInput = () => {
    const remainingImagesCount =
      existingImages.length -
      imagesToDelete.length +
      newImages.length +
      imageUrlInputs.filter((url) => url.trim() !== "").length;
    if (remainingImagesCount < 10) {
      setImageUrlInputs([...imageUrlInputs, ""]);
    } else {
      setError(
        "Tối đa 10 hình ảnh được phép (bao gồm cả hình ảnh hiện tại và mới)",
      );
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
    setIsSaving(true);
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
      const remainingImagesCount =
        existingImages.length - imagesToDelete.length;
      if (
        remainingImagesCount + newImages.length + validUrlInputs.length >
        10
      ) {
        throw new Error(
          "Tối đa 10 hình ảnh được phép (bao gồm cả hình ảnh hiện tại và mới)",
        );
      }

      // Update product in database
      const { error: updateError } = await supabase
        .from("products")
        .update(formData)
        .eq("id", id);

      if (updateError) throw updateError;

      // Delete marked images
      if (imagesToDelete.length > 0) {
        for (const imageId of imagesToDelete) {
          // Get image URL to delete from storage
          const imageToDelete = existingImages.find(
            (img) => img.id === imageId,
          );
          if (imageToDelete) {
            // Extract file path from URL
            const urlParts = imageToDelete.url.split("/");
            const fileName = urlParts[urlParts.length - 1];
            const filePath = `products/${id}/${fileName}`;

            // Only attempt to delete from storage if it's a storage URL
            if (
              imageToDelete.url.includes("storage.googleapis.com") ||
              imageToDelete.url.includes("supabase")
            ) {
              await supabase.storage.from("product-images").remove([filePath]);
            }

            // Delete record
            await supabase.from("product_images").delete().eq("id", imageId);
          }
        }
      }

      // Calculate the starting order for new images
      const startOrder = existingImages.length - imagesToDelete.length;
      let currentOrder = startOrder;

      // Upload new images if any
      if (newImages.length > 0) {
        for (let i = 0; i < newImages.length; i++) {
          const file = newImages[i];
          const fileExt = file.name.split(".").pop();
          const fileName = `${id}/${Date.now()}-${i}.${fileExt}`;
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
              product_id: id,
              url: publicUrl.publicUrl,
              alt_text: formData.name,
              is_primary:
                existingImages.length === 0 &&
                i === 0 &&
                validUrlInputs.length === 0, // First image is primary if no existing images
              display_order: currentOrder,
            });

          if (imageError) throw imageError;
          currentOrder++;
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
                product_id: id,
                url: url,
                alt_text: formData.name,
                is_primary:
                  existingImages.length === 0 &&
                  newImages.length === 0 &&
                  i === 0, // First image is primary if no existing images and no new uploaded images
                display_order: currentOrder,
              });

            if (imageError) throw imageError;
            currentOrder++;
          }
        }
      }

      // Redirect to admin dashboard
      router.push("/quantri");
      router.refresh();
    } catch (error: any) {
      console.error("Error updating product:", error);
      setError(error.message || "Đã xảy ra lỗi khi cập nhật sản phẩm");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
          <span>Đang tải dữ liệu sản phẩm...</span>
        </div>
      </div>
    );
  }

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
                Chỉnh Sửa Sản Phẩm
              </h1>
              <p className="text-gray-600">{formData.name}</p>
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
            <p className="text-gray-600">Cập nhật thông tin sản phẩm</p>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Label htmlFor="name">Tên Sản Phẩm *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name || ""}
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
                value={formData.slug || ""}
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
                value={formData.code || ""}
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
                value={formData.price || ""}
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
                value={formData.surface || ""}
                onChange={handleChange}
                placeholder="VD: Nhám, Bóng"
              />
            </div>

            <div>
              <Label htmlFor="thickness">Độ Dày</Label>
              <Input
                id="thickness"
                name="thickness"
                value={formData.thickness || ""}
                onChange={handleChange}
                placeholder="VD: 10mm, 15mm"
              />
            </div>

            <div>
              <Label htmlFor="dimensions">Kích Thước</Label>
              <Input
                id="dimensions"
                name="dimensions"
                value={formData.dimensions || ""}
                onChange={handleChange}
                placeholder="VD: 60x60cm, 30x60cm"
              />
            </div>

            <div>
              <Label htmlFor="finish">Hoàn Thiện</Label>
              <Input
                id="finish"
                name="finish"
                value={formData.finish || ""}
                onChange={handleChange}
                placeholder="VD: Đánh bóng, Nhám"
              />
            </div>

            <div>
              <Label htmlFor="color">Màu Sắc</Label>
              <Input
                id="color"
                name="color"
                value={formData.color || ""}
                onChange={handleChange}
                placeholder="VD: Trắng, Be, Xám"
              />
            </div>

            <div>
              <Label htmlFor="catalog_url">Đường Dẫn Catalog</Label>
              <Input
                id="catalog_url"
                name="catalog_url"
                value={formData.catalog_url || ""}
                onChange={handleChange}
                placeholder="Đường dẫn đến file PDF catalog"
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="description">Mô Tả</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                placeholder="Mô tả chi tiết về sản phẩm"
                rows={5}
              />
            </div>
          </div>

          <div className="p-6 border-t border-b border-gray-200">
            <h2 className="text-lg font-medium mb-4">Hình Ảnh Sản Phẩm</h2>

            {/* Existing images */}
            {existingImages.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Hình Ảnh Hiện Tại
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {existingImages.map((image) => {
                    const isMarkedForDeletion = imagesToDelete.includes(
                      image.id,
                    );

                    return (
                      <div
                        key={image.id}
                        className={`relative group ${isMarkedForDeletion ? "opacity-50" : ""}`}
                      >
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100">
                          <img
                            src={image.url}
                            alt={image.alt_text || "Hình ảnh sản phẩm"}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        {!isMarkedForDeletion && (
                          <div className="absolute top-2 right-2 flex gap-2">
                            <button
                              type="button"
                              onClick={() => markImageForDeletion(image.id)}
                              className="p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Xóa hình ảnh"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}

                        {isMarkedForDeletion ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button
                              type="button"
                              onClick={() =>
                                setImagesToDelete(
                                  imagesToDelete.filter(
                                    (id) => id !== image.id,
                                  ),
                                )
                              }
                              className="px-2 py-1 bg-gray-800 text-white text-xs rounded"
                            >
                              Khôi Phục
                            </button>
                          </div>
                        ) : image.is_primary ? (
                          <div className="absolute bottom-2 left-2 px-2 py-1 bg-blue-500 text-white text-xs rounded">
                            Chính
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setImageAsPrimary(image.id)}
                            className="absolute bottom-2 left-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            Đặt Làm Ảnh Chính
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Upload new images */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="images">Tải Lên Hình Ảnh Mới</Label>
                <span className="text-xs text-gray-500">
                  {10 -
                    (existingImages.length -
                      imagesToDelete.length +
                      newImages.length +
                      imageUrlInputs.filter((url) => url.trim() !== "")
                        .length)}{" "}
                  còn lại
                </span>
              </div>
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
                      existingImages.length -
                        imagesToDelete.length +
                        newImages.length +
                        imageUrlInputs.filter((url) => url.trim() !== "")
                          .length >=
                      10
                    }
                  />
                </label>
              </div>
            </div>

            {/* Add images by URL */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <Label>Thêm Hình Ảnh Bằng URL</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addUrlInput}
                  disabled={
                    existingImages.length -
                      imagesToDelete.length +
                      newImages.length +
                      imageUrlInputs.filter((url) => url.trim() !== "")
                        .length >=
                    10
                  }
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

            {/* New image previews */}
            {newImageUrls.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Hình Ảnh Mới Sẽ Tải Lên
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {newImageUrls.map((url, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100">
                        <img
                          src={url}
                          alt={`Hình ảnh mới ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeNewImage(index)}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
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
              disabled={isSaving}
              className="flex items-center gap-2"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang lưu...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Lưu Thay Đổi</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
