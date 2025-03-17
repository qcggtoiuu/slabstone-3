"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface FeatureDialogProps {
  title: string;
  description: string;
  imageUrl: string;
  children: React.ReactNode;
}

export default function FeatureDialog({
  title,
  description,
  imageUrl,
  children,
}: FeatureDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogTitle className="text-2xl font-bold mb-2">{title}</DialogTitle>
        <DialogDescription className="text-base mb-4">
          {description}
        </DialogDescription>
        <div className="relative w-full h-[500px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
