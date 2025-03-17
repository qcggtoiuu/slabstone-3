import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch>
          <Image
            src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-logo.png"
            alt="SlabStone Logo"
            width={180}
            height={40}
            className="h-auto"
          />
        </Link>
        <div className="flex gap-8 items-center">
          <Link
            href="/ve-chung-toi"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Về chúng tôi
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Sản phẩm
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Dự án
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Bảng giá
          </Link>
          <Link
            href="/news"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Tin tức
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Liên hệ
          </Link>
          <Link href="/quantri/login" className="hidden">
            <Button variant="outline">Admin Access</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
