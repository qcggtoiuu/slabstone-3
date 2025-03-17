import Link from "next/link";
import { ArrowUpRight, Check, Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Products
              </span>{" "}
              with Detailed Specifications
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore our extensive catalog of high-quality products with
              comprehensive specifications, detailed dimensions, and premium
              finishes.
            </p>

            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search products by name, code, or specifications..."
                />
                <button
                  type="submit"
                  className="absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-4 py-2 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Browse All Products
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
              >
                Download Catalog
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Detailed Specifications</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>High-Quality Images</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Downloadable Catalogs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
