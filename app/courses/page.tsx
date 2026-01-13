'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import MetricCard from '@/components/MetricCard';
import CourseCard from '@/components/CourseCard';
import Pagination from '@/components/Pagination';
import { useGetCoursesQuery } from '@/store/api/apiSlice';
import { SVG_ICONS } from '@/public/assets';
import { mockCourses } from '@/data/mockCourses';
import { coursesMetrics } from '@/data/mockMetrics';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { data: courses } = useGetCoursesQuery();

  // Filter and paginate courses
  const filteredCourses = useMemo(() => {
    return mockCourses.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl  text-gray-900 mb-2">Course Management</h1>
          <p className="text-gray-600 font-light">Create, organize, and assign courses to teams and individuals.</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard
            label={coursesMetrics.totalCourses.label}
            value={coursesMetrics.totalCourses.value}
            bgColor={coursesMetrics.totalCourses.bgColor}
            icon={<img src={coursesMetrics.totalCourses.icon} alt="course" className="w-10 h-10 text-purple-600" />}
            iconBgColor="bg-purple-100"
          />
          <MetricCard
            label={coursesMetrics.totalEnrollments.label}
            value={coursesMetrics.totalEnrollments.value}
            bgColor={coursesMetrics.totalEnrollments.bgColor}
            icon={<img src={coursesMetrics.totalEnrollments.icon} alt="enrollment" className="w-10 h-10 text-blue-600" />}
            iconBgColor="bg-blue-100"
          />
          <MetricCard
            label={coursesMetrics.avgCompletion.label}
            value={coursesMetrics.avgCompletion.value}
            bgColor={coursesMetrics.avgCompletion.bgColor}
            icon={<img src={coursesMetrics.avgCompletion.icon} alt="completion" className="w-10 h-10 text-orange-600" />}
            trend={coursesMetrics.avgCompletion.trend}
            iconBgColor="bg-orange-200"
          />
        </div>

            <div className='bg-white p-6 rounded-md'>
              
        {/* Search and Filter Section */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            {/* Match the Header search styling exactly */}
            <div className="flex items-center w-1/2 border border-gray-100 rounded-2xl bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
              <input
                type="text"
                placeholder="Search Course"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 pl-4 pr-2 py-2.5 outline-none text-sm bg-transparent border-0 focus:ring-0"
              />
              <span className="pr-3 flex items-center text-gray-400">
                <Image src={SVG_ICONS.searchNormal} alt="Search" width={18} height={18} />
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-3 py-2 border border-gray-300 rounded-3xl hover:bg-gray-50 flex items-center gap-2 text-gray-700 font-light">
               <span className='text-sm'>Date</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
             
            </button>
            <button className="px-3 py-3 border border-gray-300 rounded-3xl hover:bg-gray-50 flex items-center gap-2 text-gray-700 font-light">
              <span className='text-sm'>Category</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              tag={course.tag}
              imageUrl={course.imageUrl || ''}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
          totalItems={filteredCourses.length}
        />


            </div>
      </div>
    </div>
  );
}
