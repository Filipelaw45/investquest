export default function Footer() {
	return (
		<>
			<main className='bg-primary-black flex p-10 gap-10'>
				<img src='/img/LOGO FOOTER.png' alt='' className='w-44 h-20' />
				<div>
					<h1 className='text-white text-2xl'>EMPRESA</h1>
					<p className='text-white font-poppins text-xs'>Nossa equipe</p>
					<p className='text-white font-poppins text-xs'>Carreiras</p>
					<p className='text-white font-poppins text-xs'>Fale conosco</p>
					<p className='text-white font-poppins text-xs'>Termos de serviço</p>
					<p className='text-white font-poppins text-xs'>
						Política de privacidade
					</p>
					<p className='text-white font-poppins text-xs'>Divulgações</p>
					<p className='text-white font-poppins text-xs'>
						Aviso para denunciantes
					</p>
					<p className='text-white font-poppins text-xs'>Autoridades</p>
				</div>
				<div>
					<h1 className='text-white text-2xl'>ATENDIMENTO</h1>
					<p className='text-white font-poppins text-xs'>Centro de ajuda</p>
					<p className='text-white font-poppins text-xs'>Verificação oficial</p>
					<p className='text-white font-poppins text-xs'>Avisos</p>
					<p className='text-white font-poppins text-xs'>
						Conecte-se com a Invest Quest
					</p>
				</div>
				<div>
					<h1 className='text-white text-2xl'>TECNOLOGIA</h1>
					<p className='text-white font-poppins text-xs'>Segurança</p>
					<p className='text-white font-poppins text-xs'>API de dados</p>
					<p className='text-white font-poppins text-xs'>API de negociações</p>
					<p className='text-white font-poppins text-xs'>Status</p>
				</div>
				<div>
					<h3 className='mb-5 text-2xl text-white'>COMUNIDADE</h3>
					<div className='flex justify-center space-x-4'>
						{/* Instagram */}
						<a
							href='https://www.instagram.com'
							target='_blank'
							rel='noopener noreferrer'
							className='w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 24 24'
								className='w-5 h-5'
							>
								<path d='M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2ZM16 0H8a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8ZM12 6.5A5.5 5.5 0 1 0 17.5 12 5.5 5.5 0 0 0 12 6.5ZM19.5 6a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 19.5 6Zm-4.2 6.5a3.3 3.3 0 1 1-3.3-3.3 3.3 3.3 0 0 1 3.3 3.3Z' />
							</svg>
						</a>

						{/* X (Twitter) */}
						<a
							href='https://www.twitter.com'
							target='_blank'
							rel='noopener noreferrer'
							className='w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 24 24'
								className='w-5 h-5'
							>
								<path d='M23.5 4.57c-.86.38-1.78.64-2.75.75a4.75 4.75 0 0 0 2.08-2.61 9.68 9.68 0 0 1-3 1.13 4.74 4.74 0 0 0-8.12 4.32A13.44 13.44 0 0 1 1.64 3.15a4.74 4.74 0 0 0 1.47 6.33A4.74 4.74 0 0 1 .92 8.7v.06a4.74 4.74 0 0 0 3.8 4.65 4.74 4.74 0 0 1-2.14.08 4.74 4.74 0 0 0 4.42 3.29A9.49 9.49 0 0 1 0 19.4a13.41 13.41 0 0 0 7.26 2.12c8.7 0 13.45-7.21 13.45-13.45v-.61a9.59 9.59 0 0 0 2.35-2.39Z' />
							</svg>
						</a>

						{/* Discord */}
						<a
							href='https://www.discord.com'
							target='_blank'
							rel='noopener noreferrer'
							className='w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 24 24'
								className='w-5 h-5'
							>
								<path d='M20.22 4.43A17.12 17.12 0 0 0 15.93 3a14.43 14.43 0 0 1-.73 1.49 16.34 16.34 0 0 0-4.4 0A14.43 14.43 0 0 1 10.07 3 17.12 17.12 0 0 0 5.78 4.43a19.08 19.08 0 0 0-3 15.58 17.12 17.12 0 0 0 5.21 2.6 12.92 12.92 0 0 0 1.1-1.9 10.85 10.85 0 0 1-1.74-.84 8.56 8.56 0 0 0 1.6-1.06 9.33 9.33 0 0 0 7.88 0 8.56 8.56 0 0 0 1.6 1.06 10.85 10.85 0 0 1-1.74.84 12.92 12.92 0 0 0 1.1 1.9 17.12 17.12 0 0 0 5.21-2.6 19.08 19.08 0 0 0-3-15.58ZM9 14.82a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Zm6 0a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Z' />
							</svg>
						</a>
					</div>
				</div>
			</main>
		</>
	);
}
