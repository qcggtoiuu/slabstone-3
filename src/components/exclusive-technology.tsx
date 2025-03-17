"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ExclusiveTechnology() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="bg-black py-24">
      {/* Header with black background */}
      <div className="py-12 mb-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            CÔNG NGHỆ ĐỘC QUYỀN
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto">
            Khám phá hai công nghệ độc quyền tạo nên sự khác biệt của đá
            SLABSTONE
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* BODYTECH Column */}
          <div className="relative overflow-hidden">
            {/* Background Image */}
            <div className="relative h-[500px] w-full">
              <Image
                src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/bodytechnen.jpg"
                alt="BODYTECH Background"
                fill
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                <div className="w-48 h-24 relative mb-6">
                  <Image
                    src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/Bodytech-white-rieng-1-1.png"
                    alt="BODYTECH Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-center leading-relaxed">
                  BODYTECH - nơi nghệ thuật tạo hình đá đạt đến đỉnh cao hoàn
                  mỹ. Quên đi những tấm đá thông thường, BODYTECH đánh dấu bước
                  đột phá trong việc tái tạo vẻ đẹp tự nhiên của đá. Với công
                  nghệ độc quyền này, chúng tôi tạo ra những tấm đá có kết cấu
                  xương hoàn hảo, mô phỏng chính xác vẻ đẹp của đá tự nhiên,
                  đồng thời nâng cao tính năng kỹ thuật vượt trội và tối ưu hóa
                  mọi đặc tính của sản phẩm.
                </p>
              </div>
            </div>
          </div>

          {/* VEINTECH Column */}
          <div className="relative overflow-hidden">
            {/* Background Image */}
            <div className="relative h-[500px] w-full">
              <Image
                src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/veintechnen.jpg"
                alt="VEINTECH Background"
                fill
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                <div className="w-48 h-24 relative mb-6">
                  <Image
                    src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/Vientech-white-rieng-1.png"
                    alt="VEINTECH Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-center leading-relaxed">
                  VEINTECH không đơn thuần là một công nghệ - đây là nghệ thuật
                  tạo hình đường vân tinh tế đỉnh cao. Bằng việc tái hiện hoàn
                  hảo những đường vân tự nhiên và kiểm soát tuyệt đối lượng
                  khoáng chất, VEINTECH tạo nên độ đồng nhất tuyệt đối giữa bề
                  mặt và phần thân của tấm đá. Mỗi đường vân được thiết kế tỉ mỉ
                  mang đến màu sắc tinh tế, sống động như chính đá tự nhiên.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
