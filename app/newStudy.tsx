import { StudyForm } from '@/components/StudyForm';
import { useState } from 'react';
import { H4 } from 'tamagui';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet, View } from 'react-native';

export default function Page() {
	const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
		'off'
	);
	const handleSubmit = () => {};
	return (
		<View style={{ flex: 1, padding: 15 }}>
			<H4 style={{ marginTop: 10 }}>Record a study</H4>
			<View style={styles.container}>
				<View style={styles.formContainer}>
					<StudyForm submitHandler={handleSubmit} />
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
		marginTop: 50,
		// justifyContent: 'center',
		alignItems: 'center',
		// borderWidth: 2,
		// borderColor: 'red',
	},
});
