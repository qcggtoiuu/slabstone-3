"use client";

import Image from "next/image";

export default function BeautifulHomesSection() {
  const homes = [
    {
      title: "Biệt thự",
      subtitle: "Biệt thự hiện đại The Manor",
      imageUrl:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    },
    {
      title: "Căn hộ",
      subtitle: "Penthouse Landmark 81",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/landmark.jpg",
    },
    {
      title: "Biệt thự",
      subtitle: "Villa Đà Lạt",
      imageUrl:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
    },
    {
      title: "Nhà phố",
      subtitle: "Nhà phố Thảo Điền",
      imageUrl:
        "https://noithatgiakhanh.com/wp-content/uploads/2025/02/villa.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nhà đẹp cùng SLABSTONE</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá những công trình tiêu biểu sử dụng đá SLABSTONE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {homes.map((home, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <div className="relative aspect-[16/9]">
                <Image
                  src={home.imageUrl}
                  alt={home.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
