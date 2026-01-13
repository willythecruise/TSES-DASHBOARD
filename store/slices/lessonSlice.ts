import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LessonCompletionState {
  completedLessons: string[];
  courseId: string;
}

const initialState: LessonCompletionState = {
  completedLessons: [],
  courseId: '',
};

const lessonSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    toggleLessonCompletion: (state, action: PayloadAction<{ lessonId: string; courseId: string }>) => {
      const { lessonId, courseId } = action.payload;
      
      // Set course ID if not set
      if (!state.courseId) {
        state.courseId = courseId;
      }
      
      // Toggle lesson completion
      const index = state.completedLessons.indexOf(lessonId);
      if (index > -1) {
        state.completedLessons.splice(index, 1);
      } else {
        state.completedLessons.push(lessonId);
      }
    },
    setLessonCompleted: (state, action: PayloadAction<{ lessonId: string; courseId: string }>) => {
      const { lessonId, courseId } = action.payload;
      
      if (!state.courseId) {
        state.courseId = courseId;
      }
      
      if (!state.completedLessons.includes(lessonId)) {
        state.completedLessons.push(lessonId);
      }
    },
    setLessonIncomplete: (state, action: PayloadAction<{ lessonId: string }>) => {
      const index = state.completedLessons.indexOf(action.payload.lessonId);
      if (index > -1) {
        state.completedLessons.splice(index, 1);
      }
    },
    setCourseId: (state, action: PayloadAction<string>) => {
      state.courseId = action.payload;
    },
  },
});

export const { toggleLessonCompletion, setLessonCompleted, setLessonIncomplete, setCourseId } = lessonSlice.actions;
export default lessonSlice.reducer;
