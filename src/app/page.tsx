import { auth } from 'lib/auth';
import HomePage from 'templates/HomePage/page';
import LandingPage from 'templates/LandingPage/page';

export default async function Page() {
	const session = await auth();

	return (
		<>
			{session ? <HomePage /> : <LandingPage />}
		</>
	);
}
