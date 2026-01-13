import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  id: '',
  name: '',
  email: '',
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<UserState, 'isAuthenticated'>>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuthenticated = true;
    },
    clearUser: () => initialState,
    login: (state, action: PayloadAction<Omit<UserState, 'isAuthenticated'>>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuthenticated = true;
    },
    logout: () => initialState,
  },
});

export const { setUser, clearUser, login, logout } = userSlice.actions;
export default userSlice.reducer;
