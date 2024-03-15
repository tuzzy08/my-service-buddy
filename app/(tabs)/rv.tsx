import { RVForm } from '@/components/RVForm';
import { H4, H5, Button } from 'tamagui';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useColorScheme } from '@/components/useColorScheme';
import { router } from 'expo-router';

export default function ReturnVisit() {
	const colorScheme = useColorScheme();
	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					justifyContent: 'flex-end',
					flexDirection: 'row',
					marginTop: 15,
					marginHorizontal: 5,
					padding: 5,
				}}
			>
				<Button
					size='$3'
					backgroundColor={'#8a00d4'}
					iconAfter={<Entypo name='briefcase' size={24} color='black' />}
					onPress={() => router.push('/newRV')}
				>
					New RV
				</Button>
			</View>

			<View style={styles.container}>
				<H5>My Return Visits</H5>
			</View>
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
