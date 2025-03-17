"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Shield,
  Thermometer,
  Droplets,
  Brush,
  Maximize,
  Building2,
  Landmark,
  Flag,
} from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  imageUrl: string;
}

const Feature = ({
  title,
  description,
  icon,
  bgColor,
  imageUrl,
}: FeatureProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className={`${bgColor} p-6 rounded-lg flex flex-col items-center justify-center text-center h-full cursor-pointer transition-transform hover:scale-105`}
        >
          <div className="mb-4">{icon}</div>
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogTitle className="text-2xl font-bold mb-2">{title}</DialogTitle>
        <DialogDescription className="text-base mb-4">
          {description}
        </DialogDescription>
        <div className="relative w-full h-[500px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function WhyChooseSlabstone() {
  const features = [
    {
      title: "Chịu lực",
      description: "Khả năng chịu lực vượt trội so với đá thông thường",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      bgColor: "bg-blue-50",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-chiu-luc.jpg",
    },
    {
      title: "Chịu nhiệt",
      description:
        "Công nghệ nung kết giúp đá chịu được nhiệt độ cao, vượt trội so với các loại đá khác",
      icon: <Thermometer className="w-8 h-8 text-red-600" />,
      bgColor: "bg-red-50",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-chiu-nhiet.jpg",
    },
    {
      title: "Chống thấm ố",
      description:
        "Nung ở 1200 độ C, hút ẩm toàn bộ, không còn khả năng hút nước",
      icon: <Droplets className="w-8 h-8 text-cyan-600" />,
      bgColor: "bg-cyan-50",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-chiu-luc.jpg",
    },
    {
      title: "Chống trầy xước",
      description: "Bề mặt cứng cáp, khó bị trầy xước trong quá trình sử dụng",
      icon: <Brush className="w-8 h-8 text-amber-600" />,
      bgColor: "bg-amber-50",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-chiu-luc.jpg",
    },
    {
      title: "Khổ lớn",
      description:
        "Sản xuất được các tấm đá có kích thước lớn lên tới 1600*2400 (mm), đáp ứng mọi nhu cầu thiết kế",
      icon: <Maximize className="w-8 h-8 text-green-600" />,
      bgColor: "bg-green-50",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-kho-lon.jpg",
    },
    {
      title: "Công nghệ Italy",
      description:
        "Dây chuyền nhập khẩu 100% công nghệ Italy, tự động hóa 100% bằng Robot (hãng Sacmi)",
      icon: <Building2 className="w-8 h-8 text-indigo-600" />,
      bgColor: "bg-indigo-50",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-cong-nghe-italy.jpg",
    },
    {
      title: "Đầu tư lớn",
      description:
        "Vốn đầu tư 1000 tỷ đồng cho công nghệ và cơ sở vật chất hiện đại",
      icon: <Landmark className="w-8 h-8 text-purple-600" />,
      bgColor: "bg-purple-50",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-day-chuyen-1km.jpg",
    },
    {
      title: "Tiên phong",
      description: "Nhà máy đá nung kết đầu tiên tại Việt Nam",
      icon: <Flag className="w-8 h-8 text-rose-600" />,
      bgColor: "bg-rose-50",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-nha-may-tien-phong.jpg",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-slate-900 px-8 py-3 mb-4">
            <h2 className="text-3xl font-bold text-white">
              VÌ SAO CHỌN SLABSTONE
            </h2>
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Đá nung kết SLABSTONE vượt trội với 8 ưu điểm nổi bật, mang đến giải
            pháp hoàn hảo cho không gian sống của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              bgColor={feature.bgColor}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
