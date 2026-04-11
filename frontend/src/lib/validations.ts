import { z } from 'zod'

export const applicationSelectionFormSchema = z.object({
	from: z.date(),
	to: z.date(),
	name: z.string().min(3, "Имя должно быть не короче 3 символов"),
	phoneNumber: z
		.string()
		.refine((val) => {
			const numbersOnly = val.replace(/\D/g, "")
			return numbersOnly.length === 11
		}, { message: "Введите полный номер телефона" }),
	numberOfPeople: z.number({ invalid_type_error: "Введите количество человек" }).min(1, "Минимум 1 человек"),
	criteriaOfCottage: z.string().min(3, "Минимум 3"),
	budget: z.number({ invalid_type_error: "Укажите бюджет числом" }).min(1000, "Бюджет должен быть больше 0"),
})
