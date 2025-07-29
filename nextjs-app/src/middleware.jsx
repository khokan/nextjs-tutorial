import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const cookiesToken = request.cookies.get("test-token");
  console.log("token", cookiesToken);
  const dummyUser = {
    role: "user",
    email: "ll@ll.com",
  };
  let isServicePage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUser.role == "admin";
  console.log("PATH", request.nextUrl.pathname, isServicePage);
  if (isServicePage && !isAdmin)
    return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}
