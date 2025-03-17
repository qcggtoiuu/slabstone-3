import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProductGrid from "@/components/products/product-grid";
import { Metadata } from "next";
import { createClient } from "../../supabase/server";
import FeaturedProductsClient from "@/components/products/featured-products-client";
import VideoHero from "@/components/video-hero";

export const metadata: Metadata = {
  title: "Premium Products Showcase | Home",
  description:
    "Browse our collection of high-quality products with detailed specifications and premium finishes.",
};

export default async function Home() {
  const supabase = await createClient();
  // No longer need to check for user authentication
  // Just fetch products

  // Fetch all products
  const { data: products } = await supabase
    .from("products")
    .select(
      `
      *,
      images:product_images(*)
    `,
    )
    .order("created_at", { ascending: false });

  // Fetch unique values for filters
  const { data: colorsData } = await supabase
    .from("products")
    .select("color")
    .not("color", "is", null)
    .order("color");

  const { data: surfacesData } = await supabase
    .from("products")
    .select("surface")
    .not("surface", "is", null)
    .order("surface");

  const { data: applicationsData } = await supabase
    .from("products")
    .select("application")
    .not("application", "is", null)
    .order("application");

  // Extract unique values
  const uniqueColors = [
    ...new Set(colorsData?.map((item) => item.color).filter(Boolean)),
  ];
  const uniqueSurfaces = [
    ...new Set(surfacesData?.map((item) => item.surface).filter(Boolean)),
  ];
  const uniqueApplications = [
    ...new Set(
      applicationsData?.map((item) => item.application).filter(Boolean),
    ),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section with Video Background */}
      <VideoHero />

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Sản phẩm nổi bật</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá bộ sưu tập đầy đủ các sản phẩm cao cấp với thông số kỹ
              thuật chi tiết và chất lượng vượt trội.
            </p>
          </div>

          <FeaturedProductsClient
            initialProducts={products || []}
            colors={uniqueColors as string[]}
            surfaces={uniqueSurfaces as string[]}
            applications={uniqueApplications as string[]}
          />
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our products by category to find exactly what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Surface Materials",
                count: "25+ Products",
                image:
                  "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=800&q=80",
              },
              {
                name: "Finishes",
                count: "15+ Products",
                image:
                  "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=800&q=80",
              },
              {
                name: "Dimensions",
                count: "30+ Products",
                image:
                  "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=800&q=80",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-200">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Download our product catalog or contact our team for detailed
            specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download Catalog
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
