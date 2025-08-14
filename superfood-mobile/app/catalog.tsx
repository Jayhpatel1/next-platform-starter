import { View, Text, Image, ScrollView } from "react-native";
import data from "../data/catalog.json";

export default function Catalog() {
	const categories = Array.from(new Set(data.map((i) => i.category)));
	return (
		<ScrollView contentContainerStyle={{ padding: 16 }}>
			<Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 8 }}>Catalog</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
				{categories.map((c) => (
					<Text key={c} style={{ backgroundColor: '#e5e7eb', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, marginRight: 8 }}>{c}</Text>
				))}
			</ScrollView>
			{data.map((item) => (
				<View key={item.id} style={{ borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8, marginBottom: 12, overflow: 'hidden' }}>
					<Image source={{ uri: `https://source.unsplash.com/random/600x400/?${encodeURIComponent(item.name)}` }} style={{ width: '100%', height: 140 }} />
					<View style={{ padding: 10 }}>
						<Text style={{ fontWeight: '600' }}>{item.name}</Text>
						<Text style={{ opacity: 0.8 }}>{item.ingredients.join(', ')}</Text>
						<Text style={{ marginTop: 4, opacity: 0.8 }}>{item.category} · {item.type}</Text>
					</View>
				</View>
			))}
		</ScrollView>
	);
}