import React, { useState } from "react";
import { View, Button, Text, Dimensions, StyleSheet, } from "react-native";
import { order } from "../../../utils/interface";
import { CheckoutTopTabProps } from "../../../types";
import RadioButton from "../../../shared/RadioButton";
import RNPickerSelect from "react-native-picker-select";

var { height, width } = Dimensions.get("window");

const methods = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Bank Transfer", value: 2 },
  { name: "Card Payment", value: 3 },
];

const paymentCards = [
  { label: "Wallet", value: 1 },
  { label: "Visa", value: 2 },
  { label: "MasterCard", value: 3 },
  { label: "Other", value: 4 },
];

export type PaymentProps = {
  order: order;
  navigation: CheckoutTopTabProps<"Payment">["navigation"];
  route: CheckoutTopTabProps<"Payment">["route"];
  // navigation: any;
  // route: any;
};

const Payment = ({ order, navigation, route }: PaymentProps) => {
  const [selected, setSelected] = useState<number>(0);
  const [card, setCard] = useState<number>(0);
  return (
    <View>
      <View>
        <Text style={styles.textHeader}>Choose your payment method</Text>
      </View>
      <View>
        <RadioButton methods={methods} setSelected={setSelected} />
        {selected == 3 ? (
          <RNPickerSelect
            onValueChange={(value) => setCard(value)}
            items={paymentCards}
          />
        ) : null}
        <View style={{ marginTop: 60, alignSelf: "center" }}>
          <Button
            title={"Confirm"}
            onPress={() => navigation.navigate("Confirm", { order })}
          />
        </View>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  textHeader: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 5,
    paddingTop: 10,
  },
  listView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    padding: 10,
  },
});
