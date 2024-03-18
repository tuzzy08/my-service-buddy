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
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React from 'react';

export function StudyForm({ submitHandler }: { submitHandler: () => void }) {
	return (
		<Form onSubmit={submitHandler}>
			<YStack gap={27}>
				{/* TODO: Render Select Component to list existing students */}
				<XStack alignItems='center' gap='$4'></XStack>
				<XStack alignItems='center' gap='$4'>
					<Label width={100} htmlFor='name'>
						Student Name
					</Label>
					<Input flex={1} id='name' placeholder='Enter Student Name' />
				</XStack>
				<XStack alignItems='center' gap='$4'>
					<Label width={90} htmlFor='address'>
						Address
					</Label>
					<Input flex={1} id='address' placeholder='Ex. No.1 Abc street..' />
				</XStack>
				<XStack alignItems='center' gap='$4'>
					<Label width={90} htmlFor='phone'>
						Publication
					</Label>
					<Input flex={1} id='phone' placeholder='Ex. Enjoy Life Forever' />
				</XStack>
				<XStack alignItems='center' gap='$4'>
					<Label width={90} htmlFor='date'>
						Date
					</Label>
					<Input flex={1} id='date' placeholder='Enter Date' />
				</XStack>
				<TextArea id='notes' placeholder='Enter comments here.' />

				<Form.Trigger asChild>
					<Button backgroundColor={'#8a00d4'}>Save</Button>
				</Form.Trigger>
			</YStack>
		</Form>
	);
}
