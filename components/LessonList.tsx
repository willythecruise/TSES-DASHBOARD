'use client';

import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { toggleLessonCompletion } from '@/store/slices/lessonSlice';

interface Lesson {
  id: string;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface LessonSection {
  id: string;
  title: string;
  isExpanded: boolean;
  lessons: Lesson[];
}

interface LessonListProps {
  lessons: LessonSection[];
  totalLessons: number;
  completedLessons: number;
  courseId: string;
  onLessonSelect?: (lessonId: string) => void;
}

export default function LessonList({ lessons: initialLessons, totalLessons, completedLessons, courseId, onLessonSelect }: LessonListProps) {
  const [lessons, setLessons] = useState<LessonSection[]>(initialLessons);
  const dispatch = useAppDispatch();
  const completedLessonIds = useAppSelector((state) => state.lessons.completedLessons);

  // Update lessons with Redux completion state
  useEffect(() => {
    setLessons((prev) =>
      prev.map((section) => ({
        ...section,
        lessons: section.lessons.map((lesson) => ({
          ...lesson,
          isCompleted: completedLessonIds.includes(lesson.id),
        })),
      }))
    );
  }, [completedLessonIds]);

  const toggleSection = (sectionId: string) => {
    setLessons((prev) =>
      prev.map((section) =>
        section.id === sectionId ? { ...section, isExpanded: !section.isExpanded } : section
      )
    );
  };

  const handleLessonClick = (sectionId: string, lessonId: string, e: React.MouseEvent) => {
    // Check if clicking on the checkmark area (right side)
    const target = e.target as HTMLElement;
    const isCheckmarkClick = target.closest('.lesson-checkmark') || target.closest('svg') || target.closest('.checkmark-container');
    
    if (isCheckmarkClick) {
      // Toggle completion status
      e.stopPropagation();
      dispatch(toggleLessonCompletion({ lessonId, courseId }));
      return;
    }

    // Update active lesson
    setLessons((prev) =>
      prev.map((section) => ({
        ...section,
        lessons: section.lessons.map((lesson) => ({
          ...lesson,
          isActive: section.id === sectionId && lesson.id === lessonId,
        })),
      }))
    );
    // Notify parent component of lesson selection
    onLessonSelect?.(lessonId);
  };

  // Check if all lessons in a section are completed
  const isSectionCompleted = (section: LessonSection): boolean => {
    if (section.lessons.length === 0) return false;
    return section.lessons.every((lesson) => completedLessonIds.includes(lesson.id));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Lessons ({completedLessonIds.length}/{totalLessons})
        </h2>
      </div>

      <div className="divide-y divide-gray-200">
        {lessons.map((section) => (
          <div key={section.id}>
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{section.title}</span>
              <div className="flex items-center gap-2">
                {isSectionCompleted(section) && (
                  <div className="w-5 h-5 border-2 border-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    section.isExpanded ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Section Lessons */}
            {section.isExpanded && (
              <div>
                {section.lessons.map((lesson) => {
                  const isCompleted = completedLessonIds.includes(lesson.id);
                  return (
                    <button
                      key={lesson.id}
                      onClick={(e) => handleLessonClick(section.id, lesson.id, e)}
                      className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                        lesson.isActive
                          ? 'bg-blue-50 hover:bg-blue-100'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          lesson.isActive ? 'text-blue-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {lesson.title}
                      </span>
                      <div className="flex items-center gap-2">
                        {lesson.isActive && (
                          <div className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center flex-shrink-0 checkmark-container lesson-checkmark">
                            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                        {!lesson.isActive && isCompleted && (
                          <div 
                            className="w-5 h-5 border-2 border-blue-600 rounded-full flex items-center justify-center flex-shrink-0 checkmark-container lesson-checkmark cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch(toggleLessonCompletion({ lessonId: lesson.id, courseId }));
                            }}
                          >
                            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                        {!lesson.isActive && !isCompleted && (
                          <div 
                            className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center flex-shrink-0 checkmark-container lesson-checkmark cursor-pointer hover:border-blue-600"
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch(toggleLessonCompletion({ lessonId: lesson.id, courseId }));
                            }}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
