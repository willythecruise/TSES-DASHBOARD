'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import CourseHeader from '@/components/CourseHeader';
import Tabs from '@/components/Tabs';
import VideoPlayer from '@/components/VideoPlayer';
import LessonList from '@/components/LessonList';
import LessonDescription from '@/components/LessonDescription';
import Quiz from '@/components/Quiz';
import { IMAGES } from '@/public/assets';
import { learnCourseData, quizQuestions } from '@/data/mockCourseDetails';
export default function LearnPage() {
  const params = useParams();
  const courseId = params.id as string;
  const [selectedLessonId, setSelectedLessonId] = useState<string>('1');

  // In a real app, you would fetch course data based on courseId
  const course = learnCourseData;

  // Check if selected lesson is a quiz/assessment
  const isQuizLesson = selectedLessonId === '11'; // Quiz lesson ID
  const currentLesson = course.currentLesson;

  // Quiz questions come from shared mock data
  // (imported above as `quizQuestions`)

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="p-8">
        {/* Course Header */}
        <CourseHeader title={course.title} tag={course.tag} />

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Video, Tabs, Description, or Quiz */}
          <div className="lg:col-span-2 space-y-6">
            {isQuizLesson ? (
              /* Quiz Section */
              <Quiz questions={quizQuestions} />
            ) : (
              <>
                {/* Video Player */}
                <VideoPlayer videoUrl={course.currentLesson.videoUrl} thumbnailUrl={course.currentLesson.thumbnailUrl} />

                {/* Tabs - Below Video */}
                <Tabs
                  tabs={[
                    { id: 'content', label: 'Course Content', isActive: true },
                    { id: 'reviews', label: 'Review/Feedbacks', isActive: false },
                  ]}
                />

                {/* Lesson Description - Below Tabs */}
                <LessonDescription
                  lessonNumber={1}
                  title={course.currentLesson.title}
                  description={course.currentLesson.description}
                  content={course.currentLesson.content}
                />
              </>
            )}
          </div>

          {/* Right Column - Lesson List */}
          <div className="lg:col-span-1">
            <LessonList
              lessons={course.lessons}
              totalLessons={course.totalLessons}
              completedLessons={course.completedLessons}
              courseId={courseId}
              onLessonSelect={setSelectedLessonId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
