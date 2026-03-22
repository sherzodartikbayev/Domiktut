import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<header className='fixed top-0 left-0 right-0 z-10'>
			<div className='max-w-480 w-full mx-auto py-11 px-15 flex-between'>
				<div className='flex-center'>
					{/* Logo */}
					<Link to={'/'} className='mr-10'>
						<img src='/icons/logo_light.svg' alt='Domiktut logo' />
					</Link>

					{/* Map locater */}
					<div className='inline-flex items-center gap-2  rounded-lg px-3.5 py-2 cursor-pointer'>
						<img src='./icons/map-locater.svg' alt='map locater' />

						<select className='appearance-none bg-[#0f1729] nav-title border-[#2a3a6a] rounded-lg px-2 py-1'>
							<option
								value='Москва'
								className='bg-white text-black rounded-2xl'
							>
								Москва
							</option>
							<option
								value='Казань'
								className='bg-white text-black rounded-2xl'
							>
								Казань
							</option>
						</select>

						<img src='./icons/arrow down.svg' alt='map locater' />
					</div>

					{/* Catalog */}
					<Link
						to='/catalog'
						className='py-2 px-6 border-2 border-white rounded-full nav-title'
					>
						Каталог
					</Link>
				</div>

				<div className='flex-center gap-7'>
					<Link to={'#faq'} className='nav-title font-extrabold'>
						Частые вопросы
					</Link>
					<Link to={'#cooperation'} className='nav-title font-extrabold'>
						Сотрудничество
					</Link>
				</div>

				<div className='flex-center gap-7'>
					<Link to={'/favorites'} className='nav-title'>
						<img src='./icons/favorite.svg' alt='favorite' />
					</Link>

					<Link to={'/favorites'} className='flex-center gap-2 nav-title'>
						<img src='./icons/icon_search.svg' alt='search' />
						<span> Поиск по названию</span>
					</Link>

					<Link to={'tel:+88435286548'} className='flex-center gap-2 nav-title'>
						<img src='./icons/phone.svg' alt='phone number' />
						<span>+8 (843) 528-65-48</span>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Navbar
