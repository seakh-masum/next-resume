import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet='utf-8' />
				<link
					rel='shortcut icon'
					href='https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623016/masum-cv/icons/favicon_h9ivit.ico'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623016/masum-cv/icons/favicon-32x32_bchqlp.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623016/masum-cv/icons/favicon-16x16_egxqp4.png'
				/>
				<link
					rel='mask-icon'
					href='https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623020/masum-cv/icons/safari-pinned-tab_siqqku.svg'
					color='#5bbad5'
				/>

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='https://res.cloudinary.com/ruhi-birthday/image/upload/v1655623015/masum-cv/icons/apple-touch-icon_jmwgvp.png'
				/>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;1,400&display=swap'
					rel='stylesheet'
				/>

				<link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
