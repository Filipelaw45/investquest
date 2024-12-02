'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {

	return (
		<>
			<nav className='flex items-center justify-between bg-white relative w-full z-10 py-3 px-5 lg:px-10'>
				<div className='flex'>
					<div className='flex items-center'>
						<Link href='/'>
							<img className='h-12' src='/img/LOGO.png' alt='Logo' />
						</Link>
					</div>

					<ul className='list-reset lg:flex flex-1 items-center text-center lg:text-left'>
						<li className='mr-0 lg:mr-3'>
							<a
								className='inline-block text-black text-lg lg:text-xl no-underline hover:underline py-2 px-4'
								href='#'
							>
								RECURSOS
							</a>
						</li>
						<li className='mr-0 lg:mr-3'>
							<a
								className='inline-block text-black text-lg lg:text-xl no-underline hover:underline py-2 px-4'
								href='#'
							>
								AIRDROP
							</a>
						</li>
						<li className='mr-0 lg:mr-3'>
							<a
								className='inline-block text-black text-lg lg:text-xl no-underline hover:underline py-2 px-4'
								href='#'
							>
								LEADERBOARD
							</a>
						</li>
						<li className='mr-0 lg:mr-3'>
							<a
								className='inline-block text-black text-lg lg:text-xl no-underline hover:underline py-2 px-4'
								href='#'
							>
								DRACOIN
							</a>
						</li>
						<li className='mr-0 lg:mr-3'>
							<a
								className='inline-block text-black text-lg lg:text-xl no-underline hover:underline py-2 px-4'
								href='#'
							>
								MISSÕES
							</a>
						</li>
					</ul>
				</div>
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
			</nav>
		</>
	);
}