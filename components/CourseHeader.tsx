'use client';

import { useRouter } from 'next/navigation';
import { SVG_ICONS } from '@/public/assets';

interface CourseHeaderProps {
  title: string;
  tag: string;
}

export default function CourseHeader({ title, tag }: CourseHeaderProps) {
  const router = useRouter();

  return (
    <div className="mb-6 flex items-center gap-4">
      <button
        onClick={() => router.back()}
        className="p-2 bg-gray-100 rounded-full transition-colors"
        aria-label="Go back"
      >
        <img src={SVG_ICONS.arrowleft} alt="Back" />
      </button>
      <div className="flex-1">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-medium text-gray-900">{title}</h1>
          <span className="px-4 py-1 bg-blue-50 text-teal-600 text-sm font-medium rounded-full">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
}
