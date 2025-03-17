import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Liên hệ SLABSTONE - Thông tin liên lạc và hỗ trợ",
  description:
    "Liên hệ với SLABSTONE để được tư vấn và hỗ trợ về sản phẩm đá nung kết cao cấp",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Liên hệ</h1>
        <p className="text-center text-gray-600 mb-12">
          Hãy liên hệ với chúng tôi nếu bạn cần tư vấn hoặc có bất kỳ thắc mắc
          nào
        </p>

        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
