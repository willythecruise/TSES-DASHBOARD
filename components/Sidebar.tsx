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

export default function Sidebar({ isOpen = false, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className={`fixed top-0 left-0 h-full z-40 w-64 bg-white transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}> 
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <img src={SVG_ICONS.logo} alt="" />
          {/* Mobile close button */}
          <button onClick={onClose} className="ml-auto md:hidden p-2 text-gray-500 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
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
