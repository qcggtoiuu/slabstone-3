import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductGrid from "@/components/products/product-grid";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { createClient } from "../../../supabase/server";
import { Search, X } from "lucide-react";
import FilterDialog from "@/components/products/filter-dialog";
import SortButton from "@/components/products/sort-button";

export const metadata: Metadata = {
  title: "Sản phẩm đá cao cấp | Bộ sưu tập đá tự nhiên",
  description:
    "Khám phá bộ sưu tập đá cao cấp của chúng tôi với thông số kỹ thuật chi tiết, kích thước và hoàn thiện đa dạng.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const supabase = await createClient();

  // Get filter parameters
  const colorFilter = searchParams.color as string | undefined;
  const surfaceFilter = searchParams.surface as string | undefined;
  const applicationFilter = searchParams.application as string | undefined;
  const searchQuery = searchParams.q as string | undefined;
  const minPrice = searchParams.minPrice
    ? Number(searchParams.minPrice)
    : undefined;
  const maxPrice = searchParams.maxPrice
    ? Number(searchParams.maxPrice)
    : undefined;

  // Build query
  let query = supabase.from("products").select(
    `
      *,
      images:product_images(*)
    `,
  );

  // Apply filters if they exist
  if (colorFilter) {
    query = query.eq("color", colorFilter);
  }

  if (surfaceFilter) {
    query = query.eq("surface", surfaceFilter);
  }

  if (applicationFilter) {
    query = query.eq("application", applicationFilter);
  }

  if (searchQuery) {
    query = query.ilike("name", `%${searchQuery}%`);
  }

  // Apply price range filter if exists
  if (minPrice !== undefined) {
    query = query.gte("price", minPrice);
  }

  if (maxPrice !== undefined) {
    query = query.lte("price", maxPrice);
  }

  // Execute query
  const { data: products } = await query.order("created_at", {
    ascending: false,
  });

  // Fetch unique values for filters
  const { data: colors } = await supabase
    .from("products")
    .select("color")
    .not("color", "is", null)
    .order("color");

  const { data: surfaces } = await supabase
    .from("products")
    .select("surface")
    .not("surface", "is", null)
    .order("surface");

  const { data: applications } = await supabase
    .from("products")
    .select("application")
    .not("application", "is", null)
    .order("application");

  // Extract unique values
  const uniqueColors = [
    ...new Set(colors?.map((item) => item.color).filter(Boolean)),
  ];
  const uniqueSurfaces = [
    ...new Set(surfaces?.map((item) => item.surface).filter(Boolean)),
  ];
  const uniqueApplications = [
    ...new Set(applications?.map((item) => item.application).filter(Boolean)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Bộ sưu tập đá cao cấp
            </h1>
            <p className="text-gray-600">
              Khám phá bộ sưu tập đá tự nhiên cao cấp của chúng tôi
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <form
              action="/products"
              method="get"
              className="relative flex-grow sm:max-w-xs"
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="search"
                name="q"
                defaultValue={searchQuery}
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
                placeholder="Tìm kiếm sản phẩm..."
              />
            </form>

            <FilterDialog
              uniqueColors={uniqueColors}
              uniqueSurfaces={uniqueSurfaces}
              uniqueApplications={uniqueApplications}
              colorFilter={colorFilter}
              surfaceFilter={surfaceFilter}
              applicationFilter={applicationFilter}
              minPrice={minPrice}
              maxPrice={maxPrice}
              searchQuery={searchQuery}
              activeFilterCount={
                [
                  colorFilter,
                  surfaceFilter,
                  applicationFilter,
                  minPrice || maxPrice ? 1 : null,
                ].filter(Boolean).length
              }
            />

            <SortButton />
          </div>
        </div>

        {/* Active filters */}
        {(colorFilter ||
          surfaceFilter ||
          applicationFilter ||
          minPrice ||
          maxPrice) && (
          <div className="flex flex-wrap gap-2 mb-8">
            <div className="text-sm text-gray-500 flex items-center mr-2">
              Bộ lọc đang áp dụng:
            </div>
            {colorFilter && (
              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                <span>Màu: {colorFilter}</span>
                <a
                  href={`/products?${new URLSearchParams({
                    ...(surfaceFilter && { surface: surfaceFilter }),
                    ...(applicationFilter && {
                      application: applicationFilter,
                    }),
                    ...(searchQuery && { q: searchQuery }),
                    ...(minPrice && { minPrice: minPrice.toString() }),
                    ...(maxPrice && { maxPrice: maxPrice.toString() }),
                  })}`}
                >
                  <X className="w-4 h-4" />
                </a>
              </div>
            )}
            {surfaceFilter && (
              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                <span>Bề mặt: {surfaceFilter}</span>
                <a
                  href={`/products?${new URLSearchParams({
                    ...(colorFilter && { color: colorFilter }),
                    ...(applicationFilter && {
                      application: applicationFilter,
                    }),
                    ...(searchQuery && { q: searchQuery }),
                    ...(minPrice && { minPrice: minPrice.toString() }),
                    ...(maxPrice && { maxPrice: maxPrice.toString() }),
                  })}`}
                >
                  <X className="w-4 h-4" />
                </a>
              </div>
            )}
            {applicationFilter && (
              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                <span>Ứng dụng: {applicationFilter}</span>
                <a
                  href={`/products?${new URLSearchParams({
                    ...(colorFilter && { color: colorFilter }),
                    ...(surfaceFilter && { surface: surfaceFilter }),
                    ...(searchQuery && { q: searchQuery }),
                    ...(minPrice && { minPrice: minPrice.toString() }),
                    ...(maxPrice && { maxPrice: maxPrice.toString() }),
                  })}`}
                >
                  <X className="w-4 h-4" />
                </a>
              </div>
            )}
            {minPrice && maxPrice && (
              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                <span>
                  Giá: {new Intl.NumberFormat("vi-VN").format(minPrice)}đ -{" "}
                  {new Intl.NumberFormat("vi-VN").format(maxPrice)}đ
                </span>
                <a
                  href={`/products?${new URLSearchParams({
                    ...(colorFilter && { color: colorFilter }),
                    ...(surfaceFilter && { surface: surfaceFilter }),
                    ...(applicationFilter && {
                      application: applicationFilter,
                    }),
                    ...(searchQuery && { q: searchQuery }),
                  })}`}
                >
                  <X className="w-4 h-4" />
                </a>
              </div>
            )}
            {minPrice && !maxPrice && (
              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                <span>
                  Giá: Từ {new Intl.NumberFormat("vi-VN").format(minPrice)}đ
                </span>
                <a
                  href={`/products?${new URLSearchParams({
                    ...(colorFilter && { color: colorFilter }),
                    ...(surfaceFilter && { surface: surfaceFilter }),
                    ...(applicationFilter && {
                      application: applicationFilter,
                    }),
                    ...(searchQuery && { q: searchQuery }),
                  })}`}
                >
                  <X className="w-4 h-4" />
                </a>
              </div>
            )}
            {!minPrice && maxPrice && (
              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                <span>
                  Giá: Đến {new Intl.NumberFormat("vi-VN").format(maxPrice)}đ
                </span>
                <a
                  href={`/products?${new URLSearchParams({
                    ...(colorFilter && { color: colorFilter }),
                    ...(surfaceFilter && { surface: surfaceFilter }),
                    ...(applicationFilter && {
                      application: applicationFilter,
                    }),
                    ...(searchQuery && { q: searchQuery }),
                  })}`}
                >
                  <X className="w-4 h-4" />
                </a>
              </div>
            )}
            {(colorFilter ||
              surfaceFilter ||
              applicationFilter ||
              minPrice ||
              maxPrice) && (
              <a
                href={searchQuery ? `/products?q=${searchQuery}` : "/products"}
                className="text-sm text-blue-600 hover:underline ml-2 flex items-center"
              >
                Xóa tất cả
              </a>
            )}
          </div>
        )}

        {/* Products grid */}
        <ProductGrid products={products || []} />

        {/* Pagination */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <nav className="inline-flex">
            <Button variant="outline" className="rounded-l-md">
              Trước
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                className="rounded-none"
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" className="rounded-r-md">
              Sau
            </Button>
          </nav>
        </div>

        {/* Why choose our premium stone */}
        <section className="mt-12 md:mt-20 bg-white p-6 md:p-8 rounded-xl shadow-sm">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Tại sao chọn đá cao cấp của chúng tôi?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Đá tự nhiên không chỉ là vật liệu xây dựng, mà còn là tác phẩm
              nghệ thuật của thiên nhiên
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Độ bền vượt trội</h3>
              <p className="text-gray-600">
                Đá tự nhiên có tuổi thọ hàng trăm năm, chống chịu tốt với thời
                gian và điều kiện môi trường khắc nghiệt.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vẻ đẹp độc đáo</h3>
              <p className="text-gray-600">
                Mỗi tấm đá là duy nhất với vân đá, màu sắc và kết cấu không thể
                sao chép, tạo nên không gian sang trọng.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Giá trị gia tăng</h3>
              <p className="text-gray-600">
                Đầu tư vào đá tự nhiên không chỉ nâng tầm không gian sống mà còn
                làm tăng giá trị bất động sản của bạn.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
