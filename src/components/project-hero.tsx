import Image from "next/image";

export default function ProjectHero() {
  return (
    <div className="relative w-full h-[500px] bg-slate-900">
      <Image
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811"
        alt="Dự án SLABSTONE"
        fill
        className="object-cover opacity-80"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Dự án SLABSTONE</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Chúng tôi sẵn sàng hợp tác với các dự án của bạn
        </p>
      </div>
    </div>
  );
}
