'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function ChatWidget() {
  const pathname = usePathname();

  const excludedPaths = ['/login', '/area-do-cliente'];

  if (excludedPaths.some(path => pathname.startsWith(path))) {
    return null;
  }

  return (
    <Script src='https://cdn.jotfor.ms/agent/embedjs/019c6bf631da793b963edab2f75ddebb28cb/embed.js' />
  );
}
