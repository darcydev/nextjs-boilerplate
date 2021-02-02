import { createContext, useState, ReactNode } from 'react';

import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './nav/MobileNav';

interface iLayout {
	children: ReactNode;
	pathname?: string;
	pageTitle: string;
	pageDescription?: string;
}

//@ts-ignore
export const MenuContext = createContext({
	menuOpen: null,
	toggleMenuOpen: null,
});

export default function Layout({
	children,
	pathname,
	pageTitle,
	pageDescription,
}: iLayout) {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenuOpen = () => {
		menuOpen ? setMenuOpen(false) : setMenuOpen(true);
	};

	return (
		<MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
			<Head pageTitle={pageTitle} pageDescription={pageDescription} />
			<Header />
			{menuOpen ? (
				<MobileNav />
			) : (
				<>
					<main>{children}</main>
					<Footer />
				</>
			)}
		</MenuContext.Provider>
	);
}
