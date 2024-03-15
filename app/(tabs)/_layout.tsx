import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text } from 'tamagui';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: useClientOnlyValue(false, true),
				tabBarLabelStyle: { fontSize: 12 },
				tabBarStyle: { paddingTop: 10, height: 70 },
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name='rv'
				options={{
					title: 'Return Visits',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='briefcase' color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='bs'
				options={{
					title: 'Bible Study',
					tabBarIcon: ({ color }) => <TabBarIcon name='book' color={color} />,
				}}
			/>
			<Tabs.Screen
				name='appointments'
				options={{
					title: 'Appointments',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='address-card' color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
