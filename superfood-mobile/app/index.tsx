import { Link } from 'expo-router';
import { View, Text, Pressable, ScrollView } from 'react-native';

export default function Home() {
	return (
		<ScrollView style={{ flex: 1, backgroundColor: '#052e16' }} contentContainerStyle={{ padding: 16 }}>
			<Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>The Super Food AI</Text>
			<Text style={{ color: 'white', opacity: 0.9, fontSize: 16, marginBottom: 16 }}>Super Food for Super Humans</Text>
			<View style={{ flexDirection: 'row', gap: 8 }}>
				<Link href="/catalog" asChild>
					<Pressable style={{ backgroundColor: '#16a34a', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 6 }}>
						<Text style={{ color: '#052e16', fontWeight: 'bold' }}>Explore Catalog</Text>
					</Pressable>
				</Link>
				<Link href="/procure" asChild>
					<Pressable style={{ backgroundColor: '#16a34a', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 6 }}>
						<Text style={{ color: '#052e16', fontWeight: 'bold' }}>Procure</Text>
					</Pressable>
				</Link>
			</View>
			<View style={{ marginTop: 20 }}>
				<Text style={{ color: 'white', fontSize: 18, marginBottom: 12 }}>Discover Wellness Categories</Text>
				<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
					{['Vision','Cardiovascular','Immunity','Respiratory','Musculoskeletal','Cognitive','Hormonal & Vigor','Holistic Wellness'].map((c)=> (
						<View key={c} style={{ width: '48%', margin: '1%', paddingVertical: 16, alignItems: 'center', borderWidth: 1, borderColor: '#14532d', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 6 }}>
							<Text style={{ color: 'white', textAlign: 'center' }}>{c}</Text>
						</View>
					))}
				</View>
			</View>
		</ScrollView>
	);
}