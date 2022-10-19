import { View, TouchableOpacity, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { RadioButtonprops, valueState } from "../utils/interface";

const RadioButton = ({ methods, setSelected }: RadioButtonprops) => {
  const [value, setValue] = useState<valueState>({ value: 0 });

  return (
    <View>
      {
        <FlatList
          data={methods}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <View key={item.value} style={styles.container}>
                <Text style={styles.radioText}>{item.name}</Text>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => {
                    setValue({
                      value: item.value,
                    });
                    setSelected(item.value);
                  }}
                >
                  {value.value === item.value && (
                    <View style={styles.selectedRb} />
                  )}
                </TouchableOpacity>
              </View>
            );
          }}
        />
      }
      {/* <Text> Selected: {value.value} </Text> */}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  radioText: {
    marginRight: 35,
    fontSize: 20,
    color: "#000",
    fontWeight: "700",
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#3740ff",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: "#3740ff",
  },
  result: {
    marginTop: 20,
    color: "white",
    fontWeight: "600",
    backgroundColor: "#F3FBFE",
  },
});