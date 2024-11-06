'use client';
import { store } from '@/store/index';
import { setupListeners } from '@reduxjs/toolkit/query';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';

interface Props {
	readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
	const storeRef = useRef<typeof store | null>(null);

	if (!storeRef.current) storeRef.current = store;

	useEffect(() => {
		if (storeRef.current != null) {
			const unsubscribe = setupListeners(storeRef.current.dispatch);
			return unsubscribe;
		}
	}, []);

	return <Provider store={storeRef.current}>{children}</Provider>;
};
