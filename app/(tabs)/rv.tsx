import { RVForm } from '@/components/RVForm';
import { useState } from 'react';
import { H4, H5, Button } from 'tamagui';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useColorScheme } from '@/components/useColorScheme';

export default function ReturnVisit() {
	const colorScheme = useColorScheme();
	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					justifyContent: 'space-between',
					flexDirection: 'row',
					marginTop: 15,
					marginHorizontal: 5,
					padding: 5,
				}}
			>
				<H5>My Return Visits</H5>
				{/* <TouchableOpacity
					style={{
						height: 38,
						width: 148,
						gap: 7,
						backgroundColor: '#8a00d4',
						borderRadius: 10,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						padding: 8,
					}}
				>
					<Text
						style={{
							color: colorScheme === 'light' ? '#000' : '#FFF',
							fontWeight: '500',
						}}
					>
						New Return Visit
					</Text>
					<Entypo name='briefcase' size={24} color='black' />
				</TouchableOpacity> */}
				<Button
					size='$3'
					backgroundColor={'#8a00d4'}
					iconAfter={<Entypo name='briefcase' size={24} color='black' />}
				>
					New RV
				</Button>
			</View>

			<View style={styles.container}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		width: wp('90%'),
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// borderWidth: 2,
		// borderColor: 'red',
	},
	buttonText: {},
});
