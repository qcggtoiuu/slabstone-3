import { Metadata } from "next";
// Navbar and Footer are now in the root layout
import Image from "next/image";
import ProductFeatures from "@/components/product-features";
import InnovationSection from "@/components/innovation-section";
import FactorySection from "@/components/factory-section";

export const metadata: Metadata = {
  title: "Về Chúng Tôi | SLABSTONE",
  description:
    "Tìm hiểu về nhà máy sản xuất đá nung kết hiện đại nhất Đông Nam Á của SLABSTONE.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/3306588-scaled.jpg"
            alt="SLABSTONE Factory"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            NHÀ MÁY HIỆN ĐẠI NHẤT ĐÔNG NAM Á
          </h1>
          <p className="text-lg">THE MOST MODERN FACTORY IN SOUTHEAST ASIA</p>
        </div>
      </section>

      {/* Factory Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 uppercase text-sm mb-1">QUY MÔ</h3>
              <p className="text-gray-400 text-xs mb-3">Total Area</p>
              <p className="text-3xl font-bold">
                430.000 m<sup>2</sup>
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 uppercase text-sm mb-1">
                TỔNG ĐẦU TƯ
              </h3>
              <p className="text-gray-400 text-xs mb-3">Total capital</p>
              <p className="text-3xl font-bold">1000 tỷ</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 uppercase text-sm mb-1">
                CÔNG SUẤT
              </h3>
              <p className="text-gray-400 text-xs mb-3">Capacity</p>
              <p className="text-3xl font-bold">
                3.2 tr m<sup>2</sup>/năm
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-gray-500 uppercase text-sm mb-1">NHÂN LỰC</h3>
              <p className="text-gray-400 text-xs mb-3">Employees</p>
              <p className="text-3xl font-bold">150 người</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">TẦM NHÌN</h2>
              <p className="text-gray-700 mb-4">
                Trở thành nhà máy sản xuất vật liệu xây dựng gốm sứ tiên phong
                tại Việt Nam sử dụng công nghệ tiên tiến nhất và thân thiện với
                môi trường.
              </p>
              <p className="text-gray-500 italic">
                To become the pioneer in ceramics industry in Vietnam using the
                most advanced and eco-friendly technology.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">SẢN PHẨM</h2>
              <p className="text-gray-700 mb-4">
                Đá nung kết khổ lớn và gạch ốp lát cao cấp với kích thước và
                chất lượng vượt trội là những sản phẩm chủ lực của nhà máy
                SLABSTONE TRUNGDO. Các sản phẩm có thể đạt kích thước lên đến
                1600x2400mm và độ dày 20mm.
              </p>
              <p className="text-gray-500 italic">
                Large-format sintered stones and high-grade porcelain tiles with
                superior dimensions and quality are the flagship products of
                SLABSTONE TRUNGDO factory.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductFeatures />

      {/* Why Choose Slabstone Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            TẠI SAO CHỌN SLABSTONE?
          </h2>
          <p className="text-center text-gray-500 mb-12">WHY SLABSTONE?</p>

          {/* First Feature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">KÍCH THƯỚC VƯỢT TRỘI</h3>
              <p className="text-gray-500 mb-4">ULTRA SIZES</p>
              <p className="text-gray-700 mb-4">
                Với kích thước lên đến 1600 x 2400 cm, tương đương với 3.84 m²,
                SLABSTONE tạo ra tiêu chuẩn mới cho kiến trúc dự án nơi kích
                thước quyết định đến tính thẩm mỹ.
              </p>
              <p className="text-gray-500 italic">
                With dimensions up to 1600 x 2400 cm, equivalent to 3.84 m²,
                SLABSTONE sets a new standard for project architecture where
                size determines aesthetics.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-kho-lon.jpg"
                alt="Kích thước vượt trội"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Second Feature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
                alt="Ứng dụng không giới hạn"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-2">
                ỨNG DỤNG KHÔNG GIỚI HẠN
              </h3>
              <p className="text-gray-500 mb-4">BOUNDLESS APPLICATIONS</p>
              <p className="text-gray-700 mb-4">
                Các không gian ứng dụng được mở ra và tầm kích thước và đặc tính
                kỹ thuật không còn là rào cản với SLABSTONE
              </p>
              <p className="text-gray-500 italic">
                The application designs are endlessly opened when sizes and
                technical specifications are no longer a limitation with
                SLABSTONE.
              </p>
            </div>
          </div>

          {/* Third Feature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">SẢN XUẤT TẠI VIỆT NAM</h3>
              <p className="text-gray-500 mb-4">MADE IN VIETNAM</p>
              <p className="text-gray-700 mb-4">
                98% nguyên liệu sản phẩm được điều chế từ phòng S-Lab tại Nghệ
                An và lấy từ nguồn địa phương giúp chúng tôi kiểm soát điều kiện
                chất lượng nguyên vật liệu tốt nhất.
              </p>
              <p className="text-gray-500 italic">
                98% of product materials are prepared from S-Lab in Nghe An and
                sourced from local sources, helping us to control the best
                quality of raw materials.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-nha-may-tien-phong.jpg"
                alt="Sản xuất tại Việt Nam"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation in New Technology Section */}
      <InnovationSection />

      {/* Factory Section */}
      <FactorySection />

      {/* Manufacturing Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              QUY TRÌNH SẢN XUẤT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://www.sacmi.com/SacmiCorporate/media/ceramics/continua/linea_continua_2024.png"
                alt="Dây chuyền sản xuất CONTINUA+"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Công nghệ CONTINUA+ 2000 đột phá
              </h3>
              <p className="text-gray-700">
                Bạn đã từng mơ ước sở hữu những tấm đá hoàn mỹ với kích thước
                khổng lồ mà không có điểm khiếm khuyết? SLABSTONE chính là câu
                trả lời với công nghệ CONTINUA+ 2000 đột phá.
              </p>

              <p className="text-gray-700">
                Được sinh ra từ sự hợp tác giữa Trung Đô và những gã khổng lồ
                hàng đầu thế giới trong ngành công nghiệp đá như Sacmi,
                Esmalglass Itaca & Fritta - SLABSTONE mang đến:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Đá nung kết siêu khổ với độ hoàn thiện tuyệt đối</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Hệ thống kiểm soát MDX tiên tiến, đảm bảo từng mm² đều hoàn
                    hảo
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    Dây chuyền 5 tầng hiện đại với chiều dài 260m - Quy mô lớn
                    nhất Việt Nam
                  </span>
                </li>
              </ul>

              <p className="text-gray-700">
                Với SLABSTONE, chúng tôi không chỉ sản xuất đá - chúng tôi kiến
                tạo những kiệt tác. Mỗi tấm đá là một tác phẩm nghệ thuật, nơi
                công nghệ và đam mê hội tụ để tạo nên vẻ đẹp vĩnh cửu cho không
                gian của bạn.
              </p>

              <p className="font-bold text-lg">
                Hãy để SLABSTONE nâng tầm không gian sống của bạn lên một đẳng
                cấp mới!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
