import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Account() {
	return (
		<View style={{ padding: 16 }}>
			<Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 8 }}>Account</Text>
			<Text style={{ opacity: 0.8, marginBottom: 12 }}>Sign in with phone to access your dashboard.</Text>
			<Link href="/auth" asChild>
				<TouchableOpacity style={{ backgroundColor: '#16a34a', padding: 12, borderRadius: 6 }}>
					<Text style={{ color: '#fff', textAlign: 'center' }}>Continue to OTP</Text>
				</TouchableOpacity>
			</Link>
		</View>
	);
}