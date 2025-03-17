"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type AdminAuthContextType = {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextType>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
});

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if admin is authenticated on client side
    try {
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
    } catch (error) {
      console.error("Authentication check error:", error);
    }
  }, [pathname, router]);

  const login = (password: string): boolean => {
    if (password === "rW0hcJ6XGIBcyeMw6u0IEiQC7ij") {
      try {
        localStorage.setItem("adminAuthenticated", "true");
        // Also set a cookie for server-side auth
        document.cookie = "adminAuthenticated=true; path=/; max-age=86400"; // 24 hours
        setIsAuthenticated(true);
        return true;
      } catch (error) {
        console.error("Login error:", error);
        return false;
      }
    }
    return false;
  };

  const logout = () => {
    try {
      localStorage.removeItem("adminAuthenticated");
      // Clear the cookie
      document.cookie = "adminAuthenticated=; path=/; max-age=0";
      setIsAuthenticated(false);
      router.push("/quantri/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  return context;
}
