'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export default function LanguageToggle(){
  const pathname = usePathname() || '/en';
  const match = pathname.match(/^\/(en|ko)(.*)$/);
  const current = match ? match[1] : 'en';
  const rest = match ? match[2] : pathname;
  const other = current === 'en' ? 'ko' : 'en';
  return (
    <div className="flex items-center gap-2">
      <Link href={`/${other}${rest}`} className="underline focus:outline-none focus:ring-2 focus:ring-offset-2">EN / 한국어</Link>
    </div>
  );
}
