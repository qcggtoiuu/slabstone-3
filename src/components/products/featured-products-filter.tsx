"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface FeaturedProductsFilterProps {
  colors: string[];
  surfaces: string[];
  applications: string[];
  onFilterChange: (filters: {
    color?: string;
    surface?: string;
    application?: string;
  }) => void;
  activeFilters: {
    color?: string;
    surface?: string;
    application?: string;
  };
}

export default function FeaturedProductsFilter({
  colors = [],
  surfaces = [],
  applications = [],
  onFilterChange,
  activeFilters = {},
}: FeaturedProductsFilterProps) {
  const [localFilters, setLocalFilters] = useState(activeFilters);

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
  };

  const handleResetFilters = () => {
    setLocalFilters({});
    onFilterChange({});
  };

  const handleRemoveFilter = (filterKey: string) => {
    const newFilters = { ...activeFilters };
    delete newFilters[filterKey as keyof typeof newFilters];
    onFilterChange(newFilters);
  };

  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  return (
    <div className="w-full mx-auto mb-8">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        {hasActiveFilters && (
          <Button
            type="button"
            variant="outline"
            onClick={handleResetFilters}
            className="ml-auto"
          >
            <X className="w-4 h-4 mr-2" />
            Xóa tất cả
          </Button>
        )}
      </div>

      <div className="grid gap-6 py-4 bg-white p-6 rounded-lg border border-gray-200 mb-6 shadow-sm">
        <div className="grid md:grid-cols-3 gap-6">
          {colors.length > 0 && (
            <div>
              <h3 className="font-medium mb-3 flex items-center">
                <span className="mr-2">🎨</span> Màu sắc
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox
                      id={`color-${color}`}
                      checked={localFilters.color === color}
                      onCheckedChange={(checked) => {
                        const newFilters = {
                          ...localFilters,
                          color: checked ? color : undefined,
                        };
                        setLocalFilters(newFilters);
                        onFilterChange(newFilters);
                      }}
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
          )}

          {surfaces.length > 0 && (
            <div>
              <h3 className="font-medium mb-3 flex items-center">
                <span className="mr-2">⚙️</span> Bề mặt
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {surfaces.map((surface) => (
                  <div key={surface} className="flex items-center space-x-2">
                    <Checkbox
                      id={`surface-${surface}`}
                      checked={localFilters.surface === surface}
                      onCheckedChange={(checked) => {
                        const newFilters = {
                          ...localFilters,
                          surface: checked ? surface : undefined,
                        };
                        setLocalFilters(newFilters);
                        onFilterChange(newFilters);
                      }}
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
          )}

          {applications.length > 0 && (
            <div>
              <h3 className="font-medium mb-3 flex items-center">
                <span className="mr-2">📱</span> Ứng dụng
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {applications.map((application) => (
                  <div
                    key={application}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`application-${application}`}
                      checked={localFilters.application === application}
                      onCheckedChange={(checked) => {
                        const newFilters = {
                          ...localFilters,
                          application: checked ? application : undefined,
                        };
                        setLocalFilters(newFilters);
                        onFilterChange(newFilters);
                      }}
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
          )}
        </div>
      </div>

      {/* Active filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(activeFilters).length > 0 && (
            <div className="text-sm text-gray-500 flex items-center mr-2">
              Bộ lọc đang áp dụng:
            </div>
          )}
          {activeFilters.color && (
            <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
              <span>Màu: {activeFilters.color}</span>
              <button
                onClick={() => handleRemoveFilter("color")}
                className="ml-1 focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          {activeFilters.surface && (
            <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
              <span>Bề mặt: {activeFilters.surface}</span>
              <button
                onClick={() => handleRemoveFilter("surface")}
                className="ml-1 focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          {activeFilters.application && (
            <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
              <span>Ứng dụng: {activeFilters.application}</span>
              <button
                onClick={() => handleRemoveFilter("application")}
                className="ml-1 focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
