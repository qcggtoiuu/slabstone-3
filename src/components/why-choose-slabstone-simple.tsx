"use client";

import Image from "next/image";

export default function WhyChooseSlabstoneSimple() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
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
              SLABSTONE tạo ra tiêu chuẩn mới cho kiến trúc dự án nơi kích thước
              quyết định đến tính thẩm mỹ.
            </p>
            <p className="text-gray-500 italic">
              With dimensions up to 1600 x 2400 cm, equivalent to 3.84 m²,
              SLABSTONE sets a new standard for project architecture where size
              determines aesthetics.
            </p>
          </div>
          <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden">
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
          <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
              alt="Ứng dụng không giới hạn"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-2">ỨNG DỤNG KHÔNG GIỚI HẠN</h3>
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
              98% nguyên liệu sản phẩm được điều chế từ phòng S-Lab tại Nghệ An
              và lấy từ nguồn địa phương giúp chúng tôi kiểm soát điều kiện chất
              lượng nguyên vật liệu tốt nhất.
            </p>
            <p className="text-gray-500 italic">
              98% of product materials are prepared from S-Lab in Nghe An and
              sourced from local sources, helping us to control the best quality
              of raw materials.
            </p>
          </div>
          <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden">
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
  );
}
