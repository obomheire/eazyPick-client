import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SearchBarProps } from "../utils/interface";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({
  onFocus,
  onChangeText,
  onBlur,
  focus,
}: SearchBarProps) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="search"
        style={styles.inputStyle}
        // value={}
        onChangeText={onChangeText}
        // onEndEditing={}
        onFocus={onFocus} // call openList and set focus to true
      />
      {focus == true ? (
        <View style={{ marginRight: 10, marginTop: 10}}>
          <AntDesign name="close" size={24} color="black" onPress={onBlur} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
export default SearchBar;
