import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const token = await getToken({ req: request });
    
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
