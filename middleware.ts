import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req });
    const isAuth = !!token;

    // Example: If the incoming request URL is "http://example.com/path?param=value#hash," then req.nextUrl might have properties like pathname ("/path"), query ({ param: 'value' }), and search ("?param=value").
    
    const isAuthPage =
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register");

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }

      return null;
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
      );
    }
  },
  {
    callbacks: {
      async authorized() {
        // The authorized callback is an asynchronous function that is called when a user is successfully authenticated. In this specific implementation, it returns true.
        return true;
      },
    },
  }
);

// The config object defines a set of URL patterns that the middleware should match for authentication.
export const config = {
  matcher: ["/dashboard/:path*", "/editor/:path*", "/login", "/register"],
};