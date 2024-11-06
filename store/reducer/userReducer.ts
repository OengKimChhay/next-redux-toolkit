import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
	id: string;
	lastName: string;
	firstName: string;
	email: string;
}

export interface UserState {
	users: User[];
	loading: boolean;
	error: string | null;
}

const initialState: UserState = {
	users: [],
	loading: true,
	error: null,
};
const clearError = (state: UserState) => {
	state.error = null;
};
const clearLoading = (state: UserState) => {
	state.loading = false;
};

const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
			clearLoading(state);
		},
		fetchUsersSuccess: (state, action: PayloadAction<User[]>) => {
			state.users = action.payload;
			clearLoading(state);
			clearError(state);
		},
		createUserSuccess: (state, action: PayloadAction<User>) => {
			state.users.push(action.payload);
			clearError(state);
		},
		updateUserSuccess: (state, action: PayloadAction<User>) => {
			const index = state.users.findIndex(
				(user) => user.id === action.payload.id
			);
			if (index !== -1) {
				state.users[index] = action.payload;
			}
			clearLoading(state);
			clearError(state);
		},
		deleteUserSuccess: (state, action: PayloadAction<string>) => {
			state.users = state.users.filter((user) => user.id !== action.payload);
			state.loading = false;
			clearError(state);
		},
	},
});

export const {
	setLoading,
	setError,
	fetchUsersSuccess,
	createUserSuccess,
	updateUserSuccess,
	deleteUserSuccess,
} = userReducer.actions;

export default userReducer.reducer;
