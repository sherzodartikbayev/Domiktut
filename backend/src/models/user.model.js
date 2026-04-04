const { Schema, model } = require('mongoose')

const userSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isVerified: { type: Boolean, default: true },
		isAdmin: { type: Boolean, default: true },
	},
	{
		timestamps: true,
	},
)

module.exports = model('user', userSchema)
