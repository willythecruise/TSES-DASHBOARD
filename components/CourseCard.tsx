'use client';

import Link from 'next/link';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  tag: string;
  imageUrl?: string;
}

export default function CourseCard({ id, title, description, tag, imageUrl }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      {/* Image Placeholder */}
      <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400 text-center p-4">
            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs text-gray-500">Image Placeholder</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
          {tag}
        </span>
      </div>
    </div>
    </Link>
  );
}
