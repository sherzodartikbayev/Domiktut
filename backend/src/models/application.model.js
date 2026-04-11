const { Schema, model } = require('mongoose')

const applicationSchema = new Schema(
	{
		from: { type: Date, required: true },
		to: { type: Date, required: true },
		name: String,
		phoneNumber: String,
		numberOfPeople: Number,
		criteriaOfCottage: String,
		budget: Number,
	},
	{
		timestamps: true,
	},
)

module.exports = model('application', applicationSchema)
