"use client";

import { useState } from "react";
import {
  Shield,
  Sparkles,
  Hammer,
  Utensils,
  Droplets,
  Beaker,
  Palette,
  Flame,
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

const Feature = ({ icon, title, subtitle, className = "" }: FeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center text-center transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-white rounded-full p-6 mb-4 shadow-sm transition-transform duration-300 ${isHovered ? "scale-115" : ""}`}
      >
        {icon}
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  );
};

export default function ProductFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          ĐẶC TÍNH SẢN PHẨM
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <Feature
            icon={<Shield className="w-8 h-8 text-gray-600" />}
            title="Nguyên vật liệu chất lượng cao"
            subtitle="High quality materials"
          />
          <Feature
            icon={<Sparkles className="w-8 h-8 text-gray-600" />}
            title="Dễ vệ sinh"
            subtitle="Easy to clean"
          />
          <Feature
            icon={<Hammer className="w-8 h-8 text-gray-600" />}
            title="Chống trầy xước"
            subtitle="Scratch & impact resistance"
          />
          <Feature
            icon={<Utensils className="w-8 h-8 text-gray-600" />}
            title="An toàn thực phẩm"
            subtitle="Safe for food"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Feature
            icon={<Droplets className="w-8 h-8 text-gray-600" />}
            title="Chống thấm"
            subtitle="Waterproof"
          />
          <Feature
            icon={<Beaker className="w-8 h-8 text-gray-600" />}
            title="Chống ố và hóa chất"
            subtitle="Chemical & stain resistance"
          />
          <Feature
            icon={<Palette className="w-8 h-8 text-gray-600" />}
            title="Bền màu"
            subtitle="Color fast"
          />
          <Feature
            icon={<Flame className="w-8 h-8 text-gray-600" />}
            title="Chống cháy"
            subtitle="Fire resistance"
          />
        </div>
      </div>
    </section>
  );
}
