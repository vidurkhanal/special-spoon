import { Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export default function IndexLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
    </Stack>
  );
}
