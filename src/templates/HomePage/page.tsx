import CandleChart from '@/components/CandleChart';
import ButtonLogout from '@/components/ButtonLogout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
	return (
		<>
			<Header />
			<main className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='flex gap-10'>
					<CandleChart symbol='BTCUSDT' title='Bitcoin (BTC/USDT)' />

					<CandleChart symbol='SOLUSDT' title='Solana (SOL/USDT)' />
				</div>
			</main>
			<Footer />
		</>
	);
}
