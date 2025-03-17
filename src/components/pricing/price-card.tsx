import { Button } from "@/components/ui/button";

interface PriceCardProps {
  title: string;
  description: string;
  onRequestPrice: () => void;
}

export default function PriceCard({
  title,
  description,
  onRequestPrice,
}: PriceCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
        <Button
          onClick={onRequestPrice}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white"
        >
          Yêu cầu báo giá
        </Button>
      </div>
    </div>
  );
}
