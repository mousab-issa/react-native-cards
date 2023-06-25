import { useFonts } from "@expo-google-fonts/space-grotesk";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { customFontsToLoad } from "./src/theme/typography";

export default function App() {
  const [areFontsLoaded] = useFonts(customFontsToLoad);

  if (!areFontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
