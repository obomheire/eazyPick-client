import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Container, Radio, Icon } from "native-base";
import { order } from "../../../utils/interface";
import { CheckoutTopTabProps } from "../../../types";
import RadioButton from "../../../shared/RadioButton";

var { height, width } = Dimensions.get("window");

const methods = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Bank Transfer", value: 2 },
  { name: "Card Payment", value: 3 },
];

const paymentCards = [
  { name: "Wallet", value: 1 },
  { name: "Visa", value: 2 },
  { name: "MasterCard", value: 3 },
  { name: "Other", value: 4 },
];

export type PaymentProps = {
  order: order;
  // navigation: CheckoutTopTabProps<"Payment">["navigation"];
  // route: CheckoutTopTabProps<"Payment">["route"];
};

const Payment = ({ order }: PaymentProps) => {
  const [selected, setSelected] = useState<number>(0);
  const [card, setCard] = useState();
  return (
    <View>
      <View>
        <Text style={styles.textHeader}>Choose your payment method</Text>
      </View>
      <View>
        {
          // methods.map((item, index) => {
          // return (
          //   <ListItem key={item.name} onPress={() => setSelected(item.value)}>
          //     <Left>
          //       <Text>{item.name}</Text>
          //     </Left>
          //     <Right>
          //       <Radio selected={selected == item.value} />
          //     </Right>
          //   </ListItem>
          // );
          // })
          // <FlatList
          //   data={methods}
          //   keyExtractor={(item) => item.name}
          //   renderItem={({ item }) => (
          //     <View style={styles.listView}>
          //       <View>
          //         <Text>{item.name}</Text>
          //       </View>
          //       <View>
          //         <Text>{item.name}</Text>
          //       </View>
          //     </View>
          //   )}
          //   style={{ width: width }}
          // />
        }
        <RadioButton methods={methods} />
        {/* {selected == 3 ? (
          <Picker
            mode="dropdown"
            iosIcon={<Icon name={"arrow-down"} />}
            headerStyle={{ backgroundColor: "orange" }}
            headerBackButtonTextStyle={{ color: "#fff" }}
            headerTitleStyle={{ color: "#fff" }}
            selectedValue={card}
            onValueChange={(x) => setCard(x)}
          >
            {paymentCards.map((c, index) => {
              return <Picker.Item key={c.name} label={c.name} value={c.name} />;
            })}
          </Picker>
        ) : null}
        <View style={{ marginTop: 60, alignSelf: "center" }}>
          <Button
            title={"Confirm"}
            onPress={() => navigation.navigate("Confirm", { order })}
          /> */}
        {/* </View> */}
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
