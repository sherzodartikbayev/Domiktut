require('dotenv').config()

const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
const adminMiddleware = require('./middlewares/admin.middleware')

const app = express()

// Middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/admin', require('./routes/admin.route'))
app.use('/auth', require('./routes/auth.route'))

const PORT = process.env.PORT

async function bootstrap() {
	try {
		mongoose.connect(process.env.MONGOURI)
		console.log('Connected to DB')

		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`)
		})
	} catch (error) {
		console.log(error)
	}
}

bootstrap()
