"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type AdminAuthContextType = {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined,
);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if admin is authenticated on client side
    const adminAuth = localStorage.getItem("adminAuthenticated");
    setIsAuthenticated(adminAuth === "true");

    // Redirect if on admin page but not authenticated
    if (
      pathname?.startsWith("/quantri") &&
      pathname !== "/quantri/login" &&
      !adminAuth
    ) {
      router.push("/quantri/login");
    }
  }, [pathname, router]);

  const login = (password: string): boolean => {
    if (password === "rW0hcJ6XGIBcyeMw6u0IEiQC7ij") {
      localStorage.setItem("adminAuthenticated", "true");
      // Also set a cookie for server-side auth
      document.cookie = "adminAuthenticated=true; path=/; max-age=86400"; // 24 hours
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("adminAuthenticated");
    // Clear the cookie
    document.cookie = "adminAuthenticated=; path=/; max-age=0";
    setIsAuthenticated(false);
    router.push("/quantri/login");
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}
