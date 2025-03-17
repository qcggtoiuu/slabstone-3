"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/components/admin-auth-provider";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAdminAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Use the login function from context
    if (login(password)) {
      router.push("/quantri");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Admin Access</h1>
          <p className="mt-2 text-gray-600">
            Enter password to access admin panel
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <Button type="submit" className="w-full">
            Access Admin Panel
          </Button>
        </form>
      </div>
    </div>
  );
}
