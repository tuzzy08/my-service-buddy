import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { H4, H3, H5, Paragraph, YStack, CardProps, Text } from 'tamagui';
import { useColorScheme } from '@/components/useColorScheme';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@realm/react';
import { Studies } from '@/realm/models/Studies';
import { Card } from '@/components/Card';
import Colors from '@/constants/Colors';
import { Calendar } from '@/components/Calendar';
import { AppointmentCard } from '@/components/AppointmentCard';
import { data } from '@/constants/data';

const colors = ['#8a00d4', '#d527b7', '#f782c2', '#f9c46b'];

export default function Index() {
	const colorScheme = useColorScheme();
	const studies = useQuery(Studies);
	console.log('studies', studies);
	return (
		<SafeAreaView
			style={{
				backgroundColor:
					colorScheme === 'light' ? Colors.light.background : '#000',
				flex: 1,
			}}
		>
			<View
				style={{
					gap: 5,
					flex: 1,
					// paddingTop: 20,
				}}
			>
				<Calendar />

				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ marginBottom: 10 }}
				>
					<YStack
						paddingVertical='$5'
						justifyContent='center'
						alignItems='center'
						gap='$7'
					>
						{data.map((item, index) => {
							const colorIndex = index % colors.length;
							const color = colors[colorIndex];
							return (
								<AppointmentCard ribbonColor={color} key={index.toString()} />
							);
						})}
					</YStack>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
