import { Phone } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="w-full bg-gray-800 text-white py-2 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <Link href="/nha-may" className="text-sm hover:text-gray-300">
            Nhà máy
          </Link>
          <Link
            href="/chinh-sach-nha-phan-phoi"
            className="text-sm hover:text-gray-300"
          >
            Chính sách nhà phân phối
          </Link>
        </div>
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-2" />
          <span className="text-sm">Hotline: 0978649797</span>
        </div>
      </div>
    </div>
  );
}
