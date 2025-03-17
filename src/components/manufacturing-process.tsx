"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ManufacturingProcess() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            QUY TRÌNH SẢN XUẤT
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Khám phá quy trình sản xuất hiện đại tạo nên những tấm đá nung kết
            hoàn hảo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://www.sacmi.com/SacmiCorporate/media/ceramics/continua/linea_continua_2024.png"
              alt="Dây chuyền sản xuất CONTINUA+"
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Công nghệ CONTINUA+ 2000 đột phá
            </h3>
            <p className="text-gray-700">
              Bạn đã từng mơ ước sở hữu những tấm đá hoàn mỹ với kích thước
              khổng lồ mà không có điểm khiếm khuyết? SLABSTONE chính là câu trả
              lời với công nghệ CONTINUA+ 2000 đột phá.
            </p>

            <p className="text-gray-700">
              Được sinh ra từ sự hợp tác giữa Trung Đô và những gã khổng lồ hàng
              đầu thế giới trong ngành công nghiệp đá như Sacmi, Esmalglass
              Itaca & Fritta - SLABSTONE mang đến:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Đá nung kết siêu khổ với độ hoàn thiện tuyệt đối</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Hệ thống kiểm soát MDX tiên tiến, đảm bảo từng mm² đều hoàn
                  hảo
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Dây chuyền 5 tầng hiện đại với chiều dài 260m - Quy mô lớn
                  nhất Việt Nam
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
