import { useState } from 'react';
import { ScrollView, View, Text, TextInput, Pressable } from 'react-native';

export default function Control() {
	const [weight, setWeight] = useState('70');
	const [vitality, setVitality] = useState('7');
	const [entries, setEntries] = useState<any[]>([]);
	return (
		<ScrollView style={{ flex: 1, backgroundColor: '#052e16' }} contentContainerStyle={{ padding: 16 }}>
			<Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>Control Panel</Text>
			<View style={{ flexDirection: 'row', gap: 8 }}>
				<View style={{ flex: 1 }}>
					<Text style={{ color: 'white' }}>Mass (kg)</Text>
					<TextInput value={weight} onChangeText={setWeight} keyboardType="numeric" style={{ borderWidth: 1, borderColor: '#14532d', color: 'white', padding: 10, borderRadius: 6, marginTop: 6 }} />
				</View>
				<View style={{ flex: 1 }}>
					<Text style={{ color: 'white' }}>Vitality (1-10)</Text>
					<TextInput value={vitality} onChangeText={setVitality} keyboardType="numeric" style={{ borderWidth: 1, borderColor: '#14532d', color: 'white', padding: 10, borderRadius: 6, marginTop: 6 }} />
				</View>
			</View>
			<Pressable onPress={() => setEntries([...entries, { t: new Date().toLocaleDateString(), weight: Number(weight), vitality: Number(vitality) }])} style={{ backgroundColor: '#16a34a', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 6, marginTop: 12 }}>
				<Text style={{ color: '#052e16', fontWeight: 'bold' }}>Add Entry</Text>
			</Pressable>
			<View style={{ marginTop: 12 }}>
				{entries.map((e, i) => (
					<Text key={i} style={{ color: 'white' }}>{e.t}: {e.weight}kg, vitality {e.vitality}</Text>
				))}
			</View>
		</ScrollView>
	);
}