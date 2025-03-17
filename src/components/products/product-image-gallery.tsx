"use client";

import { Product } from "@/types/product";
import { useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";

interface ProductImageGalleryProps {
  product: Product;
}

export default function ProductImageGallery({
  product,
}: ProductImageGalleryProps) {
  // If no images, use placeholder
  const images =
    product.images && product.images.length > 0
      ? product.images.sort(
          (a, b) => (a.display_order ?? 0) - (b.display_order ?? 0),
        )
      : [
          {
            id: "placeholder",
            product_id: product.id,
            url: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=800&q=80",
            alt_text: product.name,
            is_primary: true,
            display_order: 0,
            created_at: new Date().toISOString(),
          },
        ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      {/* Main image */}
      <div className="mb-4 overflow-hidden rounded-lg bg-white">
        <AspectRatio ratio={4 / 3} className="bg-gray-100">
          <img
            src={activeImage.url}
            alt={activeImage.alt_text || product.name}
            className="object-contain w-full h-full"
          />
        </AspectRatio>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((image) => (
            <button
              key={image.id}
              onClick={() => setActiveImage(image)}
              className={`overflow-hidden rounded-md ${activeImage.id === image.id ? "ring-2 ring-blue-500" : "ring-1 ring-gray-200"}`}
            >
              <AspectRatio ratio={1} className="bg-gray-100">
                <img
                  src={image.url}
                  alt={image.alt_text || `${product.name} thumbnail`}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
