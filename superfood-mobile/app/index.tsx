import { Link } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

export default function Home() {
	return (
		<ScrollView contentContainerStyle={{ padding: 16 }}>
			<Text style={{ fontSize: 28, fontWeight: '700', marginBottom: 8 }}>The Super Food AI</Text>
			<Text style={{ opacity: 0.8, marginBottom: 12 }}>Super Food for Super Humans</Text>
			<View style={{ flexDirection: 'row', gap: 12, marginBottom: 16 }}>
				<Link href="/catalog" asChild>
					<TouchableOpacity style={{ backgroundColor: '#16a34a', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 6 }}>
						<Text style={{ color: '#fff' }}>Explore Catalog</Text>
					</TouchableOpacity>
				</Link>
				<Link href="/procure" asChild>
					<TouchableOpacity style={{ backgroundColor: '#f59e0b', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 6 }}>
						<Text>Procure Now</Text>
					</TouchableOpacity>
				</Link>
			</View>
			<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
				{Array.from({ length: 6 }).map((_, idx) => (
					<Image key={idx} source={{ uri: `https://source.unsplash.com/random/300x20${idx}?nourish,health,greens` }} style={{ width: '31%', height: 90, borderRadius: 6 }} />
				))}
			</View>
		</ScrollView>
	);
}