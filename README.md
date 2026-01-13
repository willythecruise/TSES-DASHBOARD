# TSES Dashboard

A responsive frontend dashboard application built with Next.js, React, TypeScript, Tailwind CSS, Redux Toolkit, and RTK Query.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Redux Toolkit** - Global state management
- **RTK Query** - Data fetching and caching
- **Vercel** - Hosting platform

## Project Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tses-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
```

## Folder Structure

```
tses-dashboard/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # Redux Provider wrapper
│   └── globals.css        # Global styles with Tailwind
├── store/                 # Redux store configuration
│   ├── store.ts          # Redux store setup
│   ├── hooks.ts          # Typed Redux hooks
│   ├── slices/           # Redux slices
│   │   └── userSlice.ts  # User state slice
│   └── api/              # RTK Query API
│       └── apiSlice.ts   # API slice with endpoints
├── components/            # Reusable React 
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Architecture Overview

### State Management

The application uses Redux Toolkit for global state management:

- **User Slice** (`store/slices/userSlice.ts`): Manages user authentication state
  - Actions: `login`, `logout`, `setUser`, `clearUser`
  - State: `id`, `name`, `email`, `isAuthenticated`

- **RTK Query API Slice** (`store/api/apiSlice.ts`): Handles data fetching
  - Endpoints: `getCourses`, `getProfile`
  - Uses JSONPlaceholder API for demonstration purposes

### Component Structure

- All components are functional components using TypeScript
- Components are designed to be reusable and composable
- Styling is done exclusively with Tailwind CSS

### Routing

- Uses Next.js App Router for file-based routing
- Shared layouts are implemented in `app/layout.tsx`

## Redux Setup

The Redux store is configured with:
- User reducer for authentication state
- RTK Query API reducer for data fetching
- Middleware configured for RTK Query

### Using Redux in Components

```typescript
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { login, logout } from '@/store/slices/userSlice';

// In your component
const dispatch = useAppDispatch();
const user = useAppSelector((state) => state.user);
```

### Using RTK Query

```typescript
import { useGetCoursesQuery } from '@/store/api/apiSlice';

// In your component
const { data, isLoading, error } = useGetCoursesQuery();
```


