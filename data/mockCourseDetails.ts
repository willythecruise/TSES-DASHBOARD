import { IMAGES } from '@/public/assets';

export const courseData = {
  id: '1',
  title: 'Effective Workplace Communication',
  tag: 'Soft Skill',
  totalApplicants: 1223,
  activeLearners: 13,
  participants: [
    {
      id: '1',
      name: 'Nithya Menon',
      city: 'New York',
      email: 'nithya.menon@email.com',
      avatar: null,
    },
    {
      id: '2',
      name: 'Meera Gonzalez',
      city: 'Toronto',
      email: 'meera.gonzalez@email.com',
      avatar: null,
    },
    {
      id: '3',
      name: 'Monica Patel',
      city: 'Paris',
      email: 'monica.patel@email.com',
      avatar: null,
    },
    {
      id: '4',
      name: 'Dinesh Kumar',
      city: 'Tokyo',
      email: 'dinesh.kumar@email.com',
      avatar: null,
    },
  ],
  bannerImage: IMAGES.sidenavMenu,
};

export const learnCourseData = {
  id: '1',
  title: 'Effective Workplace Communication',
  tag: 'Soft Skill',
  currentLesson: {
    id: '1',
    title: 'Welcome Message',
    description: "Welcome to 'Communicate with Confidence'! In an era where the pace of work is ever-increasing and the demands on our time are relentless, the ability to communicate effectively has never more crucial. This comprehensive course is meticulously crafted to equip you with the essential skills that will not only enhance your communication abilities but also empower you to thrive in any professional environment you find yourself in.",
    videoUrl: null,
    thumbnailUrl: IMAGES.videoImage,
    content: {
      sections: [
        {
          heading: 'Why Communication Matters',
          text: 'Effective communication is the cornerstone of professional success. It enables you to build strong relationships, convey your ideas clearly, and achieve your goals in any workplace setting.',
        },
        {
          heading: "What You'll Learn",
          text: 'Throughout this course, you will develop a comprehensive set of communication skills that will transform how you interact in professional settings.',
          listItems: [
            "Clear Articulation: You will learn techniques to express your ideas with clarity and precision, ensuring that your message is understood as intended. This includes understanding your audience and tailoring your message accordingly.",
          ],
        },
      ],
    },
  },
  lessons: [
    {
      id: 'intro',
      title: 'Introduction',
      isExpanded: true,
      lessons: [
        { id: '1', title: 'Welcome Message', isActive: false, isCompleted: false },
        { id: '2', title: 'A Note on Style', isActive: false, isCompleted: false },
        { id: '3', title: "What You'll Learn", isActive: false, isCompleted: false },
        { id: '4', title: 'Meet Your Instructor', isActive: false, isCompleted: false },
      ],
    },
    {
      id: 'setup',
      title: 'Setting Up Your Workspace',
      isExpanded: false,
      lessons: [
        { id: '5', title: 'Workspace Overview', isActive: false, isCompleted: false },
        { id: '6', title: 'Tools and Resources', isActive: false, isCompleted: false },
      ],
    },
    {
      id: 'navigate',
      title: 'Navigating the Course',
      isExpanded: false,
      lessons: [
        { id: '7', title: 'Course Structure', isActive: false, isCompleted: false },
        { id: '8', title: 'Navigation Tips', isActive: false, isCompleted: false },
      ],
    },
    {
      id: 'resources',
      title: 'Course Resources',
      isExpanded: false,
      lessons: [
        { id: '9', title: 'Download Materials', isActive: false, isCompleted: false },
        { id: '10', title: 'Additional Reading', isActive: false, isCompleted: false },
      ],
    },
    {
      id: 'assessment',
      title: 'Assessment',
      isExpanded: true,
      lessons: [
        { id: '11', title: 'Quiz', isActive: false, isCompleted: false },
      ],
    },
  ],
  totalLessons: 32,
  completedLessons: 0,
};

export const quizQuestions = [
  {
    id: 'q1',
    number: 1,
    question: 'What is the purpose of React Hooks?',
    type: 'Multiple Choice',
    points: 4,
    answers: [
      { id: 'a1', text: 'To use state and other React features in functional components' },
      { id: 'a2', text: 'To create class components' },
      { id: 'a3', text: 'To style React components' },
      { id: 'a4', text: 'To handle routing in React applications' },
    ],
  },
  {
    id: 'q2',
    number: 2,
    question: 'Which hook is used for side effects in React?',
    type: 'Multiple Choice',
    points: 4,
    answers: [
      { id: 'b1', text: 'useState' },
      { id: 'b2', text: 'useEffect' },
      { id: 'b3', text: 'useContext' },
      { id: 'b4', text: 'useReducer' },
    ],
  },
];
