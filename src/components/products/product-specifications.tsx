import { Product } from "@/types/product";

interface ProductSpecificationsProps {
  product: Product;
}

export default function ProductSpecifications({
  product,
}: ProductSpecificationsProps) {
  // Create specifications array from product properties
  const specifications = [
    { name: "Mã sản phẩm", value: product.code },
    { name: "Bề mặt", value: product.surface },
    { name: "Độ dày", value: product.thickness },
    { name: "Kích thước", value: product.dimensions },
    { name: "Hoàn thiện", value: product.finish },
    { name: "Màu sắc", value: product.color },
  ].filter((spec) => spec.value); // Filter out undefined values

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4">Thông số kỹ thuật</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <tbody className="divide-y divide-gray-200">
            {specifications.map((spec, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <th
                  scope="row"
                  className="px-4 py-3 text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  {spec.name}
                </th>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {specifications.length === 0 && (
        <p className="text-gray-500 italic">
          Chưa có thông số kỹ thuật cho sản phẩm này.
        </p>
      )}

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h4 className="text-sm font-semibold text-blue-800 mb-2">
          Lưu ý về sản phẩm đá cao cấp
        </h4>
        <p className="text-sm text-blue-700">
          Đá tự nhiên là sản phẩm độc đáo với các đặc tính vân, màu sắc và kết
          cấu có thể khác nhau giữa các mẫu. Chúng tôi khuyến nghị khách hàng
          xem mẫu thực tế trước khi đặt hàng số lượng lớn.
        </p>
      </div>
    </div>
  );
}
