const cottageModel = require('../models/cottage.model')
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')

class UserContoller {
	// [GET] /user/products
	async getCottages(req, res) {
		try {
			const cottages = await cottageModel.find().lean()

			if (cottages.length === 0) {
				return res.status(404).json({ message: 'Cottages not found!' })
			}

			return res.status(200).json(cottages)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Error getting cottages' })
		}
	}

	// [GET] /user/cottage/:id
	async getCottage(req, res) {
		try {
			const id = req.params.id

			const cottage = await cottageModel.findById(id)

			if (!cottage) {
				return res.status(404).json({ message: 'Cottage not found!' })
			}

			return res.status(200).json(cottage)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Error get product!' })
		}
	}

	// [GET] /user/profile/:id
	async getProfile(req, res) {
		try {
			const id = req.params.id
			const profile = await userModel
				.findById(id)
				.select('name email password createdAt')

			if (!profile) {
				return res.status(404).json({ message: 'User not found!' })
			}

			return res.status(200).json(profile)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Error getting user profile.' })
		}
	}

	// [GET] /user/favorites
	async getFavorites(req, res) {
		try {
			const userId = req.params.id

			const user = await userModel.findById(userId).populate('favorites')

			if (!user) {
				return res.status(404).json({ message: 'User favorites not found' })
			}

			return res.status(200).json(user.favorites)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Error getting user favorites.' })
		}
	}

	// [POST] /user/add-favorite/:id
	async addFavorite(req, res) {
		try {
			const { productId } = req.body
			const userId = '69d536b97e56d974d073d287'
			const user = await userModel.findById(userId)
			if (!user) {
				return res.status(404).json({ message: 'User not found' })
			}
			user.favorites.push(productId)
			await user.save()
			return res.status(200).json(user)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Error adding favorite.' })
		}
	}

	// [PUT] /user/update-profile/:id
	async editProfile(req, res) {
		try {
			const userId = req.params.id
			const userData = req.body

			if (!userData.fullName | !userData.email | !userData.password) {
				return res.status(401).json({
					message: 'User fullName, email and password fiealds are required.',
				})
			}

			const user = await userModel.findById(userId)
			const hashedPassword = await bcrypt.hash(userData.password, 10)
			userData.password = hashedPassword
			user.set(userData)
			await user.save()

			return res.status(200).json(user)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Error editing profile' })
		}
	}

	// [DELETE] /user/delete-favorite/:id
	async deleteFavorite(req, res) {
		try {
			const id = req.params.id
			const userId = '69d536b97e56d974d073d287'

			const user = await userModel.findById(userId)
			user.favorites.pull(id)
			await user.save()

			return res.json({ success: 'Cottage removed from favorites' })
		} catch (error) {
			return res.status(500).json({ message: 'Error deleting favorite.' })
		}
	}
}

module.exports = new UserContoller()
