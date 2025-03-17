"use client";

import { Button } from "@/components/ui/button";

interface PriceRangeButtonsProps {
  onSelectRange: (min: string, max: string) => void;
}

export default function PriceRangeButtons({
  onSelectRange,
}: PriceRangeButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 mb-2">
      <Button
        type="button"
        onClick={() => onSelectRange("1000000", "2000000")}
        variant="outline"
        className="p-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
      >
        1tr - 2tr
      </Button>
      <Button
        type="button"
        onClick={() => onSelectRange("2000000", "5000000")}
        variant="outline"
        className="p-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
      >
        2tr - 5tr
      </Button>
      <Button
        type="button"
        onClick={() => onSelectRange("5000000", "10000000")}
        variant="outline"
        className="p-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
      >
        5tr - 10tr
      </Button>
      <Button
        type="button"
        onClick={() => onSelectRange("10000000", "")}
        variant="outline"
        className="p-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
      >
        Trên 10tr
      </Button>
    </div>
  );
}
