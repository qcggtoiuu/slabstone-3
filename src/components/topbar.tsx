import { Phone } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <a href="#" className="text-sm hover:text-gray-300">
            Nhà máy
          </a>
          <a href="#" className="text-sm hover:text-gray-300">
            Chính sách nhà phân phối
          </a>
        </div>
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-2" />
          <span className="text-sm">Hotline: 0978649797</span>
        </div>
      </div>
    </div>
  );
}
