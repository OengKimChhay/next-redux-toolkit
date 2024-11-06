import { API } from '../api';
import {
	createUserSuccess,
	fetchUsersSuccess,
	setError,
	setLoading,
} from '../reducer/userReducer';
import { Dispatch } from '@reduxjs/toolkit';

export const fetchUsers = () => async (dispatch: Dispatch) => {
	try {
		dispatch(setLoading(true));
		const { data } = await API.get('/users');
		dispatch(fetchUsersSuccess(data.users));
	} catch (error) {
		dispatch(setError('Failed to fetch users'));
	}
};

export const createUser = (payload: object) => async (dispatch: Dispatch) => {
	try {
		const { data } = await API.post('/users/add', payload);
		dispatch(createUserSuccess(data));
	} catch (error) {
		dispatch(setError('Failed to create users'));
	}
};
