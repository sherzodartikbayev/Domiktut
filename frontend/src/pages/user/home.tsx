import { Card, CardContent } from '../../components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../../components/ui/carousel'
import { homeCardCarousel } from '../../constants'
import Autoplay from 'embla-carousel-autoplay'

const HomePage = () => {
	return (
		<section className=' home-bg'>
			<div className='container h-237 flex-between'>
				<div className='max-w-2xl'>
					<h1 className='font-raleway font-extrabold text-6xl leading-[140%] text-white'>
						Аренда коттеджей и домов в Казани
					</h1>

					<p className='font-semibold text-2xl leading-[150%] text-white mt-7 mb-24'>
						Найдите идеальный вариант сами или предоставьте это нам
					</p>

					<Carousel
						opts={{
							align: 'start',
							loop: true,
						}}
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}
						className='w-full max-w-48 sm:max-w-xs md:max-w-150'
					>
						<CarouselContent className='flex gap-1'>
							{homeCardCarousel.map(item => (
								<CarouselItem key={item.id} className='basis-1/2 lg:basis-1/3'>
									<Card className='bg-transparent place-items-center'>
										<CardContent className='w-50 flex flex-col items-center justify-center'>
											<img
												src={item.src}
												alt={item.label}
												className='w-50 h-24 object-cover rounded-2xl mb-3.5'
											/>

											<span className='font-semibold text-[18px] text-center text-white'>
												{item.label}
											</span>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>

				<div className=''>
					<div className='w-90 h-124.25 rounded-[20px] bg-white py-10 px-10'>
						<h3 className='text-xl font-semibold text-center'>
							Заявка на подбор
						</h3>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomePage
