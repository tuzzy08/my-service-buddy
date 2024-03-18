import {
	Button,
	Form,
	H4,
	H5,
	Input,
	Label,
	TextArea,
	XStack,
	YStack,
} from 'tamagui';
import { StyleSheet, Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export function RVForm({
	submitHandler,
}: {
	submitHandler: (data: any) => void;
}) {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			address: '',
			publication: '',
			note: '',
			date: '',
		},
	});
	return (
		<Form onSubmit={handleSubmit(submitHandler)}>
			<YStack gap={27}>
				<XStack alignItems='center' gap='$3'>
					<Label width={90} htmlFor='name'>
						Name
					</Label>
					{/* Full Name */}
					<Controller
						control={control}
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								flex={1}
								id='name'
								placeholder='Enter Student Name'
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						)}
						name='name'
					/>
					{errors.name && <Text>This is required.</Text>}
				</XStack>
				<XStack alignItems='center' gap='$3'>
					<Label width={90} htmlFor='address'>
						Address
					</Label>
					{/* Address */}
					<Controller
						control={control}
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								flex={1}
								id='address'
								placeholder='No.1 Abc street..'
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						)}
						name='address'
					/>
				</XStack>
				<XStack alignItems='center' gap='$3'>
					{/* PUblication */}
					<Label width={90} htmlFor='publication'>
						Publication
					</Label>
					<Controller
						control={control}
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								flex={1}
								id='publication'
								placeholder='Ex. Enjoy Life Forever'
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						)}
						name='publication'
					/>
				</XStack>
				<XStack alignItems='center' gap='$3'>
					{/* Date */}
					<Label htmlFor='date'>Date to return</Label>
					<Controller
						control={control}
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								flex={1}
								id='date'
								placeholder=''
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						)}
						name='date'
					/>
				</XStack>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextArea
							id='note'
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder='Enter any additional comments'
						/>
					)}
					name='note'
				/>

				<Form.Trigger asChild>
					<Button backgroundColor={'#8a00d4'}>Save</Button>
				</Form.Trigger>
			</YStack>
		</Form>
	);
}
