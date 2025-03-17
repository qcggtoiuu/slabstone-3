"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function VideoHero() {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Function to scroll down smoothly
  const scrollDown = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  // Video URL based on device type
  const videoUrl = isMobile
    ? "https://youtube.com/embed/FQZNs2zXC9c?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=FQZNs2zXC9c&playsinline=1"
    : "https://www.youtube.com/embed/KQF2qSRpNTg?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=KQF2qSRpNTg";

  return (
    <div className="relative md:h-[600px] h-screen w-full overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        {isMounted && (
          <iframe
            ref={videoRef}
            src={videoUrl}
            className="absolute w-[150%] h-[150%] md:h-[150%] md:w-[150%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; playsinline"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Nhà máy Đá Nung Kết đầu tiên tại Việt Nam
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-10">
          Khám phá bộ sưu tập mẫu đá nung kết cao cấp của chúng tôi, được chế
          tác để tạo nên vẻ đẹp vĩnh cửu và vượt mọi giới hạn
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 transition-colors"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = "/products";
              }
            }}
          >
            Khám phá ngay
          </Button>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center items-center">
          <button
            onClick={scrollDown}
            className="text-white flex flex-col items-center animate-bounce"
          >
            <span className="mb-2">Cuộn xuống để xem thêm</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
