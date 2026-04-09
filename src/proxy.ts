import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth(function proxy(request) {
  const isStreamerPage = request.nextUrl.pathname.startsWith('/song-player');

  if (isStreamerPage && !request.auth) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - API auth routes (NextAuth internals)
     * - Next.js static files and image optimization
     * - Public assets
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.png$).*)'
  ]
};
