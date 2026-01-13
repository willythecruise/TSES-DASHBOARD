'use client';

import { useParams, useRouter, usePathname} from 'next/navigation';
import CourseHeader from '@/components/CourseHeader';
import CourseBanner from '@/components/CourseBanner';
import MetricCard from '@/components/MetricCard';
import ParticipantsTable from '@/components/ParticipantsTable';
import { IMAGES } from '@/public/assets';
import { SVG_ICONS } from '@/public/assets';
import { courseData } from '@/data/mockCourseDetails';

export default function CourseDetailsPage() {
  const params = useParams();
  const courseId = params.id as string;
  const router = useRouter();
  const pathname = usePathname();

  // In a real app, you would fetch course data based on courseId
  const course = courseData;

    const isCourseDetailsPage = pathname?.includes('/courses/') && pathname !== '/courses' && !pathname?.includes('/learn');
  const isLearnPage = pathname?.includes('/learn');
  

  
  const handleStartLearning = () => {
    // Extract course ID from pathname
    const courseIdMatch = pathname?.match(/\/courses\/([^/]+)/);
    if (courseIdMatch) {
      router.push(`/courses/${courseIdMatch[1]}/learn`);
    }
  };


  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="p-8">
        {/* Course Header */}
       <div className='flex justify-between'>
         <CourseHeader title={course.title} tag={course.tag} />
           {/* Start Learning Button - Only show on course details page */}
        {isCourseDetailsPage && (
          <div> 
            <button
            onClick={handleStartLearning}
            className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Learning
          </button>
          </div>
        )}
       </div>

        {/* Course Banner */}
        <div className="mb-8">
          <CourseBanner imageUrl={IMAGES.sidenavMenu} />
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MetricCard
            label="Total Applicants"
            value={course.totalApplicants.toLocaleString()}
            bgColor="bg-gray-100"
            icon={
              <img src={SVG_ICONS.profile2User} alt="user" className="w-10 h-10 text-green-600" />
            }
            iconBgColor='bg-green-100'
          />
          <MetricCard
            label="Active Learners"
            value={course.activeLearners.toString()}
            bgColor="bg-gray-100"
            icon={
              <img src={SVG_ICONS.teacher} alt="teacher" className="w-10 h-10 text-blue-600" />
            }
            iconBgColor='bg-blue-100'
          />
        </div>

        {/* Participants Table */}
        <ParticipantsTable participants={course.participants} />
      </div>
    </div>
  );
}
