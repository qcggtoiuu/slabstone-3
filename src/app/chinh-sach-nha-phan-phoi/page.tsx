import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách nhà phân phối - SLABSTONE",
  description:
    "Thông tin về chính sách dành cho nhà phân phối và đại lý của SLABSTONE.",
};

export default function ChinhSachNhaPhanPhoiPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Chính sách nhà phân phối
        </h1>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Đối tượng áp dụng</h2>
            <p className="text-gray-700 mb-4">
              Chính sách này áp dụng cho các đơn vị, cá nhân có nhu cầu trở
              thành nhà phân phối, đại lý chính thức của sản phẩm đá SLABSTONE
              trên toàn quốc.
            </p>
            <p className="text-gray-700">
              Nhà phân phối được hiểu là đơn vị kinh doanh độc lập, có đủ năng
              lực tài chính và nhân sự để phân phối sản phẩm SLABSTONE trong khu
              vực được phân công.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Quyền lợi nhà phân phối</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Được cung cấp sản phẩm với giá ưu đãi dành riêng cho nhà phân
                phối
              </li>
              <li>Được hỗ trợ đào tạo về sản phẩm và kỹ thuật từ SLABSTONE</li>
              <li>
                Được cung cấp các tài liệu marketing, catalogue và mẫu sản phẩm
              </li>
              <li>
                Được hỗ trợ trưng bày showroom theo tiêu chuẩn của SLABSTONE
              </li>
              <li>
                Được ưu tiên cung cấp sản phẩm mới và độc quyền trong khu vực
              </li>
              <li>
                Được hỗ trợ giải quyết các vấn đề kỹ thuật và bảo hành sản phẩm
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Điều kiện trở thành nhà phân phối
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Có giấy phép kinh doanh hợp pháp</li>
              <li>Có showroom/cửa hàng với diện tích tối thiểu 100m²</li>
              <li>Có đội ngũ nhân viên kinh doanh và kỹ thuật</li>
              <li>
                Có khả năng đáp ứng doanh số tối thiểu theo quy định của
                SLABSTONE
              </li>
              <li>
                Cam kết tuân thủ các quy định về bảo vệ thương hiệu và chính
                sách giá
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Quy trình đăng ký</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Liên hệ với SLABSTONE qua email hoặc hotline</li>
              <li>Điền đơn đăng ký và cung cấp hồ sơ năng lực</li>
              <li>Đại diện SLABSTONE sẽ khảo sát địa điểm kinh doanh</li>
              <li>Ký kết hợp đồng phân phối nếu đáp ứng đủ điều kiện</li>
              <li>Tham gia đào tạo và nhận các hỗ trợ ban đầu</li>
            </ol>
          </section>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Liên hệ để trở thành nhà phân phối
            </h3>
            <p className="text-gray-700 mb-4">
              Để biết thêm thông tin chi tiết và đăng ký trở thành nhà phân phối
              của SLABSTONE, vui lòng liên hệ với chúng tôi qua:
            </p>
            <ul className="text-gray-700">
              <li>
                <strong>Hotline:</strong> 0978649797
              </li>
              <li>
                <strong>Email:</strong> distributor@slabstone.com.vn
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
