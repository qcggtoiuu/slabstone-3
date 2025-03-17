import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description Column */}
          <div>
            <div className="mb-4">
              <Image
                src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/230207_SLABSTONE_LOGO_WhiteRed-1.png"
                alt="SLABSTONE Logo"
                width={200}
                height={50}
                className="mb-4"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á, với công
              nghệ tiên tiến từ SACMI Italia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/danungketslabstone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@danungketslabstone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <span className="sr-only">TikTok</span>
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
                >
                  <path d="M9 12a3 3 0 1 0 3 3V6c.333 1.667 1.667 3 5 3v3c-1.022 0-2.048-.15-3-.6v3.6a6 6 0 1 1-5-5.997" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@danungketslabstone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Liên kết nhanh Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ve-chung-toi"
                  className="text-gray-300 hover:text-white"
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/san-pham"
                  className="text-gray-300 hover:text-white"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/du-an" className="text-gray-300 hover:text-white">
                  Dự án
                </Link>
              </li>
              <li>
                <Link
                  href="/tin-tuc"
                  className="text-gray-300 hover:text-white"
                >
                  Tin tức
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="text-gray-300 hover:text-white"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-gray-300 mr-2 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-gray-300">
                  Nghi Văn, Nghi Lộc, Nghệ An
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-gray-300 mr-2 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-gray-300">0978649797</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-gray-300 mr-2 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-gray-300">hello@slabstone.com.vn</span>
              </li>
            </ul>
          </div>

          {/* Showroom Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Showroom</h3>
            <p className="text-gray-300 font-semibold">Hà Nội:</p>
            <p className="text-gray-300 mb-4">
              Tầng 2, toà nhà N03-T6, Đoàn Ngoại Giao, Phường Xuân Tảo, Quận Bắc
              Từ Liêm, Thành phố Hà Nội, Việt Nam
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center">
          <div className="text-gray-300">
            © {currentYear} SLABSTONE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
