import ProjectHero from "@/components/project-hero";
import ProjectCategories from "@/components/project-categories";
import ProjectContactForm from "@/components/project-contact-form";
import Footer from "@/components/footer";

export const metadata = {
  title: "Dự án SLABSTONE - Hợp tác cùng phát triển",
  description:
    "Khám phá các dự án hợp tác với SLABSTONE cho toà nhà, khách sạn, bệnh viện và khu nghỉ dưỡng",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProjectHero />
      <ProjectCategories />
      <ProjectContactForm />
      <Footer />
    </main>
  );
}
