import NewsSection from "@/components/news-section";

export const metadata = {
  title: "Tin tức & Sự kiện - SLABSTONE",
  description:
    "Cập nhật những tin tức mới nhất từ SLABSTONE về công nghệ sản xuất đá nhân tạo, xu hướng thiết kế và bộ sưu tập mới",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-10 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Tin tức & Sự kiện</h1>
          <p className="text-gray-600 max-w-3xl mb-16">
            Cập nhật tin tức mới nhất về công nghệ sản xuất đá nhân tạo, xu
            hướng thiết kế và dự án tiêu biểu từ SLABSTONE.
          </p>
        </div>
        <NewsSection />
      </div>
    </main>
  );
}
