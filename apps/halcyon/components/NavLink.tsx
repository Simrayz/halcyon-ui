import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

type NavLinkProps = PropsWithChildren<{ href: string; exact?: boolean }>;
export function NavLink({ children, href, exact }: NavLinkProps) {
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
