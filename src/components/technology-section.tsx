import { Check } from "lucide-react";

export default function TechnologySection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <img
              src="https://www.sacmi.com/SacmiCorporate/media/ceramics/continua/linea_continua_2024.png"
              alt="Công nghệ CONTINUA+ 2000"
              className="w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Công nghệ CONTINUA+ 2000 đột phá
            </h2>

            <p className="text-gray-600 mb-6">
              Bạn đã từng mơ ước sở hữu những tấm đá hoàn mỹ với kích thước
              không lò mà không có điểm khiếm khuyết? SLABSTONE chính là câu trả
              lời với công nghệ CONTINUA+ 2000 đột phá.
            </p>

            <p className="text-gray-600 mb-6">
              Được sinh ra từ sự hợp tác giữa Trung Đô và những gã khổng lồ hàng
              đầu thế giới trong ngành công nghiệp đá như Sacmi, Esmalglass
              Itaca & Fritta - SLABSTONE mang đến:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Đá nung kết siêu khổ với độ hoàn thiện tuyệt đối
                </p>
              </div>

              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Hệ thống kiểm soát MDX tiên tiến, đảm bảo từng mm² đều hoàn
                  hảo
                </p>
              </div>

              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Dây chuyền 5 tầng hiện đại với chiều dài 260m - Quy mô lớn
                  nhất Việt Nam
                </p>
              </div>
            </div>

            <p className="text-gray-800 font-medium mb-6">
              Với SLABSTONE, chúng tôi không chỉ sản xuất đá - chúng tôi kiến
              tạo những kiệt tác. Mỗi tấm đá là một tác phẩm nghệ thuật, nơi
              công nghệ và đam mê hội tụ để tạo nên vẻ đẹp vĩnh cửu cho không
              gian của bạn.
            </p>

            <p className="text-gray-800 font-semibold">
              Hãy để SLABSTONE nâng tầm không gian sống của bạn lên một đẳng cấp
              mới!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
