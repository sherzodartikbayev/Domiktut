import { z } from 'zod'

export const applicationSelectionFormSchema = z.object({
	from: z.date(),
	to: z.date(),
	name: z.string().min(3, "Имя должно быть не короче 3 символов"),
	phoneNumber: z.string({ error: "Введите номер телефона" }).min(10, "Введите корректный номер телефона"),
	numberOfPeople: z.string({ error: "Введите количество человек" }).min(1, "Минимум 1 человек"),
	criteriaOfCottage: z.string().min(3, "Минимум 3"),
	budget: z.number({ error: "Укажите бюджет числом" }).min(100, "Бюджет должен быть больше 0"),
})
