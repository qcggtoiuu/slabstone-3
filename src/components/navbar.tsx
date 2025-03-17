"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - always visible */}
        <Link href="/" prefetch>
          <Image
            src="https://noithatgiakhanh.com/wp-content/uploads/2025/02/slabstone-logo.png"
            alt="SlabStone Logo"
            width={180}
            height={40}
            className="h-auto"
          />
        </Link>

        {/* Phone number - visible on mobile */}
        <a
          href="tel:0978649797"
          className="md:hidden text-base font-medium text-gray-700"
        >
          0978649797
        </a>

        {/* Desktop menu - hidden on mobile */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/ve-chung-toi"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Về chúng tôi
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Sản phẩm
          </Link>
          <Link
            href="/du-an"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Dự án
          </Link>
          <Link
            href="/bang-gia"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Bảng giá
          </Link>
          <Link
            href="/news"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Tin tức
          </Link>
          <Link
            href="/lien-he"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Liên hệ
          </Link>
          <Link href="/quantri/login" className="hidden">
            <Button variant="outline">Admin Access</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-8">
              <Link
                href="/ve-chung-toi"
                className="text-lg font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Về chúng tôi
              </Link>
              <Link
                href="/products"
                className="text-lg font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Sản phẩm
              </Link>
              <Link
                href="/du-an"
                className="text-lg font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Dự án
              </Link>
              <Link
                href="/bang-gia"
                className="text-lg font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Bảng giá
              </Link>
              <Link
                href="/news"
                className="text-lg font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Tin tức
              </Link>
              <Link
                href="/lien-he"
                className="text-lg font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Liên hệ
              </Link>
              <div className="mt-4">
                <a
                  href="tel:0978649797"
                  className="text-lg font-medium text-gray-700"
                >
                  0978649797
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
