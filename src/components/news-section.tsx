"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export default function NewsSection() {
  const pathname = usePathname();
  const isNewsPage = pathname === "/tin-tuc";

  const news: NewsItem[] = [
    {
      id: "1",
      date: "15/03/2024",
      title: "Xu hướng thiết kế nội thất với đá cao cấp 2024",
      description:
        "Khám phá những xu hướng mới nhất trong việc sử dụng đá cao cấp cho thiết kế nội thất...",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      slug: "xu-huong-thiet-ke-noi-that-voi-da-cao-cap-2024",
    },
    {
      id: "2",
      date: "10/03/2024",
      title: "SLABSTONE ra mắt bộ sưu tập mới",
      description:
        "Bộ sưu tập mới với những mẫu đá độc đáo, kết hợp công nghệ tiên tiến...",
      imageUrl:
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
      slug: "slabstone-ra-mat-bo-suu-tap-moi",
    },
    {
      id: "3",
      date: "05/03/2024",
      title: "Công nghệ sản xuất đá nhân tạo hiện đại",
      description:
        "Tìm hiểu quy trình sản xuất đá nhân tạo với công nghệ tiên tiến nhất...",
      imageUrl:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      slug: "cong-nghe-san-xuat-da-nhan-tao-hien-dai",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* This heading is only shown on the homepage, not on the dedicated news page */}
        {!isNewsPage && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tin tức & Sự kiện</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cập nhật những tin tức mới nhất từ SLABSTONE
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
                  href={`/tin-tuc/${item.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Đọc thêm <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
