import CandleChart from '@/components/CandleChart';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import Mission from '@/components/Mission';
import HeaderLogged from '@/components/HeaderLogged';
import Carousel from '@/components/CarouselComponent';
import Feed from '@/components/Feed';

export default function HomePage() {
	return (
		<>
			<HeaderLogged />
			<main className='flex flex-col min-h-screen bg-gray-100'>
				<section className='mt-10'>
					<h1 className='text-2xl mb-4 ml-20 font-bold'>PRIMEIROS PASSOS</h1>
					<div className='flex flex-col gap-4 items-center justify-center mb-20 w-full'>
						<Carousel></Carousel>
					</div>
				</section>

				<div className='flex gap-10 flex-wrap items-center justify-center'>
					<CandleChart
						symbol='BTCUSDT'
						title='Bitcoin (BTC/USDT)'
						selectSymbol
					/>

					<CandleChart
						symbol='SOLUSDT'
						title='Solana (SOL/USDT)'
						selectSymbol
					/>
				</div>

				<section className='p-10 flex flex-col'>
					<h1 className='text-2xl mb-5 ml-5 font-bold'>MISSÕES RECOMENDADAS</h1>
					<section className='flex gap-5 '>
						<Mission
							title='Siga-nos no X'
							description='Clique e siga nossa página no X'
							progress={0}
							link='https://www.twitter.com'
						></Mission>
						<Mission
							title='Faça 2 simulações'
							description='Teste seus conhecimentos nas nossas simulações'
							progress={50}
							link='/trades/buy'
						></Mission>
						<Mission
							title='Interaja no feed'
							description='Troque uma ideia com outras pessoas sobre um assunto do seu interesse'
							progress={60}
						></Mission>
						<Mission
							title='Personalize seu perfil'
							description='Conclua seu perfil'
							progress={94}
						></Mission>
					</section>
					<button className='bg-primary-black px-20 py-2 text-bold text-white place-self-center mt-5'>
						VER TUDO
					</button>
				</section>

				<section>
				<h1 className='text-2xl mb-5 ml-14 font-bold'>FEED</h1>
				<Feed></Feed>
				</section>
			</main>
			<Footer />
		</>
	);
}
