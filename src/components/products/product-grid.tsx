"use client";

import { Product } from "@/types/product";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import { Download, ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products = [] }: ProductGridProps) {
  // If no products, show placeholder
  if (products.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductPlaceholder key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  // Find primary image or use first image or placeholder
  const primaryImage = product.images?.find((img) => img.is_primary) ||
    product.images?.[0] || {
      url: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=800&q=80",
      alt_text: product.name,
    };

  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
      <Link href={`/products/${product.slug}`}>
        <div className="relative">
          <AspectRatio ratio={4 / 3} className="bg-gray-100">
            <img
              src={primaryImage.url}
              alt={primaryImage.alt_text || product.name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </AspectRatio>
          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            Đá cao cấp
          </div>
        </div>
      </Link>
      <div className="p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        {/* Mobile: Only show product code on larger screens */}
        <div className="hidden md:block text-sm text-gray-500 mb-3">
          Mã sản phẩm: {product.code}
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="font-medium text-gray-900 text-lg">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price)}
          </div>
          {/* Mobile: Hide surface and finish details on mobile */}
          <div className="hidden md:block text-sm text-gray-500">
            {product.surface && (
              <span className="inline-block mr-2">{product.surface}</span>
            )}
            {product.finish && (
              <span className="inline-block">{product.finish}</span>
            )}
          </div>
        </div>
        <ProductDetailDialog product={product} />
      </div>
    </div>
  );
}

function ProductDetailDialog({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const images = product.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white">
          Xem nhanh
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl md:max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            {images.length > 0 ? (
              <div className="relative rounded-lg overflow-hidden">
                {isZoomed ? (
                  <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-4xl max-h-4xl mx-auto p-4">
                      <button
                        onClick={() => setIsZoomed(false)}
                        className="absolute right-6 top-6 bg-white/20 p-2 rounded-full z-10 hover:bg-white/40 transition-colors"
                      >
                        <X className="h-6 w-6 text-white" />
                      </button>
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={
                            images[currentImageIndex]?.url ||
                            "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=1200&q=90"
                          }
                          alt={
                            images[currentImageIndex]?.alt_text || product.name
                          }
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors"
                          >
                            <ChevronLeft className="h-6 w-6 text-white" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors"
                          >
                            <ChevronRight className="h-6 w-6 text-white" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <AspectRatio ratio={1} className="bg-gray-100">
                      <img
                        src={
                          images[currentImageIndex]?.url ||
                          "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=800&q=80"
                        }
                        alt={
                          images[currentImageIndex]?.alt_text || product.name
                        }
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <button
                      onClick={() => setIsZoomed(true)}
                      className="absolute right-3 top-3 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </button>
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            ) : (
              <AspectRatio ratio={1} className="bg-gray-200 rounded-lg">
                <div className="flex items-center justify-center text-gray-400">
                  Không có hình ảnh
                </div>
              </AspectRatio>
            )}
            {images.length > 1 && (
              <div className="flex mt-3 space-x-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${currentImageIndex === index ? "border-blue-600" : "border-transparent"}`}
                  >
                    <img
                      src={image.url}
                      alt={
                        image.alt_text || `${product.name} - ảnh ${index + 1}`
                      }
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <div className="text-sm text-gray-500 mb-3">
              Mã sản phẩm: {product.code}
            </div>
            <div className="text-xl font-semibold mb-4">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.price)}
            </div>

            <div className="space-y-4 mb-6">
              {product.description && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Mô tả
                  </h4>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                {product.surface && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Bề mặt
                    </h4>
                    <p className="font-medium">{product.surface}</p>
                  </div>
                )}
                {product.thickness && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Độ dày
                    </h4>
                    <p className="font-medium">{product.thickness}</p>
                  </div>
                )}
                {product.finish && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Hoàn thiện
                    </h4>
                    <p className="font-medium">{product.finish}</p>
                  </div>
                )}
                {product.color && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Màu sắc
                    </h4>
                    <p className="font-medium">{product.color}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Yêu cầu báo giá
              </Button>
              {product.catalog_url && (
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Tải xuống Catalog</span>
                </Button>
              )}
              <Link href={`/products/${product.slug}`}>
                <Button variant="link" className="w-full">
                  Xem trang chi tiết sản phẩm
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProductPlaceholder() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <AspectRatio ratio={4 / 3} className="bg-gray-200" />
      <div className="p-5">
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
        {/* Mobile: Hide code placeholder on mobile */}
        <div className="hidden md:block h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div className="flex justify-between items-center mb-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          {/* Mobile: Hide specs placeholder on mobile */}
          <div className="hidden md:block h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
}
