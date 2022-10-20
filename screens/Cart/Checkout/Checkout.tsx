import React, { useEffect, useState, useContext } from "react";
import { Text, View, Button, Dimensions } from "react-native";
import { Toast } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import AuthGlobal from "../../../Context/store/AuthGlobal";
import FormContainer from "../../../shared/Form/FormContainer";
import Input from "../../../shared/Form/Input";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import countries from "../../../assets/countries.json";
import { Products } from "../../../utils/interface";
import RNPickerSelect from "react-native-picker-select";
import { CheckoutTopTabProps } from "../../../types";
import { setOrder } from "../../../redux/slices/orderItemsSlice";

var { height, width } = Dimensions.get("window");

const Checkout = ({ navigation }: CheckoutTopTabProps<"Shipping">) => {
  const cartItems = useSelector((state: RootState) => state.cartItems.cart);
  const dispatch = useDispatch();
  // const context = useContext(AuthGlobal);

  const [orderItems, setOrderItems] = useState<Products[]>([]);
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState();

  let order = {
    city,
    country,
    dateOrdered: new Date(Date.now()).toString(),
    orderItems,
    phone,
    shippingAddress1: address,
    shippingAddress2: address2,
    // status: "3",
    // user,
    zip,
  };

  useEffect(() => {
    setOrderItems(cartItems);

    // if (context.stateUser.isAuthenticated) {
    //   setUser(context.stateUser.user.sub);
    // } else {
    //   props.navigation.navigate("Cart");
    //   Toast.show({
    //     topOffset: 60,
    //     type: "error",
    //     text1: "Please Login to Checkout",
    //     text2: "",
    //   });
    // }
  }, []);

  const checkOut = () => {
    dispatch(setOrder(order));
    navigation.navigate("Payment", { order });
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={"Shipping Address"}>
        <Input
          placeholder={"Phone"}
          name={"phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text: string) => setPhone(text)}
        />
        <Input
          placeholder={"Shipping Address 1"}
          name={"ShippingAddress1"}
          value={address}
          keyboardType={"default"}
          onChangeText={(text: string) => setAddress(text)}
        />
        <Input
          placeholder={"Shipping Address 2"}
          name={"ShippingAddress2"}
          value={address2}
          keyboardType={"default"}
          onChangeText={(text: string) => setAddress2(text)}
        />
        <Input
          placeholder={"City"}
          name={"city"}
          value={city}
          keyboardType={"default"}
          onChangeText={(text: string) => setCity(text)}
        />
        <Input
          placeholder={"Zip Code"}
          name={"zip"}
          value={zip}
          keyboardType={"numeric"}
          onChangeText={(text: string) => setZip(text)}
        />
        <RNPickerSelect
          onValueChange={(value) => setCountry(value)}
          items={countries}
        />

        <View style={{ width: "80%", alignItems: "center" }}>
          <Button title="Confirm" onPress={checkOut} />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

export default Checkout;
