import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLeadsBasicAuthConfig, isAuthorizedBasicAuthHeader } from "@/lib/leads-access";

export function middleware(request: NextRequest) {
  const config = getLeadsBasicAuthConfig();

  if (!config) {
    return NextResponse.next();
  }

  const authorized = isAuthorizedBasicAuthHeader(request.headers.get("authorization"));

  if (authorized) {
    return NextResponse.next();
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected Leads Inbox", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/leads/:path*"],
};
