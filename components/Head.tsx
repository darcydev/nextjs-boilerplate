import Head from 'next/head';

import SiteConfig from '../config/index.json';

interface INextHead {
	pageTitle?: string;
	pageDescription?: string;
}

export default function NextHead({
	pageTitle = 'pageTitle',
	pageDescription,
}: INextHead) {
	return (
		<Head>
			<title>{`${pageTitle} | ${SiteConfig.site.siteTitle}`}</title>
			<meta name='keywords' content={SiteConfig.site.keywords} key='keywords' />
			<meta
				name='description'
				key='description'
				content={pageDescription || SiteConfig.site.siteDescription}
			/>

			{/* og tags */}
			<meta property='og:title' content={pageTitle} key='ogtitle' />
			<meta
				property='og:description'
				content={pageDescription || SiteConfig.site.siteDescription}
				key='ogdesc'
			/>
			<meta property='og:url' content={SiteConfig.site.siteUrl} key='ogurl' />
			<meta
				property='og:image'
				content={SiteConfig.site.siteImage}
				key='ogimage'
			/>
			<meta
				property='og:site_name'
				content={SiteConfig.site.siteName}
				key='ogsitename'
			/>

			{/* Twitter Cards */}
			<meta name='twitter:card' content='summary' key='twcard' />
			<meta
				name='twitter:creator'
				content={SiteConfig.author.twitterHandle}
				key='twhandle'
			/>

			<link rel='shortcut icon' href='/favicon.ico' />
		</Head>
	);
}
