import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import data from "../data/catalog.json";

export default function Procure() {
	const [selected, setSelected] = useState<string[]>([]);
	const toggle = (id: string) => setSelected((s) => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
	const total = selected.length * 199;
	return (
		<ScrollView contentContainerStyle={{ padding: 16 }}>
			<Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 8 }}>Procure</Text>
			{data.map((i) => (
				<TouchableOpacity key={i.id} onPress={() => toggle(i.id)} style={{ borderWidth: 1, borderColor: selected.includes(i.id) ? '#16a34a' : '#e5e7eb', borderRadius: 8, padding: 10, marginBottom: 8 }}>
					<Text style={{ fontWeight: '600' }}>{i.name}</Text>
					<Text style={{ opacity: 0.8 }}>{i.category}</Text>
				</TouchableOpacity>
			))}
			<TouchableOpacity style={{ backgroundColor: '#16a34a', padding: 12, borderRadius: 6 }}>
				<Text style={{ color: '#fff', textAlign: 'center' }}>Simulate Checkout · ₹{total}</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}