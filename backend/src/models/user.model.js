const { Schema, model } = require('mongoose')

const userSchema = new Schema(
	{
		fullName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isVerified: { type: Boolean, default: false },
		isAdmin: { type: Boolean, default: false },
		favorites: [{ type: Schema.Types.ObjectId, ref: 'cottage' }],
		customerId: { type: String },
	},
	{
		timestamps: true,
	},
)

module.exports = model('user', userSchema)
