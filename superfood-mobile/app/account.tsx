import { ScrollView, View, Text } from 'react-native';
import PhoneAuth from '../components/PhoneAuth';

export default function Account() {
	return (
		<ScrollView style={{ flex: 1, backgroundColor: '#052e16' }} contentContainerStyle={{ padding: 16 }}>
			<Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>Account</Text>
			<Text style={{ color: 'white', opacity: 0.9, marginBottom: 8 }}>Sign in using your phone via OTP (SMS). India +91 default. No email sign-in.</Text>
			<PhoneAuth />
		</ScrollView>
	);
}