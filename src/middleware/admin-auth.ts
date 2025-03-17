import { NextRequest, NextResponse } from "next/server";

export function withAdminAuth(
  handler: (req: NextRequest) => Promise<NextResponse>,
) {
  return async function middleware(req: NextRequest) {
    // Check for admin authentication in cookies
    const adminCookie = req.cookies.get("adminAuthenticated");
    const isAdminPath = req.nextUrl.pathname.startsWith("/quantri");
    const isLoginPath = req.nextUrl.pathname === "/quantri/login";

    // If trying to access admin pages but not authenticated and not on login page
    if (isAdminPath && !adminCookie?.value && !isLoginPath) {
      const url = new URL("/quantri/login", req.url);
      return NextResponse.redirect(url);
    }

    return handler(req);
  };
}
