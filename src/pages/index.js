import React, { useState, useEffect, useContext } from 'react';
import { Card } from 'components/Card';
import { ContactList } from 'components/Contact';
import { HobbyList } from 'components/Hobby';
import { ProjectList } from 'components/Project';
import { SkillList } from 'components/Skill';
import { AboutMe } from 'components/AboutMe';
import { Profile } from 'components/Profile';
import { Experience } from 'components/Experience';
import { Education } from 'components/Education';
import { onSnapshot } from 'firebase/firestore';
import { firebaseDataMapping, firebaseQuery } from 'helper/GlobalService';
import { ResponsiveContext } from 'helper/ResponsiveContext';
import { DownloadBtn } from 'components/DownloadBtn';
import { Loader } from 'components/Loader';
import Head from 'next/head';

function App() {
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(false);
	const isMobile = useContext(ResponsiveContext);

	useEffect(() => {
		setLoading(false);
		getProfile();
		setLoading(true);
	}, [loading]);

	const getProfile = () => {
		const query = firebaseQuery('profile');
		onSnapshot(query, (querySnapshot) => {
			const data = firebaseDataMapping(querySnapshot);
			console.log(data);
			setProfile(data[0]);
		});
	};

	return (
		<>
			<Head>
				<title>Masum Resume</title>

				<meta
					name='theme-color'
					content='#fafafa'
					media='(prefers-color-scheme: light)'
				/>
				<meta
					name='theme-color'
					content='#303030'
					media='(prefers-color-scheme: dark)'
				/>
				<meta
					name='description'
					content='This is a resume of Masum made with React | Firebase , designed with Figma & Neumorphism'
				/>
				<meta
					name='image'
					content='https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1654347858448-7567289345a4image'
				/>
				<meta itemProp='name' content='Resume of Masum' />
				<meta
					itemProp='description'
					content='This is a resume of Masum made with React | Firebase , designed with Figma & Neumorphism'
				/>
				<meta
					itemProp='image'
					content='https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1654347858448-7567289345a4image'
				/>
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:title' content='Resume of Masum' />
				<meta
					name='twitter:description'
					content='This is a resume of Masum made with React | Firebase , designed with Figma & Neumorphism'
				/>
				<meta name='twitter:site' content='@masum_seakh' />
				<meta name='twitter:creator' content='@masum_seakh' />
				<meta
					name='twitter:image:src'
					content='https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1654347858448-7567289345a4image'
				/>
				<meta name='og:title' content='Resume of Masum' />
				<meta
					name='og:description'
					content='This is a resume of Masum made with React | Firebase , designed with Figma & Neumorphism'
				/>
				<meta
					name='og:image'
					content='https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1654347858448-7567289345a4image'
				/>
				<meta name='og:url' content='https://seakh-masum.github.io/resume/' />
				<meta name='og:site_name' content='Resume of Masum' />
				<meta name='og:type' content='website' />
				<meta name='msapplication-TileColor' content='#00aba9' />
				<meta
					name='msapplication-config'
					content='https://res.cloudinary.com/ruhi-birthday/raw/upload/v1655623016/masum-cv/icons/browserconfig_wrzts9.xml'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='description'
					content='Web site created using create-react-app'
				/>
			</Head>
			{loading ? (
				<div className='background'>
					<div className={'gap-3 ' + (isMobile ? 'flex__column' : 'flex__row')}>
						<div className='flex__column flex__33'>
							<Profile
								name={profile.name}
								image={profile.image}
								role={profile.role}
							/>
							<Card header='Contacts'>
								<ContactList isMobile={isMobile} />
							</Card>
							<Card header='Hobbies'>
								<HobbyList isMobile={isMobile} />
							</Card>
							<Card header='Skills'>
								<SkillList />
							</Card>
						</div>
						<div className='flex__column flex__67'>
							<Card header='About Me'>
								<AboutMe
									introduction={profile.introduction}
									description={profile.description}
								/>
							</Card>
							<Card header='Experience'>
								<Experience isMobile={isMobile} />
							</Card>
							<Card header='Education'>
								<Education isMobile={isMobile} />
							</Card>
							<Card header='Projects'>
								<ProjectList isMobile={isMobile} />
							</Card>
						</div>
					</div>
					<DownloadBtn />
				</div>
			) : (
				<Loader />
			)}
		</>
	);
}

export default App;
