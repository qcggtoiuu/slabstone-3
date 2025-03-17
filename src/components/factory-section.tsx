"use client";

import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

export default function FactorySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const videoId = "PDYhwdNi_5Y";
  const thumbnailUrl =
    "https://noithatgiakhanh.com/wp-content/uploads/2025/03/thurmnailyoutube.png";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative py-24 bg-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">NHÀ MÁY</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <div className="relative w-full aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl">
              {/* Video Thumbnail */}
              {isMounted && (
                <Image
                  src={thumbnailUrl}
                  alt="SLABSTONE Factory Video Thumbnail"
                  fill
                  className="object-cover"
                />
              )}

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Text overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                <div className="bg-white text-black py-2 px-4 mb-4 font-bold">
                  Ấn nút Play để
                </div>
                <div className="bg-white text-black py-2 px-4 mb-8 font-bold">
                  KHÁM PHÁ NHÀ MÁY SLABSTONE
                </div>

                {/* Play button */}
                <button
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/90 transition-all duration-300 border-2 border-red-500 mx-auto"
                  onClick={() => setIsOpen(true)}
                >
                  <Play className="h-10 w-10 text-red-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg mt-16 text-center">
            <p>
              Với quy mô 430.000m², đầu tư 1000 tỷ đồng và công suất 3.2 triệu
              m²/năm, SLABSTONE TRUNGDO là nhà máy sản xuất đá nung kết hiện đại
              nhất Đông Nam Á. Sở hữu công nghệ Continua+ từ Sacmi Italia, chúng
              tôi tự hào mang đến những tấm đá siêu kích thước lên đến
              1600x2400mm - sự kết tinh hoàn hảo giữa công nghệ châu Âu và nguồn
              nguyên liệu Việt Nam chất lượng cao.
            </p>

            <p>
              Đội ngũ 150 chuyên gia không ngừng sáng tạo, khẳng định vị thế vật
              liệu xây dựng Việt Nam trên thị trường quốc tế. Với SLABSTONE
              TRUNGDO, chúng tôi kiến tạo tương lai.
            </p>
          </div>
        </div>
      </div>

      {isMounted && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-5xl p-0 bg-black overflow-hidden">
            <div className="aspect-video w-full h-[60vh]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="SLABSTONE Factory Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
