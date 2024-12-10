import CandleChart from '@/components/CandleChart';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import Mission from '@/components/Mission';

export default function HomePage() {
	return (
		<>
			<Header />
			<main className='flex flex-col min-h-screen bg-gray-100'>
				<div className='flex gap-10 flex-wrap items-center justify-center'>
					<CandleChart symbol='BTCUSDT' title='Bitcoin (BTC/USDT)' selectSymbol />

					<CandleChart symbol='SOLUSDT' title='Solana (SOL/USDT)' selectSymbol />
				</div>

				<section className='p-10 flex flex-col'>
					<h1 className='text-2xl mb-5 font-bold'>MISSÕES RECOMENDADAS</h1>
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
					<button className='bg-primary-black px-20 py-2 text-bold text-white place-self-center mt-5'>VER TUDO</button>
				</section>
			</main>
			<Footer />
		</>
	);
}
