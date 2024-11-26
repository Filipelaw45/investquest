import { auth } from 'lib/auth';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';

export default async function Page() {
	const session = await auth();

	if (session) {
		redirect('/home');
	}
	return (
		<>
			<Header />
			<main className='flex items-center justify-center min-h-screen bg-gray-100'>
				<h1>é aqui que makawlly se fode pra fazer a landing page</h1>
			</main>
		</>
	);
}
