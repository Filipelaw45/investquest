export default function Feed() {
	return (
		<>
			<main className='px-20 flex flex-col gap-10'>
				<section className='w-full p-5 border-4 rounded-xl'>
					<div className='flex items-center gap-4 mb-5'>
						<div
							className='rounded-full w-10 h-10 bg-slate-950 bg-cover bg-center'
							style={{ backgroundImage: "url('img/icon1.png')" }}
						></div>
						<div className='flex gap-2'>
							<h1>Primo Pobre</h1>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='2'
									stroke='currentColor'
									className='w-5 h-5 text-blue-500'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M9 12l2 2 4-4M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z'
									/>
								</svg>
							</span>
						</div>
					</div>
					<h1 className='text-2xl mb-3'>Recorde de US$ 106 mil do Bitcoin</h1>
					<p>
						O bitcoin atingiu recorde acima dos 106 mil dólares nesta
						segunda-feira, depois que o presidente eleito dos Estados Unidos,
						Donald Trump, sugeriu que planeja criar uma reserva estratégica de
						bitcoin para o país semelhante à reserva estratégica de petróleo
						mantida por Washington, alimentando o entusiasmo dos investidores em
						criptomoedas. Como você pode usar isso a seu favor?...
					</p>
					<button className='px-7 bg-primary-blue text-white mt-3'>
						Ler mais
					</button>

					{/* Ícones abaixo do botão */}
					<div className='flex items-center gap-5 mt-5'>
						{/* Ícone de comentário */}
						<div className='flex items-center gap-1 cursor-pointer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 20.25c4.97 0 9-3.228 9-7.5S16.97 5.25 12 5.25 3 8.478 3 12.75c0 1.88.982 3.605 2.625 4.86a9.639 9.639 0 01-1.125 3.14c.542-.19 1.215-.542 2.052-1.053.852.327 1.806.503 2.898.503z'
								/>
							</svg>
							<span>Comentar</span>
						</div>

						{/* Ícone de curtir (corrigido) */}
						<div className='flex items-center gap-1 cursor-pointer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
								/>
							</svg>
							<span>Curtir</span>
						</div>

						{/* Ícone de três pontinhos */}
						<div className='flex items-center gap-1 cursor-pointer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6.75 12c0 .414-.336.75-.75.75S5.25 12.414 5.25 12 5.586 11.25 6 11.25s.75.336.75.75zM12 12c0 .414-.336.75-.75.75S10.5 12.414 10.5 12 10.836 11.25 11.25 11.25s.75.336.75.75zM17.25 12c0 .414-.336.75-.75.75S15.75 12.414 15.75 12 16.086 11.25 16.5 11.25s.75.336.75.75z'
								/>
							</svg>
						</div>
					</div>
				</section>

				<section className='w-full p-5 border-4 rounded-xl'>
					<div className='flex items-center gap-4 mb-5'>
						<div
							className='rounded-full w-10 h-10 bg-slate-950 bg-cover bg-center'
							style={{ backgroundImage: "url('img/icon2.png')" }}
						></div>
						<div className='flex gap-2'>
							<h1>Krust On</h1>
							<span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='2'
									stroke='currentColor'
									className='w-5 h-5 text-blue-500'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M9 12l2 2 4-4M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z'
									/>
								</svg>
							</span>
						</div>
					</div>
					<h1 className='text-2xl mb-3'>
						Iniciante em cripto? 5 passos para começar com o pé direito
					</h1>
					<p>
						Elaborei um guia com cinco passos essenciais para entrar neste
						mercado com o pé direito:
					</p>
					<p>
						1. Controle as emoções e resista o hype O passo determinante para o
						sucesso como investidor é aprender a dominar as próprias emoções.
						Quando a gente começa a pesquisar sobre criptomoedas, encontra todo
						tipo de história de pessoas que ficaram milionárias do dia para a
						noite e notícias sobre valorizações explosivas, de 1.0...
					</p>

					<button className='px-7 bg-primary-blue text-white mt-3'>
						Ler mais
					</button>

					{/* Ícones abaixo do botão */}
					<div className='flex items-center gap-5 mt-5'>
						{/* Ícone de comentário */}
						<div className='flex items-center gap-1 cursor-pointer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 20.25c4.97 0 9-3.228 9-7.5S16.97 5.25 12 5.25 3 8.478 3 12.75c0 1.88.982 3.605 2.625 4.86a9.639 9.639 0 01-1.125 3.14c.542-.19 1.215-.542 2.052-1.053.852.327 1.806.503 2.898.503z'
								/>
							</svg>
							<span>Comentar</span>
						</div>

						{/* Ícone de curtir (corrigido) */}
						<div className='flex items-center gap-1 cursor-pointer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
								/>
							</svg>
							<span>Curtir</span>
						</div>

						{/* Ícone de três pontinhos */}
						<div className='flex items-center gap-1 cursor-pointer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6.75 12c0 .414-.336.75-.75.75S5.25 12.414 5.25 12 5.586 11.25 6 11.25s.75.336.75.75zM12 12c0 .414-.336.75-.75.75S10.5 12.414 10.5 12 10.836 11.25 11.25 11.25s.75.336.75.75zM17.25 12c0 .414-.336.75-.75.75S15.75 12.414 15.75 12 16.086 11.25 16.5 11.25s.75.336.75.75z'
								/>
							</svg>
						</div>
					</div>
				</section>

				<button className='bg-primary-black px-20 py-2 text-bold text-white place-self-center mt-5 mb-5'>
					VER MAIS
				</button>
			</main>
		</>
	);
}
