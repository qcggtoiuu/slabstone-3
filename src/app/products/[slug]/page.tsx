import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductImageGallery from "@/components/products/product-image-gallery";
import ProductSpecifications from "@/components/products/product-specifications";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/types/product";
import { Download, FileText, Share2, ArrowRight, Phone } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "../../../../supabase/server";
import ProductGrid from "@/components/products/product-grid";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = await createClient();
  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm",
    };
  }

  return {
    title: `${product.name} | Chi tiết sản phẩm đá cao cấp`,
    description:
      product.description ||
      `Thông số kỹ thuật chi tiết cho ${product.name} bao gồm kích thước, bề mặt, hoàn thiện, và nhiều thông tin khác.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const supabase = await createClient();

  // Fetch product with images
  const { data: product } = await supabase
    .from("products")
    .select(
      `
      *,
      images:product_images(*)
    `,
    )
    .eq("slug", params.slug)
    .single();

  if (!product) {
    notFound();
  }

  // Fetch related products
  const { data: relatedProducts } = await supabase
    .from("products")
    .select(
      `
      *,
      images:product_images(*)
    `,
    )
    .neq("id", product.id)
    .limit(4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="text-gray-700 hover:text-blue-600">
                Trang chủ
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <a
                  href="/products"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Sản phẩm
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Product details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product images */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <ProductImageGallery product={product as Product} />
          </div>

          {/* Product info */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mb-4">
              Đá cao cấp
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="text-sm text-gray-500 mb-4">
              Mã sản phẩm: {product.code}
            </div>

            <div className="text-2xl font-semibold mb-6 text-blue-700">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.price)}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Mô tả</h3>
              <p className="text-gray-700">
                {product.description || "Chưa có mô tả cho sản phẩm này."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {product.surface && (
                <div>
                  <div className="text-sm text-gray-500">Bề mặt</div>
                  <div className="font-medium">{product.surface}</div>
                </div>
              )}
              {product.thickness && (
                <div>
                  <div className="text-sm text-gray-500">Độ dày</div>
                  <div className="font-medium">{product.thickness}</div>
                </div>
              )}
              {product.finish && (
                <div>
                  <div className="text-sm text-gray-500">Hoàn thiện</div>
                  <div className="font-medium">{product.finish}</div>
                </div>
              )}
              {product.color && (
                <div>
                  <div className="text-sm text-gray-500">Màu sắc</div>
                  <div className="font-medium">{product.color}</div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 h-12 text-base">
                <Phone className="w-4 h-4" />
                <span>Yêu cầu báo giá</span>
              </Button>

              {product.catalog_url && (
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2 h-12 text-base border-blue-200 hover:bg-blue-50"
                >
                  <Download className="w-4 h-4" />
                  <span>Tải xuống Catalog</span>
                </Button>
              )}
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Chia sẻ</span>
              </button>

              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <FileText className="w-4 h-4" />
                <span>Thông số kỹ thuật</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs for specifications and more info */}
        <div className="mt-16">
          <Tabs defaultValue="specifications">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl">
              <TabsTrigger value="specifications">
                Thông số kỹ thuật
              </TabsTrigger>
              <TabsTrigger value="dimensions">Kích thước</TabsTrigger>
              <TabsTrigger value="installation">Hướng dẫn lắp đặt</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="mt-6">
              <ProductSpecifications product={product as Product} />
            </TabsContent>
            <TabsContent value="dimensions" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4">
                  Kích thước sản phẩm
                </h3>
                <p className="text-gray-700 mb-4">
                  {product.dimensions || "Thông tin kích thước chưa có sẵn."}
                </p>
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                  <div className="flex items-center justify-center text-gray-500">
                    Sơ đồ kích thước sẽ xuất hiện ở đây
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="installation" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4">Hướng dẫn lắp đặt</h3>
                <p className="text-gray-700">
                  Thông tin lắp đặt cho sản phẩm này có sẵn trong tài liệu kỹ
                  thuật. Vui lòng tải xuống catalog hoặc liên hệ với đội ngũ hỗ
                  trợ của chúng tôi để được hướng dẫn lắp đặt chi tiết.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related products */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Sản phẩm liên quan</h2>
              <a
                href="/products"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm font-medium"
              >
                Xem tất cả
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <ProductGrid products={relatedProducts as Product[]} />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
