import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Mock data types
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Define the API slice
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://jsonplaceholder.typicode.com', // Using a public API for demonstration
  }),
  tagTypes: ['Courses', 'Profile'],
  endpoints: (builder) => ({
    // Example: Get courses (mocked with posts from JSONPlaceholder)
    getCourses: builder.query<Course[], void>({
      query: () => '/posts',
      transformResponse: (response: Array<{ id: number; title: string; body: string; userId: number }>) => {
        return response.slice(0, 10).map((post) => ({
          id: post.id.toString(),
          title: post.title,
          description: post.body,
          instructor: `Instructor ${post.userId}`,
        }));
      },
      providesTags: ['Courses'],
    }),
    // Example: Get profile
    getProfile: builder.query<Profile, number>({
      query: (id) => `/users/${id}`,
      transformResponse: (response: { id: number; name: string; email: string }) => ({
        id: response.id.toString(),
        name: response.name,
        email: response.email,
      }),
      providesTags: ['Profile'],
    }),
  }),
});

export const { useGetCoursesQuery, useGetProfileQuery } = apiSlice;
