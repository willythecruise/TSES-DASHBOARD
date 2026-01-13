'use client';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { login, logout } from '@/store/slices/userSlice';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SVG_ICONS, IMAGES } from '@/public/assets';

export default function Header({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogin = () => {
    dispatch(
      login({
        id: '1',
        name: 'Emmanuel William',
        email: 'emmanuel.william@example.com',
      })
    );
    setShowDropdown(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
  };

  // Use Redux user if available, otherwise use default
  const displayName = user.isAuthenticated ? user.name : 'Madison Greg';
  const displayEmail = user.isAuthenticated ? user.email : 'Madison.reertr...';

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 right-0 left-0 md:left-64 h-16 flex items-center justify-between px-4 md:px-6 z-20">
      {/* Logo + Search */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Mobile menu button */}
        <button
          onClick={onToggleSidebar}
          className="mr-2 p-2 md:hidden text-gray-600 hover:text-gray-900"
          aria-label="Toggle sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex-1 max-w-2xl">
          {/* Make search input and icon flexed together */}
          <div className="flex items-center w-1/2 border border-gray-100 rounded-2xl bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
            <input
              type="text"
              placeholder="Search soludesk"
              className="flex-1 pl-4 pr-2 py-2.5 outline-none text-sm bg-transparent border-0 focus:ring-0"
            />
            <span className="pr-3 flex items-center text-gray-400">
              <Image src={SVG_ICONS.searchNormal} alt="Search" width={18} height={18} />
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Chat Icon */}
        <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Image src={SVG_ICONS['messageNotif']} alt="Messages" width={24} height={24} />
        </button>

        {/* Notification Bell */}
        <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Image src={SVG_ICONS.notification} alt="Notifications" width={24} height={24} />
          <span className="absolute top-0 right-0 translate-x-1 -translate-y-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-semibold">
            4
          </span>
        </button>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              {/* Placeholder for profile image; replace with real src when available */}
             <img src={IMAGES.avatar} alt='profilephoto'></img>
            </div>
            <div className="text-left hidden md:block">
              <p className="text-sm font-medium text-gray-900">{displayName}</p>
              <p className="text-xs text-gray-500">{displayEmail}</p>
            </div>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </button>
              <hr className="my-2" />
              {user.isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>

      
      </div>
    </header>
  );
}
