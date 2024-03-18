import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import { RealmProvider } from '@realm/react';
import { config } from '../tamagui.config';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import '../tamagui-web.css';
import { Student, Studies } from '@/realm/models';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [interLoaded, interError] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	});

	useEffect(() => {
		if (interLoaded || interError) {
			// Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
			SplashScreen.hideAsync();
		}
	}, [interLoaded, interError]);

	if (!interLoaded && !interError) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();
	const myTheme = {
		...DefaultTheme,
		colors: { ...DefaultTheme.colors, background: 'black' },
	};

	return (
		<RealmProvider schema={[Student, Studies]}>
			<TamaguiProvider config={config}>
				<ThemeProvider
					value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
				>
					<Stack screenOptions={{ animation: 'fade_from_bottom' }}>
						<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
						<Stack.Screen name='newStudy' options={{ headerTitle: '' }} />
						<Stack.Screen name='newVisit' options={{ headerTitle: '' }} />

						<Stack.Screen name='modal' options={{ presentation: 'modal' }} />
					</Stack>
				</ThemeProvider>
			</TamaguiProvider>
		</RealmProvider>
	);
}
