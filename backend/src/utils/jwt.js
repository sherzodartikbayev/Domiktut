const jwt = require('jsonwebtoken')

exports.signReset = payload => {
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '10m' })
}

exports.verifyToken = payload => {
	return jwt.verify(payload, process.env.JWT_SECRET)
}
