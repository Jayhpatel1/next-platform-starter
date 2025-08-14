import { Dimensions, ScrollView, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Control() {
	const width = Dimensions.get('window').width - 24;
	return (
		<ScrollView contentContainerStyle={{ padding: 12 }}>
			<Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 8 }}>Control Panel</Text>
			<View style={{ backgroundColor: '#fff', borderRadius: 8, padding: 8, marginBottom: 12 }}>
				<Text>Mass (kg)</Text>
				<LineChart
					data={{ labels: ['1','2','3','4','5','6'], datasets: [{ data: [70,71,70.5,69.8,70.1,69.9] }] }}
					width={width}
					height={180}
					chartConfig={{ color: () => '#16a34a', labelColor: () => '#64748b', backgroundGradientFrom: '#fff', backgroundGradientTo: '#fff' }}
					withDots={false}
					bezier
				/>
			</View>
		</ScrollView>
	);
}