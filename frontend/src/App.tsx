import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/main-layout'
import HomePage from './pages/user/home'
import CatalogPage from './pages/user/catalog'
import FavoritesPage from './pages/user/favorites'

const App = () => {
	const routes = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: '/catalog',
					element: <CatalogPage />,
				},
				{
					path: '/favorites',
					element: <FavoritesPage />,
				},
			],
		},
	])

	return <RouterProvider router={routes} />
}

export default App
