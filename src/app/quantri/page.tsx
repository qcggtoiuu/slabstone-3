import { Button } from "@/components/ui/button";
import { createClient } from "../../../supabase/server";
import { Metadata } from "next";
import { Plus } from "lucide-react";
import Link from "next/link";
import AdminLogoutButton from "@/components/admin-logout-button";

export const metadata: Metadata = {
  title: "Admin Dashboard | Product Management",
  description:
    "Admin dashboard for managing products, specifications, and images.",
};

export default async function AdminPage() {
  const supabase = await createClient();

  // Fetch products for the admin dashboard
  const { data: products } = await supabase
    .from("products")
    .select(
      `
      *,
      images:product_images(count)
    `,
    )
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">Manage your products and content</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline">View Site</Button>
              </Link>
              <Link href="/quantri/products/new">
                <Button className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Product</span>
                </Button>
              </Link>
              <AdminLogoutButton />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium">Products</h2>
            <p className="text-gray-600">Manage your product catalog</p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Code
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Images
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Created
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products && products.length > 0 ? (
                  products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-md"></div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {product.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {product.slug}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.price)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.images[0].count || 0}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(product.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          href={`/quantri/products/${product.id}`}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          Edit
                        </Link>
                        <button className="text-red-600 hover:text-red-900">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No products found.{" "}
                      <Link
                        href="/quantri/products/new"
                        className="text-blue-600 hover:underline"
                      >
                        Add your first product
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {products && products.length > 0 && (
            <div className="px-6 py-4 border-t border-gray-200">
              <nav className="flex justify-between items-center">
                <span className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">{products.length}</span> of{" "}
                  <span className="font-medium">{products.length}</span> results
                </span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Next
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
