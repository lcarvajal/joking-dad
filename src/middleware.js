// Used to modify request headers with Vercel: https://vercel.com/guides/modify-request-headers 

import { NextResponse } from 'next/server';

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('user-agent', 'Joking Dad App (https://github.com/lcarvajal/joking-dad)');
}