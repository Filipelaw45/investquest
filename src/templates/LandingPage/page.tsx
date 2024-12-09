import Header from '@/components/Header';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Footer from '@/components/Footer';

export default async function LandingPage() {
  return (
    <>
			<Header />
			<main>
				<section className='flex'>
					<div className='flex-1'>
						<img src='/img/IMAGE DRAGON.png' alt='imagem' />
					</div>
					<div className='flex flex-col flex-1 items-end justify-center'>
						<div className='flex flex-col pr-16 2xl:mr-40 mr-0'>
							<h1 className='2xl:text-4xl text-2xl font-poppins font-extrabold text-end mr-0'>
								A <span className='text-primary-blue'>líder</span> em{' '}
								<span className='text-primary-blue'>educação</span> e{' '}
								<span className='text-primary-blue'>investimentos</span> em
								ativos digitais no{' '}
								<span className='text-primary-blue'>Brasil.</span>
							</h1>

							<h5 className='text-end font-poppins font-light mt-10 text-xs 2xl:text-base'>
								Do aprendizado à prática, Invest Quest vai ajudar você a dominar
								o mercado de criptomoedas e NFTs. Com desafios interativos e
								recompensas exclusivas, transformamos a educação financeira em
								uma jornada dinâmica e envolvente.
							</h5>
							<button className='self-end mt-10 py-5 px-8 rounded-full bg-primary-blue text-white text-2xl'>
								COMEÇAR AGORA
							</button>
						</div>
					</div>
				</section>
				<section className='w-full pb-10 flex bg-primary-black'>
					<img src='/img/DRACOIN BLOCK.png' alt='' className='w-1/2' />

					<div className='flex flex-col items-center justify-center w-full gap-3 mt-4'>
						<h5 className='2xl:text-2xl text-xl text-white font-odibee'>
							Mais do que uma moeda virtual, sua evolução no mundo dos
							investimentos digitais.
						</h5>

						<button className='py-2 px-12 rounded-full bg-primary-blue text-white 2xl:text-2xl text-1xl'>
							SAIBA MAIS
						</button>
					</div>
				</section>
				<section className='flex items-center justify-center'>
					<div className='flex flex-col w-full p-10 gap-10 items-center'>
						<button className='bg-primary-blue text-white p-5 w-1/2'>
							CONTATO COM PROFISSIONAIS
						</button>
						<button className='bg-blue-900 text-gray-900 p-5 w-1/2'>
							AIRDROP
						</button>
						<button className='bg-blue-900 text-gray-900 p-5 w-1/2'>
							RANKING COM PREMIAÇÕES
						</button>
					</div>

					<div className='flex items-center justify-center text-center'>
						<div className='flex flex-col items-center gap-3 w-1/4'>
							<h1 className='text-2xl'>
								INFORMAÇÕES NO LUGAR CERTO E EM QUALQUER HORA
							</h1>
							<div className='w-1/2 bg-primary-blue h-[2px]'></div>
							<h5 className='text-1xl'>
								Da primeira negociação de cripto à primeira compra de NFT, vamos
								orientar você por todo o processo. Tire todas as suas dúvidas e
								não perca suas noites de sono.
							</h5>
						</div>
						<img
							src='/img/MONKEY EVOLUTION.png'
							alt=''
							className='w-1/2 p-20'
						/>
					</div>
				</section>

				<Accordion type='single' collapsible className='w-full px-10 flex flex-col gap-5 my-5'>
					<h1 className='text-2xl text-center'>ESCLAREÇA SUAS DÚVIDAS</h1>
					<AccordionItem value='item-1' className='bg-primary-black px-7 text-white font-poppins'>
						<AccordionTrigger className='text-xr'>O que são Dracoins e como posso usá-los na plataforma?</AccordionTrigger>
						<AccordionContent className='text-xr'>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2' className='bg-primary-black px-7 text-white font-poppins'>
						<AccordionTrigger className='text-xr'>Como funciona o aprendizado gamificado na Invest Quest?</AccordionTrigger>
						<AccordionContent className='text-xr'>
							Yes. It comes with default styles that matches the other
							components&apos; aesthetic.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-3' className='bg-primary-black px-7 text-white font-poppins'>
						<AccordionTrigger className='text-xr'>É seguro negociar criptomoedas e NFTs na Invest Quest?</AccordionTrigger>
						<AccordionContent className='text-xr'>
							Yes. It's animated by default, but you can disable it if you
							prefer.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-4' className='bg-primary-black px-7 text-white font-poppins'>
						<AccordionTrigger className='text-xr'>Eu sou iniciante. A plataforma é adequada para mim?</AccordionTrigger>
						<AccordionContent className='text-xr'>
							Yes. It's animated by default, but you can disable it if you
							prefer.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</main>
			<Footer></Footer>
		</>
  );
}
