import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { Container, Radio, Icon } from "native-base";
import { order } from "../../../utils/interface";
import { CheckoutTopTabProps } from "../../../types";

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

export type paymentProps = {
  order: order;
  navigation: CheckoutTopTabProps<"Payment">["navigation"];
  route: CheckoutTopTabProps<"Payment">["route"];
  
};

const Payment = ({ order, route, navigation }: paymentProps) => {
  // const orderParams = route.params.order;

  const [selected, setSelected] = useState<number>(0);
  const [card, setCard] = useState();
  return (
    <Container>
      <View>
          <Text>Choose your payment method</Text>
      </View>
      <View>
        {
          // methods.map((item, index) => {
          // return (
          //   <ListItem key={item.name} onPress={() => setSelected(item.value)}>
          //     <Left>
          //       <Text>{item.name}</Text>
          //     </Left>
          //     {/* <Right>
          //       <Radio selected={selected == item.value} />
          //     </Right> */}
          //   </ListItem>
          // );
          // })
        }
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
    </Container>
  );
};

export default Payment;
