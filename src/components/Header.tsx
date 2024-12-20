import Link from 'next/link';
import { auth } from 'lib/auth';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import ButtonLogout from './ButtonLogout';

export default async function Header() {
	const session = await auth();

	return (
		<>
			<nav className='flex items-center justify-between bg-white relative w-full z-10 py-3 px-5 lg:px-10 text-sm'>
				<div className='flex'>
					<div className='flex items-center'>
						<Link href='/'>
							<img className='h-12' src='/img/LOGO.png' alt='Logo' />
						</Link>
					</div>

					<ul className='list-reset lg:flex flex-1 items-center text-center lg:text-left'>
						<li className='mr-0 lg:mr-3'>
							<a
								className='inline-block text-black text-xl lg:text-sm no-underline hover:underline py-2 pl-4'
								href='#'
							>
								RECURSOS
							</a>
						</li>
						<li className='mr-0 lg:mr-3'>
							<a
								className='inline-block text-black text-lg lg:text-sm no-underline hover:underline py-2 '
								href='#'
							>
								AIRDROP
							</a>
						</li>
						<li className='mr-0 lg:mr-3'>
							<a
								className='inline-block text-black text-lg lg:text-sm no-underline hover:underline py-2 '
								href='#'
							>
								LEADERBOARD
							</a>
						</li>
						<li className='mr-0 lg:mr-3'>
							<a
								className='inline-block text-black text-lg lg:text-sm no-underline hover:underline py-2 '
								href='#'
							>
								DRACOIN
							</a>
						</li>
						<li className='mr-0 lg:mr-3'>
							<a
								className='inline-block text-black text-lg lg:text-sm no-underline hover:underline py-2 '
								href='#'
							>
								MISSÕES
							</a>
						</li>
					</ul>
				</div>
				{!session ? (
					<div className='flex flex-col lg:flex-row gap-4 px-6 lg:px-0 py-4 lg:py-0'>
						<Link href='/login'>
							<button className='px-8 border-2 border-primary-blue'>
								ENTRAR
							</button>
						</Link>
						<Link href='/signup'>
							<button className='px-8 bg-primary-blue border-2 border-primary-blue text-white'>
								CADASTRAR-SE
							</button>
						</Link>
					</div>
				) : (
					<div className='flex items-center'>
						<UserCircleIcon className='h-10 w-10 text-primary-black' />
						<span className='ml-2 text-lg font-medium'>{session.user.name}</span>
						<ButtonLogout></ButtonLogout>
					</div>
				)}
			</nav>
		</>
	);
}
