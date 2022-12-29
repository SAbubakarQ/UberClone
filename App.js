import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from "react-redux";
// Screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import GiftScreen from './screens/GiftScreen';
import { store } from './store';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <StatusBar style="auto"/>
            <Stack.Navigator>
                <Stack.Screen 
                  name="HomeScreen"
                  component={HomeScreen}
                  option={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen 
                  name="MapScreen"
                  component={MapScreen}
                  option={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="giftEE"
                  component={GiftScreen}
                  option={{
                    headerShown: false,
                  }}
                  />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
    
  );
}

