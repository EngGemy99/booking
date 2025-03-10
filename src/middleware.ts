import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
// export default function middleware(request: NextRequest) {
//   const intlMiddleware = createMiddleware({
//     locales: ["en", "ar"],
//     defaultLocale: "en",
//   });

//   return intlMiddleware(request);
// }

export default createMiddleware(routing);
