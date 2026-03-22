import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default MainLayout
