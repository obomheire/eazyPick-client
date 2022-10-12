import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./shared/Header";
import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabNavigator from "./navigators/MainBottomTabNavigator";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { NativeBaseProvider, Box } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <MainBottomTabNavigator />
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}
