'use client';
import { NavLink } from './NavLink';

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
