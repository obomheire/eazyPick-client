import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductContainer from "./screens/Products/ProductsContainer";
import Header from "./shared/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer />
    </View>
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
