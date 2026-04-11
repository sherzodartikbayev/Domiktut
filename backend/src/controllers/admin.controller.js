const applicationModel = require('../models/application.model')
const cottageModel = require('../models/cottage.model')

class AdminController {
	async getAllCottages(req, res) {
		try {
			const cottages = await cottageModel.find().lean()

			return res.status(200).json(cottages)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Server Error', error })
		}
	}

	async getCottage(req, res) {
		try {
			const { id } = req.params
			const cottage = await cottageModel.findById(id)

			if (!cottage) {
				return res.status(404).json({ message: 'Cottage not found!' })
			}

			return res.status(200).json(cottage)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Server Error', error })
		}
	}

	async addCottage(req, res) {
		try {
			const data = req.body

			if (!data.title || !data.address || !data.location?.coordinates) {
				return res.status(400).json({
					message:
						'Missing required fields: title, address, and coordinates are mandatory.',
				})
			}

			const newCottage = await cottageModel.create(data)

			return res.status(201).json(newCottage)
		} catch (error) {
			console.error('Error adding cottage:', error)
			if (error.name === 'ValidationError') {
				return res
					.status(400)
					.json({ message: 'Validation Error', details: error.message })
			}
			return res.status(500).json({ message: 'Server Error', error })
		}
	}

	async editCottage(req, res) {
		try {
			const data = req.body
			const { id } = req.params

			if (!data.title || !data.address || !data.location?.coordinates) {
				return res.status(400).json({
					message:
						'Missing required fields: title, address, and coordinates are mandatory.',
				})
			}

			const cottage = await cottageModel.findByIdAndUpdate(id, data, {
				new: true,
			})

			if (!cottage) {
				return res.status(404).json({ message: 'Cottage not found!' })
			}

			return res.status(200).json(cottage)
		} catch (error) {
			console.log(error)
			if (error.name === 'ValidationError') {
				return res
					.status(400)
					.json({ message: 'Validation Error', details: error.message })
			}
			return res.status(500).json({ message: 'Server Error', error })
		}
	}

	async deleteCottage(req, res) {
		try {
			const { id } = req.params

			const deletedCottage = await cottageModel.findByIdAndDelete(id)

			if (!deletedCottage) {
				return res
					.status(404)
					.json({ message: 'Cottage not found. Nothing was deleted.' })
			}

			return res.status(200).json({
				message: 'Cottage deleted successfully',
				id: deletedCottage._id,
			})
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Server Error', error })
		}
	}

	async getApplications(req, res) {
		try {
			const applications = await applicationModel.find().lean()

			if (!applications) {
				return res.status(404).json({ message: 'Applications not found' })
			}

			return res.status(200).json(applications)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Error getting application' })
		}
	}

	async getApplication(req, res) {
		try {
			const applicationId = req.params.id

			const application = await applicationModel.findById(applicationId)

			if (!application) {
				return res.status(404).json({ message: 'Application not found' })
			}

			return res.status(200).json(application)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Error getting application' })
		}
	}
}

module.exports = new AdminController()
