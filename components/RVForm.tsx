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
import React from 'react';

export function RVForm({ submitHandler }: { submitHandler: () => void }) {
	return (
		<Form onSubmit={submitHandler}>
			<YStack gap={15}>
				<XStack alignItems='center' gap='$4'>
					<Label width={90} htmlFor='name'>
						Name
					</Label>
					<Input flex={1} id='name' placeholder='Enter Name' />
				</XStack>
				<XStack alignItems='center' gap='$4'>
					<Label width={90} htmlFor='address'>
						Address
					</Label>
					<Input flex={1} id='address' placeholder='01234567' />
				</XStack>
				<XStack alignItems='center' gap='$4'>
					<Label width={90} htmlFor='phone'>
						Phone(if any)
					</Label>
					<Input flex={1} id='phone' placeholder='01234567' />
				</XStack>
				<XStack alignItems='center' gap='$4'>
					<Label width={90} htmlFor='date'>
						Date
					</Label>
					<Input flex={1} id='date' placeholder='01234567' />
				</XStack>
				<TextArea
					id='notes'
					placeholder='Enter any additional notes(Ex. Publication placed etc.)...'
				/>

				<Form.Trigger asChild>
					<Button backgroundColor={'#f55951'}>Save</Button>
				</Form.Trigger>
			</YStack>
		</Form>
	);
}
