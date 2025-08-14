import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

export default function RootLayout() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#052e16' }}>
			<View style={{ flex: 1 }}>
				<Slot />
			</View>
		</SafeAreaView>
	);
}