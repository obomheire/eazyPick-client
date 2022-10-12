import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from 'react'

var { height, width } = Dimensions.get("window");

const Confirm = () => {
  return (
    <View>
      <Text>Confirm Screen</Text>
    </View>
  )
}

export default Confirm

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  title: {
    alignSelf: "center",
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    width: width / 1.2,
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});