'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SVG_ICONS } from '@/public/assets';

interface NavItem {
  label: string;
  href: string;
  icon: string
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: (
      SVG_ICONS.homehashtag
    ),
  },
  {
    label: 'Courses/Materials',
    href: '/courses',
    icon: (
      SVG_ICONS.book2
    ),
  },
  {
    label: 'Classes',
    href: '/classes',
    icon: (
     SVG_ICONS.boardmath
    ),
  },
  {
    label: 'Assessments',
    href: '/assessments',
    icon: (
      SVG_ICONS.book1
    ),
  },
  {
    label: 'My Certification',
    href: '/certification',
    icon: (
      SVG_ICONS.award
    ),
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: (
     SVG_ICONS.settings2
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white min-h-screen fixed left-0 top-0 z-30">
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <img src={SVG_ICONS.logo} alt="" />
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/courses' && pathname?.startsWith('/courses'));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <img src={item.icon} alt="" />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
