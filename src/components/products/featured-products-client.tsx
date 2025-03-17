"use client";

import { useState, useEffect } from "react";
import ProductGrid from "@/components/products/product-grid";
import FeaturedProductsFilter from "@/components/products/featured-products-filter";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";

interface FeaturedProductsClientProps {
  initialProducts: Product[];
  colors: string[];
  surfaces: string[];
  applications: string[];
}

export default function FeaturedProductsClient({
  initialProducts,
  colors,
  surfaces,
  applications,
}: FeaturedProductsClientProps) {
  const [products] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(initialProducts);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [filters, setFilters] = useState<{
    color?: string;
    surface?: string;
    application?: string;
  }>({});

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);

    // Apply filters to products
    let filtered = [...products];

    if (newFilters.color) {
      filtered = filtered.filter(
        (product) => product.color === newFilters.color,
      );
    }

    if (newFilters.surface) {
      filtered = filtered.filter(
        (product) => product.surface === newFilters.surface,
      );
    }

    if (newFilters.application) {
      filtered = filtered.filter(
        (product) => product.application === newFilters.application,
      );
    }

    setFilteredProducts(filtered);
    // Reset visible count when filters change
    setVisibleCount(12);
  };

  // Update displayed products whenever filtered products or visible count changes
  useEffect(() => {
    setDisplayedProducts(filteredProducts.slice(0, visibleCount));
  }, [filteredProducts, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div>
      <FeaturedProductsFilter
        colors={colors}
        surfaces={surfaces}
        applications={applications}
        onFilterChange={handleFilterChange}
        activeFilters={filters}
      />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            Không tìm thấy sản phẩm phù hợp với bộ lọc đã chọn.
          </p>
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
    </div>
  );
}
