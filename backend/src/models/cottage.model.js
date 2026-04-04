const { Schema, model } = require('mongoose')

const cottageSchema = new Schema(
	{
		title: { type: String, required: true },
		address: { type: String, required: true },
		media: {
			images: [{ type: String }],
			videoUrl: { type: String },
		},
		features: {
			propertyType: { type: String },
			floors: { type: Number },
			areaSqm: { type: Number },
			plotSizeAres: { type: Number },
		},
		capacity: {
			sleepingPlaces: { type: Number },
			bedrooms: { type: Number },
			maxGuests: { type: Number },
		},
		schedule: {
			from: { type: String, require: true },
			to: { type: String, require: true },
		},
		details: {
			description: { type: String },
			additionalFees: [{ type: String }],
			importantInfo: { type: String },
		},
		prices: {
			weekdays: { type: Number, required: true },
			friday: { type: Number, required: true },
			saturday: { type: Number, required: true },
			sunday: { type: Number, required: true },
			fullWeekend: { type: Number },
			deposit: { type: Number },
			newYearStartingFrom: { type: Number },
			holidaysStartingFrom: { type: Number },
		},
		location: {
			type: {
				type: String,
				enum: ['Point'],
				default: 'Point',
			},
			coordinates: {
				type: [Number], // [longitude, latitude]
				required: true,
			},
		},
		reviews: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: 'user',
					required: true,
				},
				text: { type: String, required: true },
				rating: { type: Number, min: 1, max: 5, required: true },
				createdAt: { type: Date, default: Date.now },
			},
		],
	},
	{
		timestamps: true,
	},
)

module.exports = model('cottage', cottageSchema)
