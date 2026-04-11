import { zodResolver } from '@hookform/resolvers/zod'

import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { applicationSelectionFormSchema } from '../../lib/validations'
import { Field, FieldError, FieldGroup } from '../ui/field'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { PatternFormat } from 'react-number-format'

export function ApplicationSelectionForm() {
	const form = useForm<z.infer<typeof applicationSelectionFormSchema>>({
		resolver: zodResolver(applicationSelectionFormSchema),
		defaultValues: {
			from: new Date(),
			to: new Date(),
			name: '',
			numberOfPeople: 1,
			budget: 1000,
		},
	})

	function onSubmit(data: z.infer<typeof applicationSelectionFormSchema>) {
		console.log(data)
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<FieldGroup>
				<div className='flex gap-2'>
					{/* Date From  */}
					<Controller
						name='from'
						control={form.control}
						render={({ field, fieldState }) => {
							const dateValue =
								field.value instanceof Date && !isNaN(field.value.getTime())
									? field.value.toISOString().split('T')[0]
									: ''

							return (
								<Field data-invalid={fieldState.invalid}>
									<Label htmlFor='from'>Дата заезда</Label>
									<Input
										{...field}
										id='from'
										type='date'
										value={dateValue}
										onChange={e => {
											const parsedDate = new Date(e.target.value)
											field.onChange(
												isNaN(parsedDate.getTime()) ? undefined : parsedDate,
											)
										}}
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)
						}}
					/>

					{/* Date To */}
					<Controller
						name='to'
						control={form.control}
						render={({ field, fieldState }) => {
							const dateValue =
								field.value instanceof Date && !isNaN(field.value.getTime())
									? field.value.toISOString().split('T')[0]
									: ''

							return (
								<Field data-invalid={fieldState.invalid}>
									<Label htmlFor='to'>Дата выезда</Label>
									<Input
										{...field}
										id='to'
										type='date'
										value={dateValue}
										onChange={e => {
											const parsedDate = new Date(e.target.value)
											field.onChange(
												isNaN(parsedDate.getTime()) ? undefined : parsedDate,
											)
										}}
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)
						}}
					/>
				</div>

				{/* Name */}
				<Controller
					name='name'
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<Label htmlFor='name'>Имя</Label>

							<Input {...field} placeholder='Александр' id='name' />

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				{/* Phone Number */}
				<Controller
					name='phoneNumber'
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<Label htmlFor='phone'>Ваш телефон</Label>
							<PatternFormat
								{...field} // This passes value, onChange, onBlur automatically
								id='phone'
								format='+7 (###) ###-##-##'
								allowEmptyFormatting
								mask='_'
								customInput={Input}
								onValueChange={values => {
									field.onChange(values.formattedValue)
								}}
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				{/* Number Of People */}
				<Controller
					name='numberOfPeople'
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<Label htmlFor='numberOfPeople'>Количество человек</Label>

							<Input
								{...field}
								id='numberOfPeople'
								placeholder='Количество человек'
								type='number'
								onChange={e => field.onChange(e.target.valueAsNumber)}
								min={1}
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				{/* Criteria Of Cottage */}
				<Controller
					name='criteriaOfCottage'
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<Label htmlFor='criteriaOfCottage'>Критерии к коттеджу</Label>

							<Input
								{...field}
								placeholder='Например: баня, бассейн, вид на озеро'
								id='criteriaOfCottage'
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				{/* Budget */}
				<Controller
					name='budget'
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<Label htmlFor={field.name}>Допустимый бюджет</Label>
							<Input
								{...field}
								id={field.name}
								placeholder='Сумма в рублях, 2000'
								type='number'
								onChange={e => field.onChange(e.target.valueAsNumber)}
								min={1000}
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Button
					type='submit'
					className='bg-[#F4683F] text-white rounded-2xl py-6 font-semibold text-[18px]'
				>
					Оставить заявку
				</Button>
			</FieldGroup>
		</form>
	)
}
