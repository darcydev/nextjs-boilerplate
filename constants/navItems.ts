const navItems = [
	{ label: 'About', url: '/about', active: true },
	{ label: 'Contact', url: '/contact', active: true },
];

export const activeNavItems = navItems.filter((item) => item.active);
