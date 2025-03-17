import { Metadata } from "next";
import Image from "next/image";
import VideoIntroduction from "@/components/video-introduction";
import ManufacturingProcess from "@/components/manufacturing-process";
import ExclusiveTechnology from "@/components/exclusive-technology";

export const metadata: Metadata = {
  title: "Nhà máy SLABSTONE - Công nghệ hiện đại nhất Đông Nam Á",
  description:
    "Tìm hiểu về nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á của SLABSTONE.",
};

export default function NhaMayPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/3306588-scaled.jpg"
            alt="SLABSTONE Factory"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            NHÀ MÁY HIỆN ĐẠI NHẤT ĐÔNG NAM Á
          </h1>
          <p className="text-lg">THE MOST MODERN FACTORY IN SOUTHEAST ASIA</p>
        </div>
      </section>

      {/* Factory Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 uppercase text-sm mb-1">QUY MÔ</h3>
              <p className="text-gray-400 text-xs mb-3">Total Area</p>
              <p className="text-3xl font-bold">
                430.000 m<sup>2</sup>
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 uppercase text-sm mb-1">
                TỔNG ĐẦU TƯ
              </h3>
              <p className="text-gray-400 text-xs mb-3">Total capital</p>
              <p className="text-3xl font-bold">1000 tỷ</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 uppercase text-sm mb-1">
                CÔNG SUẤT
              </h3>
              <p className="text-gray-400 text-xs mb-3">Capacity</p>
              <p className="text-3xl font-bold">
                3.2 tr m<sup>2</sup>/năm
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 uppercase text-sm mb-1">NHÂN LỰC</h3>
              <p className="text-gray-400 text-xs mb-3">Employees</p>
              <p className="text-3xl font-bold">150 người</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Introduction Section */}
      <VideoIntroduction />

      {/* Manufacturing Process Section */}
      <ManufacturingProcess />

      {/* Exclusive Technology Section */}
      <ExclusiveTechnology />
    </main>
  );
}
