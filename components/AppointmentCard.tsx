import { StyleSheet, Text, View } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Card } from './Card';
import { XStack } from 'tamagui';
import { Signpost } from '@tamagui/lucide-icons';

export function AppointmentCard({ ribbonColor }: { ribbonColor: string }) {
	return (
		<View
			style={{
				flexDirection: 'row',
				gap: 8,
				marginHorizontal: wp('3%'),
				// width: '90%',
				// paddingHorizontal: 10,
			}}
		>
			<View style={[styles.ribbon, { backgroundColor: ribbonColor }]}></View>
			<Card style={styles.card}>
				<XStack justifyContent='space-between'>
					<Text style={styles.name}>Student Name</Text>
					<Text>Date & Time</Text>
				</XStack>

				<XStack gap='$2'>
					<Signpost color={'#000'} />
					<Text style={styles.address}>Address</Text>
				</XStack>

				<Text style={{ marginTop: 10 }}>Additional Notes</Text>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		height: hp('15%'),
		width: wp('50%'),
		backgroundColor: '#e3e3e3', // semi-transparent white background
		borderRadius: 5,
		padding: 10,
		gap: 6,
	},
	ribbon: {
		width: wp('4%'),
		height: hp('15%'),

		borderRadius: 7,
	},
	name: {
		fontSize: 19,
		color: '#000',
		fontWeight: '500',
	},
	address: {
		fontSize: 16,
		color: '#000',
	},
	note: {
		fontSize: 16,
		color: '#000',
	},
});
