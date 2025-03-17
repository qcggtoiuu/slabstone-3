"use client";

import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function SortButton() {
  return (
    <Button variant="outline" className="flex items-center gap-2">
      <SlidersHorizontal className="w-4 h-4" />
      <span>Sắp xếp</span>
    </Button>
  );
}
