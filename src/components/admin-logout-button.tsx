"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAdminAuth } from "./admin-auth-provider";

export default function AdminLogoutButton() {
  const { logout } = useAdminAuth();

  return (
    <Button
      variant="outline"
      onClick={logout}
      className="flex items-center gap-2"
    >
      <LogOut className="w-4 h-4" />
      <span>Logout</span>
    </Button>
  );
}
