import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "The Super Food AI" }} />
			<Stack.Screen name="catalog" options={{ title: "Catalog" }} />
			<Stack.Screen name="procure" options={{ title: "Procure" }} />
			<Stack.Screen name="control" options={{ title: "Control" }} />
			<Stack.Screen name="account" options={{ title: "Account" }} />
			<Stack.Screen name="auth" options={{ title: "OTP" }} />
		</Stack>
	);
}