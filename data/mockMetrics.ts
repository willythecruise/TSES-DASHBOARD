import { SVG_ICONS } from '@/public/assets';

export const coursesMetrics = {
  totalCourses: {
    label: 'Total courses',
    value: '123',
    bgColor: 'bg-gray-50',
    icon: SVG_ICONS.book,
    iconBgColor: 'bg-green-50',
  },
  totalEnrollments: {
    label: 'Total Enrollments',
    value: '11',
    bgColor: 'bg-gray-50',
    icon: SVG_ICONS.teacher,
    iconBgColor: 'bg-blue-200',
  },
  avgCompletion: {
    label: 'Avg Completion',
    value: '99%',
    bgColor: 'bg-gray-50',
    icon: SVG_ICONS.task,
    trend: { value: '12% up from last month', isPositive: true },
    iconBgColor: 'bg-orange-200',
  },
};
