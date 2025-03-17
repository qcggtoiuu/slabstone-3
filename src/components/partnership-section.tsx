"use client";

import Image from "next/image";
import { Building2, Landmark, User } from "lucide-react";
import { Button } from "./ui/button";

interface PartnershipCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  imageUrl: string;
  buttonText: string;
}

const PartnershipCard = ({
  title,
  description,
  features,
  icon,
  imageUrl,
  buttonText,
}: PartnershipCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-3 rounded-full">{icon}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <Button
          variant="default"
          className="w-full bg-slate-900 hover:bg-slate-800"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default function PartnershipSection() {
  const partnerships = [
    {
      title: "Nhà phân phối/ đại lý",
      description: "Trở thành đối tác phân phối sản phẩm SLABSTONE",
      features: [
        "Chính sách chiết khấu hấp dẫn",
        "Hỗ trợ marketing",
        "Đào tạo chuyên sâu",
      ],
      icon: <Building2 className="w-6 h-6 text-slate-900" />,
      imageUrl:
        "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800&q=80",
      buttonText: "Tìm hiểu thêm",
    },
    {
      title: "Dự án",
      description: "Hợp tác phát triển dự án với SLABSTONE",
      features: ["Tư vấn kỹ thuật", "Hỗ trợ thiết kế", "Giá ưu đãi đặc biệt"],
      icon: <Landmark className="w-6 h-6 text-slate-900" />,
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      buttonText: "Tìm hiểu thêm",
    },
    {
      title: "Kiến trúc sư",
      description: "Đồng hành cùng SLABSTONE trong các dự án thiết kế",
      features: [
        "Mẫu sản phẩm miễn phí",
        "Hỗ trợ kỹ thuật",
        "Đào tạo sản phẩm",
      ],
      icon: <User className="w-6 h-6 text-slate-900" />,
      imageUrl:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      buttonText: "Tìm hiểu thêm",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">HỢP TÁC VỚI SLABSTONE</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Cùng SLABSTONE kiến tạo không gian sống đẳng cấp và phát triển bền
            vững
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => (
            <PartnershipCard
              key={index}
              title={partnership.title}
              description={partnership.description}
              features={partnership.features}
              icon={partnership.icon}
              imageUrl={partnership.imageUrl}
              buttonText={partnership.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
