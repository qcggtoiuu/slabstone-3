"use client";

import { Building2, Building, Landmark, PalmtreeIcon } from "lucide-react";

interface ProjectCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProjectCategory = ({
  icon,
  title,
  description,
}: ProjectCategoryProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="bg-gray-100 rounded-full p-4 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function ProjectCategories() {
  const categories = [
    {
      icon: <Building2 className="w-6 h-6 text-slate-900" />,
      title: "Toà nhà",
      description: "Các dự án toà nhà văn phòng, thương mại",
    },
    {
      icon: <Landmark className="w-6 h-6 text-slate-900" />,
      title: "Khách sạn",
      description: "Các dự án khách sạn cao cấp",
    },
    {
      icon: <Building className="w-6 h-6 text-slate-900" />,
      title: "Bệnh viện",
      description: "Các dự án bệnh viện, cơ sở y tế",
    },
    {
      icon: <PalmtreeIcon className="w-6 h-6 text-slate-900" />,
      title: "Khu nghỉ dưỡng",
      description: "Các dự án resort, khu nghỉ dưỡng",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hợp tác cùng SLABSTONE</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            SLABSTONE cung cấp giải pháp đá cao cấp cho nhiều loại dự án khác
            nhau
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <ProjectCategory
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
