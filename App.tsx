import { useFonts } from "@expo-google-fonts/space-grotesk";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { customFontsToLoad } from "./src/theme/typography";
import { Provider } from "react-redux";
import { store } from "./src/state/store";

export default function App() {
  const [areFontsLoaded] = useFonts(customFontsToLoad);

  if (!areFontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}
