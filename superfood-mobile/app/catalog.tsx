import { ScrollView, View, Text, Image } from 'react-native';
import catalog from '../data/catalog.json';

export default function Catalog() {
	return (
		<ScrollView style={{ flex: 1, backgroundColor: '#052e16' }} contentContainerStyle={{ padding: 16 }}>
			<Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>Catalog</Text>
			{Object.entries(catalog as Record<string, any[]>).map(([category, items]) => (
				<View key={category} style={{ marginBottom: 16 }}>
					<Text style={{ color: 'white', fontSize: 18, marginBottom: 8 }}>{category}</Text>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
						{items.map((item: any, idx: number) => (
							<View key={idx} style={{ width: '48%', margin: '1%', backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: 6, overflow: 'hidden' }}>
								<Image source={{ uri: item.img }} style={{ width: '100%', height: 100 }} />
								<View style={{ padding: 8 }}>
									<Text style={{ color: 'white', fontWeight: '600' }}>{item.name}</Text>
									<Text style={{ color: 'white', opacity: 0.8, fontSize: 12 }}>{(item.items || []).join(', ')}</Text>
								</View>
							</View>
						))}
					</View>
				</View>
			))}
		</ScrollView>
	);
}