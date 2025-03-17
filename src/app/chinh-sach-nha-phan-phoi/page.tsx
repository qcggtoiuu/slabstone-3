import { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Chính sách nhà phân phối - SLABSTONE",
  description:
    "Thông tin về chính sách dành cho nhà phân phối và đại lý của SLABSTONE.",
};

export default function ChinhSachNhaPhanPhoiPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Chính sách Nhà phân phối
        </h1>

        <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto">
          Trở thành đối tác của SLABSTONE và cùng nhau phát triển trong lĩnh vực
          đá cao cấp.
        </p>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Tier 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-900 text-white p-6 text-center">
              <h2 className="text-2xl font-bold">ĐẠI LÝ CẤP 1</h2>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-4">QUYỀN LỢI:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Hỗ trợ toàn diện: bảng hiệu, nhận diện thương hiệu
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mẫu sản phẩm: Tặng khi đạt doanh số năm</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Công cụ bán hàng: Catalogue, tài liệu, kịch bản, hộp mẫu,
                    cây trưng bày
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Phần mềm Slabstone.App: Thiết kế, báo giá, quản lý kho (trị
                    giá 200 triệu)
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Đào tạo chuyên sâu: Bán hàng, marketing đa nền tảng
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Kết nối thị trường: Tổng thầu, chủ đầu tư, kiến trúc sư
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hỗ trợ Sale tại địa bàn</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm relative">
            <div className="absolute right-4 top-4 bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              PREMIUM
            </div>
            <div className="bg-gray-900 text-white p-6 text-center">
              <h2 className="text-2xl font-bold">TỔNG PHÂN PHỐI</h2>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-4">QUYỀN LỢI:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Thiết kế miễn phí</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Hỗ trợ toàn diện: bảng hiệu, nhận diện thương hiệu
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mẫu sản phẩm: Tặng khi đạt doanh số năm</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Công cụ bán hàng: Catalogue, tài liệu, kịch bản, hộp mẫu,
                    cây trưng bày
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Phần mềm Slabstone.App: Thiết kế, báo giá, quản lý kho (trị
                    giá 200 triệu)
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Đào tạo chuyên sâu: Bán hàng, marketing đa nền tảng
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Kết nối thị trường: Tổng thầu, chủ đầu tư, kiến trúc sư
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hỗ trợ Sale tại địa bàn</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Thưởng doanh số & khuyến mãi đặc biệt theo đợt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Partnership Conditions */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-8">
            Điều kiện trở thành đối tác
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>
                Có showroom hoặc cửa hàng kinh doanh vật liệu xây dựng
              </span>
            </div>

            <div className="bg-gray-50 p-4 rounded-md flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Có kinh nghiệm trong lĩnh vực phân phối đá cao cấp</span>
            </div>

            <div className="bg-gray-50 p-4 rounded-md flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Có năng lực tài chính và kho bãi phù hợp</span>
            </div>

            <div className="bg-gray-50 p-4 rounded-md flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Cam kết phát triển thương hiệu SLABSTONE</span>
            </div>

            <div className="bg-gray-50 p-4 rounded-md flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span>Đội ngũ nhân viên bán hàng chuyên nghiệp</span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Liên hệ hợp tác</h2>
          <p className="text-gray-700 mb-6">
            Để biết thêm thông tin chi tiết về chính sách đối tác, vui lòng liên
            hệ:
          </p>

          <div className="flex justify-center items-center space-x-2 mb-2">
            <span className="font-semibold">Hotline:</span>
            <span className="bg-gray-100 px-3 py-1 rounded">0978649797</span>
            <span className="px-2">|</span>
            <span className="font-semibold">Email:</span>
            <a
              href="mailto:hello@slabstone.com.vn"
              className="text-blue-600 hover:underline"
            >
              hello@slabstone.com.vn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
