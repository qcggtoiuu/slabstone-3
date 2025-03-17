"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
      email: "",
      phone: "",
      message: "",
    });
    // Show success message
    alert("Thông tin đã được gửi thành công!");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
      <div>
        <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              id="name"
              name="name"
              placeholder="Họ và tên"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div>
            <Input
              id="phone"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div>
            <Textarea
              id="message"
              name="message"
              placeholder="Nội dung tin nhắn"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-full p-3 border rounded-md"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3"
          >
            Gửi tin nhắn
          </Button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="mr-3 mt-1">
              <svg
                className="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Địa chỉ</h3>
              <p className="text-gray-600">Nghi Văn, Nghi Lộc, Nghệ An</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-3 mt-1">
              <svg
                className="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Điện thoại</h3>
              <p className="text-gray-600">0978649797</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-3 mt-1">
              <svg
                className="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">hello@slabstone.com.vn</p>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full h-[450px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9163.176850748065!2d105.518223!3d18.869942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139d045fa7886ef%3A0xa67c353cc1293c41!2zTmdoaSBW4bqhbiwgVHAuIFZpbmgsIE5naOG7hyBBbiwgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2sus!4v1742203546861!5m2!1svi!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
