"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Filter } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PriceRangeButtons from "./price-range-buttons";

interface FilterDialogProps {
  uniqueColors: string[];
  uniqueSurfaces: string[];
  uniqueApplications: string[];
  colorFilter?: string;
  surfaceFilter?: string;
  applicationFilter?: string;
  minPrice?: number;
  maxPrice?: number;
  searchQuery?: string;
  activeFilterCount: number;
}

export default function FilterDialog({
  uniqueColors,
  uniqueSurfaces,
  uniqueApplications,
  colorFilter,
  surfaceFilter,
  applicationFilter,
  minPrice,
  maxPrice,
  searchQuery,
  activeFilterCount,
}: FilterDialogProps) {
  const router = useRouter();
  const [minPriceValue, setMinPriceValue] = useState<string>(
    minPrice?.toString() || "",
  );
  const [maxPriceValue, setMaxPriceValue] = useState<string>(
    maxPrice?.toString() || "",
  );

  const handlePriceRangeSelect = (min: string, max: string) => {
    setMinPriceValue(min);
    setMaxPriceValue(max);
  };

  const handleResetFilters = () => {
    router.push("/products");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span>Lọc</span>
          {activeFilterCount > 0 && (
            <span className="ml-1 w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Lọc sản phẩm</DialogTitle>
        </DialogHeader>
        <form action="/products" method="get">
          {searchQuery && <input type="hidden" name="q" value={searchQuery} />}
          <div className="grid gap-6 py-4">
            <div>
              <h3 className="font-medium mb-3">Màu sắc</h3>
              <div className="grid grid-cols-2 gap-2">
                {uniqueColors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox
                      id={`color-${color}`}
                      name="color"
                      value={color}
                      defaultChecked={colorFilter === color}
                    />
                    <label
                      htmlFor={`color-${color}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-3">Bề mặt</h3>
              <div className="grid grid-cols-2 gap-2">
                {uniqueSurfaces.map((surface) => (
                  <div key={surface} className="flex items-center space-x-2">
                    <Checkbox
                      id={`surface-${surface}`}
                      name="surface"
                      value={surface}
                      defaultChecked={surfaceFilter === surface}
                    />
                    <label
                      htmlFor={`surface-${surface}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {surface}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-3">Khoảng giá</h3>
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="number"
                  name="minPrice"
                  placeholder="Giá thấp nhất"
                  value={minPriceValue}
                  onChange={(e) => setMinPriceValue(e.target.value)}
                  className="w-full p-2 text-sm border border-gray-300 rounded-lg"
                />
                <span className="text-gray-500">–</span>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Giá cao nhất"
                  value={maxPriceValue}
                  onChange={(e) => setMaxPriceValue(e.target.value)}
                  className="w-full p-2 text-sm border border-gray-300 rounded-lg"
                />
              </div>

              <PriceRangeButtons onSelectRange={handlePriceRangeSelect} />
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-3">Ứng dụng</h3>
              <div className="grid grid-cols-2 gap-2">
                {uniqueApplications.map((application) => (
                  <div
                    key={application}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`application-${application}`}
                      name="application"
                      value={application}
                      defaultChecked={applicationFilter === application}
                    />
                    <label
                      htmlFor={`application-${application}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {application}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handleResetFilters}
            >
              Xóa bộ lọc
            </Button>
            <Button type="submit">Áp dụng</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
