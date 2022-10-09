import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductContainer from "./screens/Products/ProductsContainer";
import Header from "./shared/Header";
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./navigators/MainTabNavigator";
import { store } from "./redux/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <MainTabNavigator />
        {/* <ProductContainer /> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
