require('dotenv').config()

const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
const session = require('express-session')
const errorMiddleware = require('./middlewares/error.middleware')
const cors = require('cors')

const app = express()

// Middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(
	session({
		secret: process.env.SECRET_KEY,
		saveUninitialized: false,
		resave: false,
		cookie: {
			secure: false,
			httpOnly: true,
			sameSite: 'lax',
			maxAge: 24 * 60 * 60 * 1000,
		},
	}),
)

// Route
app.use('/api', require('./routes/index.route'))

app.use(errorMiddleware)

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
