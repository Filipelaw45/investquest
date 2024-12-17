import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function CarouselComponent() {
	return (
		<>
			<Carousel
				opts={{
					align: 'start',
				}}
				className='w-full max-w-screen-xl bg-primary-black p-5 rounded-lg bg-opacity-50'
			>
				<CarouselContent>
					<CarouselItem className='md:basis-1/5 lg:basis-1/5'>
						<div className='p-1'>
							<Card className='rounded-lg overflow-hidden'>
								<CardContent
									className='relative flex flex-col aspect-square items-center justify-center bg-cover bg-center rounded-lg overflow-hidden'
									style={{ backgroundImage: "url('img/IMGCAROUSEL2.png')" }}
								>
									<div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm'></div>
									<span className='relative text-2xl font-semibold bg-opacity-70 px-4 py-2 rounded text-white mt-auto'>
										Principais termos do mercado
									</span>
									<button className='relative bg-primary-black px-16 py-2 font-bold text-white mt-auto'>
										ASSISTIR
									</button>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>

					<CarouselItem className='md:basis-1/5 lg:basis-1/5'>
						<div className='p-1'>
							<Card className='rounded-lg overflow-hidden'>
								<CardContent
									className='relative flex flex-col aspect-square items-center justify-center bg-cover bg-center rounded-lg overflow-hidden'
									style={{ backgroundImage: "url('img/IMGCAROUSEL1.png')" }}
								>
									<div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm'></div>
									<span className='relative text-2xl font-semibold bg-opacity-70 px-4 py-2 rounded text-white mt-auto'>
										Como funcionam as velas?
									</span>
									<button className='relative bg-primary-black px-16 py-2 font-bold text-white mt-auto'>
										ASSISTIR
									</button>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>

					<CarouselItem className='md:basis-1/5 lg:basis-1/5'>
						<div className='p-1'>
							<Card className='rounded-lg overflow-hidden'>
								<CardContent
									className='relative flex flex-col aspect-square items-center justify-center bg-cover bg-center rounded-lg overflow-hidden'
									style={{ backgroundImage: "url('img/IMGCAROUSEL3.png')" }}
								>
									<div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm'></div>
									<span className='relative text-2xl font-semibold bg-opacity-70 px-4 py-2 rounded text-white mt-auto'>
										Oque são as criptos?
									</span>
									<button className='relative bg-primary-black px-16 py-2 font-bold text-white mt-auto'>
										ASSISTIR
									</button>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>

					<CarouselItem className='md:basis-1/5 lg:basis-1/5'>
						<div className='p-1'>
							<Card className='rounded-lg overflow-hidden'>
								<CardContent
									className='relative flex flex-col aspect-square items-center justify-center bg-cover bg-center rounded-lg overflow-hidden'
									style={{ backgroundImage: "url('img/IMGCAROUSEL5.png')" }}
								>
									<div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm'></div>
									<span className='relative text-2xl font-semibold bg-opacity-70 px-4 py-2 rounded text-white mt-auto'>
										Compras, vendas, lucros e perdas
									</span>
									<button className='relative bg-primary-black px-16 py-2 font-bold text-white mt-auto'>
										ASSISTIR
									</button>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>

					<CarouselItem className='md:basis-1/5 lg:basis-1/5'>
						<div className='p-1'>
							<Card className='rounded-lg overflow-hidden'>
								<CardContent
									className='relative flex flex-col aspect-square items-center justify-center bg-cover bg-center rounded-lg overflow-hidden'
									style={{ backgroundImage: "url('img/IMGCAROUSEL4.png')" }}
								>
									<div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm'></div>
									<span className='relative text-2xl font-semibold bg-opacity-70 px-4 py-2 rounded text-white mt-auto'>
										Minha primeira carteira de cripto
									</span>
									<button className='relative bg-primary-black px-16 py-2 font-bold text-white mt-auto'>
										ASSISTIR
									</button>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>

					<CarouselItem className='md:basis-1/5 lg:basis-1/5'>
						<div className='p-1'>
							<Card className='rounded-lg overflow-hidden'>
								<CardContent
									className='relative flex flex-col aspect-square items-center justify-center bg-cover bg-center rounded-lg overflow-hidden'
									style={{ backgroundImage: "url('img/IMGCAROUSEL4.png')" }}
								>
									<div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm'></div>
									<span className='relative text-xl font-semibold bg-opacity-70 px-4 py-2 rounded text-white mt-auto'>
                  Como o mercado de criptomoedas é afetado por notícias e regulamentações?

									</span>
									<button className='relative bg-primary-black px-16 py-2 font-bold text-white mt-auto'>
										ASSISTIR
									</button>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</>
	);
}
