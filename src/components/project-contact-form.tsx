"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ProjectContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectName: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - can be implemented later
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      projectName: "",
      description: "",
    });
    // Show success message
    alert("Thông tin đã được gửi thành công!");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">Liên hệ hợp tác dự án</h2>
              <p className="text-gray-600 mb-6">
                Hãy để lại thông tin để được tư vấn về giải pháp đá cao cấp cho
                dự án của bạn
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Họ và tên
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Nhập họ và tên"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Số điện thoại
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Nhập email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectName"
                    className="block text-sm font-medium mb-1"
                  >
                    Tên dự án
                  </label>
                  <Input
                    id="projectName"
                    name="projectName"
                    placeholder="Nhập tên dự án"
                    value={formData.projectName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium mb-1"
                  >
                    Mô tả dự án
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Mô tả ngắn về dự án của bạn"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800"
                >
                  Gửi thông tin
                </Button>
              </form>
            </div>

            <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=800"
                alt="Interior design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
