import { Metadata } from "next";
import PricingPage from "@/components/pricing/pricing-page";

export const metadata: Metadata = {
  title: "Bảng giá sản phẩm - SLABSTONE",
  description:
    "Bảng giá các loại đá cao cấp, đá thạch anh, đá marble, đá granite, đá tự nhiên và đá nhân tạo",
};

export default function BangGia() {
  return <PricingPage />;
}
