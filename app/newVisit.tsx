import { RVForm } from '@/components/RVForm';
import { useState } from 'react';
import { H4 } from 'tamagui';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet, View } from 'react-native';

export default function ReturnVisit() {
	const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
		'off'
	);
	const handleSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<View style={{ flex: 1, padding: 15 }}>
			<H4 style={{ marginTop: 20 }}>Record New Return Visit</H4>
			<View style={styles.container}>
				<View style={styles.formContainer}>
					<RVForm submitHandler={handleSubmit} />
				</View>
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
		// marginTop: 60,
		justifyContent: 'center',
		alignItems: 'center',
		// borderWidth: 2,
		// borderColor: 'red',
	},
});
