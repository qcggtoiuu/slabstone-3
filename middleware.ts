import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const isAdminPath = request.nextUrl.pathname.startsWith("/quantri");
  const isLoginPath = request.nextUrl.pathname === "/quantri/login";

  // Check for admin authentication in localStorage (client-side only)
  // For server-side, we'll use cookies
  const adminCookie = request.cookies.get("adminAuthenticated");

  // If trying to access admin pages but not authenticated and not on login page
  if (isAdminPath && !adminCookie?.value && !isLoginPath) {
    const url = new URL("/quantri/login", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
