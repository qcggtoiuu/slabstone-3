import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { NewsItem } from "@/components/news-section";

// This would typically come from a database
const news: NewsItem[] = [
  {
    id: "1",
    date: "15/03/2024",
    title: "Xu hướng thiết kế nội thất với đá cao cấp 2024",
    description:
      "Khám phá những xu hướng mới nhất trong việc sử dụng đá cao cấp cho thiết kế nội thất...",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    slug: "xu-huong-thiet-ke-noi-that-voi-da-cao-cap-2024",
  },
  {
    id: "2",
    date: "10/03/2024",
    title: "SLABSTONE ra mắt bộ sưu tập mới",
    description:
      "Bộ sưu tập mới với những mẫu đá độc đáo, kết hợp công nghệ tiên tiến...",
    imageUrl:
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80",
    slug: "slabstone-ra-mat-bo-suu-tap-moi",
  },
  {
    id: "3",
    date: "05/03/2024",
    title: "Công nghệ sản xuất đá nhân tạo hiện đại",
    description:
      "Tìm hiểu quy trình sản xuất đá nhân tạo với công nghệ tiên tiến nhất...",
    imageUrl:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
    slug: "cong-nghe-san-xuat-da-nhan-tao-hien-dai",
  },
];

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props) {
  const newsItem = news.find((item) => item.slug === params.slug);

  if (!newsItem) {
    return {
      title: "Tin tức không tồn tại",
      description: "Không tìm thấy bài viết",
    };
  }

  return {
    title: `${newsItem.title} - SLABSTONE`,
    description: newsItem.description,
  };
}

export default function NewsDetailPage({ params }: Props) {
  const newsItem = news.find((item) => item.slug === params.slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/tin-tuc"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Quay lại tin tức
        </Link>

        <article className="bg-white rounded-lg shadow-sm overflow-hidden max-w-4xl mx-auto">
          <div className="relative h-96">
            <img
              src={newsItem.imageUrl}
              alt={newsItem.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="p-8">
            <div className="text-gray-500 text-sm mb-4">{newsItem.date}</div>
            <h1 className="text-3xl font-bold mb-6">{newsItem.title}</h1>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                {newsItem.description}
              </p>

              {/* Sample content - in a real app, this would come from a CMS or database */}
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
                ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                nisl sit amet nisl.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Đặc điểm nổi bật
              </h2>

              <p className="mb-4">
                Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
                ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                nisl sit amet nisl.
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">
                  Chất lượng cao cấp, bền đẹp theo thời gian
                </li>
                <li className="mb-2">
                  Đa dạng mẫu mã, phù hợp nhiều phong cách
                </li>
                <li className="mb-2">Công nghệ sản xuất tiên tiến</li>
                <li className="mb-2">Thân thiện với môi trường</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Ứng dụng</h2>

              <p className="mb-4">
                Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
                ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                nisl sit amet nisl.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
