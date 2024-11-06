import './globals.css';

import type { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import Link from 'next/link';

interface Props {
	readonly children: ReactNode;
}
export default function RootLayout({ children }: Props) {
	return (
		<StoreProvider>
			<html lang="en">
				<body>
					<main>
						<nav>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/users">Users</Link>
							</li>
						</nav>
						<br />
						{children}
					</main>
				</body>
			</html>
		</StoreProvider>
	);
}
