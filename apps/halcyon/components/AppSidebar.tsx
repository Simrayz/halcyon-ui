'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export function AppSidebar() {
  return (
    <aside className="w-36 border-r border-gray-400 pt-2">
      <nav className="flex flex-col">
        <NavLink href="/" exact>
          Home
        </NavLink>
        <NavLink href="/about">About</NavLink>
      </nav>
    </aside>
  );
}

type NavLinkProps = PropsWithChildren<{ href: string; exact?: boolean }>;
function NavLink({ children, href, exact }: NavLinkProps) {
  const pathname = usePathname();
  const activeLink = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={[
        'px-4 py-2 w-full',
        activeLink
          ? 'text-blue-600 hover:text-blue-600'
          : 'hover:text-blue-700',
      ].join(' ')}
    >
      {children}
    </Link>
  );
}
