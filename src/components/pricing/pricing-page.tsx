"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import PriceCard from "@/components/pricing/price-card";
import PriceRequestForm from "@/components/pricing/price-request-form";

const stoneTypes = [
  {
    id: "da-cao-cap",
    title: "Đá cao cấp",
    description: "Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí",
  },
  {
    id: "da-thach-anh",
    title: "Đá thạch anh",
    description: "Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí",
  },
  {
    id: "da-marble",
    title: "Đá marble",
    description: "Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí",
  },
  {
    id: "da-granite",
    title: "Đá granite",
    description: "Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí",
  },
  {
    id: "da-tu-nhien",
    title: "Đá tự nhiên",
    description: "Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí",
  },
  {
    id: "da-nhan-tao",
    title: "Đá nhân tạo",
    description: "Liên hệ để nhận báo giá chi tiết và tư vấn miễn phí",
  },
];

export default function PricingPage() {
  const [selectedStone, setSelectedStone] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRequestPrice = (stoneId: string) => {
    setSelectedStone(stoneId);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const stoneTitle =
    stoneTypes.find((stone) => stone.id === selectedStone)?.title || "";

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Bảng giá sản phẩm
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Liên hệ với chúng tôi để nhận báo giá chi tiết và tư vấn về sản phẩm
        </p>

        <div className="mt-8">
          <a
            href="https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-md transition-colors"
          >
            <Download className="mr-2 h-5 w-5" />
            Tải catalogue
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stoneTypes.map((stone) => (
          <PriceCard
            key={stone.id}
            title={stone.title}
            description={stone.description}
            onRequestPrice={() => handleRequestPrice(stone.id)}
          />
        ))}
      </div>

      {isFormOpen && (
        <PriceRequestForm stoneTitle={stoneTitle} onClose={handleCloseForm} />
      )}
    </div>
  );
}
