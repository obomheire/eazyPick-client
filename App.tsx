import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductContainer from "./screens/Products/ProductsContainer";
import Header from "./shared/Header";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./navigators/Main";
export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Main />
      {/* <ProductContainer /> */}
    </NavigationContainer>
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
