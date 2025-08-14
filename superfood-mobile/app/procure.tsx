import { useState } from 'react';
import { ScrollView, View, Text, TextInput, Pressable } from 'react-native';
import catalog from '../data/catalog.json';

function suggest(objective: string) {
	const lower = objective.toLowerCase();
	const res: any[] = [];
	const add = (k: string) => (catalog as any)[k]?.forEach((i: any) => res.push({ ...i, category: k }));
	if (lower.includes('mass reduction')) add('Holistic Wellness');
	if (lower.includes('muscle') || lower.includes('gain')) add('Musculoskeletal');
	if (lower.includes('vision')) add('Vision');
	return Array.from(new Map(res.map((r) => [r.name, r])).values()).slice(0, 10);
}

export default function Procure() {
	const [objective, setObjective] = useState('mass reduction');
	const items = suggest(objective);
	return (
		<ScrollView style={{ flex: 1, backgroundColor: '#052e16' }} contentContainerStyle={{ padding: 16 }}>
			<Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>Procure</Text>
			<Text style={{ color: 'white', opacity: 0.9 }}>Objective</Text>
			<TextInput value={objective} onChangeText={setObjective} placeholder="mass reduction" placeholderTextColor="#9ca3af" style={{ borderWidth: 1, borderColor: '#14532d', color: 'white', padding: 10, borderRadius: 6, marginTop: 6 }} />
			<View style={{ marginTop: 12 }}>
				{items.map((i, idx) => (
					<View key={idx} style={{ padding: 10, borderWidth: 1, borderColor: '#14532d', backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: 6, marginBottom: 8 }}>
						<Text style={{ color: 'white', fontWeight: '600' }}>{i.name} <Text style={{ fontSize: 12, opacity: 0.7 }}>[{i.category}]</Text></Text>
						<Text style={{ color: 'white', opacity: 0.8, fontSize: 12 }}>{(i.items || []).join(', ')}</Text>
					</View>
				))}
			</View>
			<Pressable style={{ backgroundColor: '#16a34a', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 6, marginTop: 8 }}>
				<Text style={{ color: '#052e16', fontWeight: 'bold' }}>Simulate Checkout</Text>
			</Pressable>
		</ScrollView>
	);
}