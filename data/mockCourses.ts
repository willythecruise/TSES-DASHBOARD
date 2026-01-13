import { IMAGES } from '@/public/assets';

export interface MockCourse {
  id: string;
  title: string;
  description: string;
  tag: string;
  imageUrl?: string;
}

// Generate 240 mock courses for pagination/demo purposes
export const mockCourses: MockCourse[] = Array.from({ length: 240 }, (_, i) => ({
  id: String(i + 1),
  title: `Course ${i + 1} - ${['Effective Workplace Communication', 'Mastering Interpersonal Skills', 'Strengthening Team Cohesion', 'Digital Leadership Skills', 'Strategic Business Planning'][i % 5]}`,
  description: 'Upon completion of this module, participants will: Implement practical communication techniques, a...',
  tag: ['Soft Skill', 'Compliance & Policy', 'Digital Skills', 'Business & Strategy', 'Onboarding'][i % 5],
  imageUrl: [IMAGES.sidenavMenu, IMAGES.sidenav2, IMAGES.sidenav3, IMAGES.sidenavMenu, IMAGES.sidenav2][i % 5]
}));
