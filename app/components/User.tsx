'use client';

import { fetchUsers } from '@/store/actions/userAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { Form } from './Form';

export const User = () => {
	const dispatch = useAppDispatch();
	const { users, loading, error } = useAppSelector((state) => state.users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const renderUsers = () => {
		if (loading) return <div className="h-64">Loading...</div>;
		else {
			if (error) return <p>{error}</p>;
			return users.length > 0 ? (
				<div className="bg-background ">
					<div className="bg-card dark:bg-card-foreground p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2">
						<table className="w-full table-auto">
							<thead>
								<tr>
									<th className="px-4 py-2 bg-primary text-primary-foreground">
										Name
									</th>
									<th className="px-4 py-2 bg-primary text-primary-foreground">
										Email
									</th>
								</tr>
							</thead>
							<tbody>
								{users.map((user) => (
									<tr key={user.id}>
										<td className="px-4 py-2">
											{user.lastName} {user.firstName}
										</td>
										<td className="px-4 py-2">{user.email}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			) : (
				<p>No users found</p>
			);
		}
	};

	return (
		<>
			<button
				className="border bg-slate-500"
				onClick={() => dispatch(fetchUsers())}
			>
				reload
			</button>
			{renderUsers()}
			<Form />
		</>
	);
};
