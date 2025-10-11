'use client';

import { MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const menus = [
  {
    title: 'Accueil',
    href: '#home'
  },
  {
    title: 'A propos',
    href: '#about'
  },
  {
    title: 'Projets',
    href: '#works'
  },
  {
    title: 'Contact',
    href: '#contact'
  }
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background border-border sticky top-0 z-50 w-full border-b px-6 py-6 lg:px-6 xl:px-32 xl:py-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-primary md:text-2xl">
          Falinantenaina
        </Link>
        <ul className="flex items-center space-x-4 max-md:hidden xl:space-x-8">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link
                className="group relative px-1 py-2 text-sm font-medium lg:text-base"
                href={menu.href}
              >
                <span className="relative z-10">{menu.title}</span>
                <span className="group-hover:bg-primary absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="text-primary cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Hamburger menu"
        >
          {open ? <X /> : <MenuIcon />}
        </button>
        <div
          className={`bg-background border-border absolute top-[74px] left-0 z-50 h-max w-full border-b px-6 py-6 md:hidden ${open ? 'block' : 'hidden'}`}
        >
          <ul className="space-y-6">
            {menus.map((menu, index) => (
              <li key={index} className="w-full">
                <Link
                  className="block"
                  href={menu.href}
                  onClick={() => setOpen(false)}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
