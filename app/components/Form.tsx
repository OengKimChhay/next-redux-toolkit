'use client';

import { createUser, fetchUsers } from '@/store/actions/userAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect, useState } from 'react';

export const Form = () => {
	const dispatch = useAppDispatch();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
	});

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			await dispatch(createUser(formData));
		} catch (error) {}
	};

	return (
		<>
			create user
			<form
				className="bg-card shadow-lg rounded-lg p-6 w-64"
				onSubmit={handleSubmit}
			>
				<div className="mb-4">
					<label
						htmlFor="firstname"
						className="block text-sm font-medium text-primary"
					>
						First Name
					</label>
					<input
						type="text"
						id="firstname"
						name="firstname"
						placeholder="John"
						required
						className="mt-1 block w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-primary"
						onChange={(e) =>
							setFormData({ ...formData, firstName: e.target.value })
						}
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="lastname"
						className="block text-sm font-medium text-primary"
					>
						Last Name
					</label>
					<input
						type="text"
						id="lastname"
						name="lastname"
						placeholder="Doe"
						required
						className="mt-1 block w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-primary"
						onChange={(e) =>
							setFormData({ ...formData, lastName: e.target.value })
						}
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-primary"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						placeholder="john.doe@example.com"
						className="mt-1 block w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:ring-primary"
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-400 text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-md"
				>
					Submit
				</button>
			</form>
		</>
	);
};
