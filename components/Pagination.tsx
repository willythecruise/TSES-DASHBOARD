'use client';

import React from 'react';
import { SVG_ICONS } from '@/public/assets';
import Image from 'next/image';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
  totalItems: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  totalItems,
}: PaginationProps) {
  const pageNumbers: (number | string)[] = [];

  // Generate page numbers with ellipsis
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(1, 2, 3);
    if (currentPage > 5) {
      pageNumbers.push('...');
    }
    
    if (currentPage > 3 && currentPage < totalPages - 2) {
      pageNumbers.push(currentPage);
    }
    
    if (currentPage < totalPages - 4) {
      pageNumbers.push('...');
    }
    
    pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
  }

  return (
    <div className="flex items-center justify-between py-6 px-0">
      {/* Items per page */}
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">Show</label>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
        <span className="text-sm text-gray-600">/page</span>
      </div>

      {/* Page navigation */}
      <div className="flex items-center gap-2">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Prev
        </button>

        {/* Page numbers */}
        {pageNumbers.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="px-2 py-2 text-gray-500">...</span>
            ) : (
              <button
                onClick={() => onPageChange(Number(page))}
                className={`w-9 h-9 rounded-full text-sm font-medium transition-colors flex items-center justify-center ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-600 border border-blue-300 hover:bg-blue-50'
                }`}
              >
                {String(page).padStart(2, '0')}
              </button>
            )}
          </React.Fragment>
        ))}

        {/* Next button */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
