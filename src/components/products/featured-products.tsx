"use client";

import { useState, useEffect } from "react";
import ProductGrid from "@/components/products/product-grid";
import FeaturedProductsFilter from "@/components/products/featured-products-filter";
import { Product } from "@/types/product";
import { createClient } from "@/supabase/client";
import { Button } from "@/components/ui/button";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [surfaces, setSurfaces] = useState<string[]>([]);
  const [applications, setApplications] = useState<string[]>([]);
  const [filters, setFilters] = useState<{
    color?: string;
    surface?: string;
    application?: string;
    minPrice?: number;
    maxPrice?: number;
  }>({});
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const supabase = createClient();

      // Fetch all products for filtering
      const { data: productsData, error } = await supabase
        .from("products")
        .select(
          `
          *,
          images:product_images(*)
        `,
        )
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
        return;
      }

      // Fetch unique values for filters
      const { data: colorsData } = await supabase
        .from("products")
        .select("color")
        .not("color", "is", null)
        .order("color");

      const { data: surfacesData } = await supabase
        .from("products")
        .select("surface")
        .not("surface", "is", null)
        .order("surface");

      const { data: applicationsData } = await supabase
        .from("products")
        .select("application")
        .not("application", "is", null)
        .order("application");

      // Extract unique values
      const uniqueColors = [
        ...new Set(
          colorsData
            ?.map((item: { color: string }) => item.color)
            .filter(Boolean),
        ),
      ];
      const uniqueSurfaces = [
        ...new Set(
          surfacesData
            ?.map((item: { surface: string }) => item.surface)
            .filter(Boolean),
        ),
      ];
      const uniqueApplications = [
        ...new Set(
          applicationsData
            ?.map((item: { application: string }) => item.application)
            .filter(Boolean),
        ),
      ];

      setProducts(productsData || []);
      setFilteredProducts(productsData || []);
      setColors(uniqueColors as string[]);
      setSurfaces(uniqueSurfaces as string[]);
      setApplications(uniqueApplications as string[]);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Apply filters to products
    let filtered = [...products];

    if (filters.color) {
      filtered = filtered.filter((product) => product.color === filters.color);
    }

    if (filters.surface) {
      filtered = filtered.filter(
        (product) => product.surface === filters.surface,
      );
    }

    if (filters.application) {
      filtered = filtered.filter(
        (product) => product.application === filters.application,
      );
    }

    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(
        (product) => product.price >= (filters.minPrice || 0),
      );
    }

    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(
        (product) => product.price <= (filters.maxPrice || Infinity),
      );
    }

    setFilteredProducts(filtered);
    // Reset visible count when filters change
    setVisibleCount(12);
  }, [filters, products]);

  // Update displayed products whenever filtered products or visible count changes
  useEffect(() => {
    setDisplayedProducts(filteredProducts.slice(0, visibleCount));
  }, [filteredProducts, visibleCount]);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Sản phẩm nổi bật</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập sản phẩm cao cấp với thông số kỹ thuật chi tiết
            và chất lượng vượt trội.
          </p>
        </div>

        <FeaturedProductsFilter
          colors={colors}
          surfaces={surfaces}
          applications={applications}
          onFilterChange={handleFilterChange}
          activeFilters={filters}
        />

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <ProductGrid products={displayedProducts} />

            {filteredProducts.length > visibleCount && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={handleLoadMore}
                  className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  Xem thêm
                </Button>
              </div>
            )}
          </>
        )}

        {!isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Không tìm thấy sản phẩm phù hợp với bộ lọc đã chọn.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
