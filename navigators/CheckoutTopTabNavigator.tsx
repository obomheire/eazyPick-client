import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Screens
import Checkout from "../screens/Cart/Checkout/Checkout";
import Payment from "../screens/Cart/Checkout/Payment";
import Confirm from "../screens/Cart/Checkout/Confirm";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {

    const order = useSelector((state: RootState) => state.orderItems.order);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shipping" component={Checkout} />
      <Tab.Screen
        name="Payment"
        children={(props) => <Payment order={order} {...props} />}
      />
      <Tab.Screen
        name="Confirm"
        children={(props) => <Confirm order={order} {...props} />}
      />
    </Tab.Navigator>
  );
}

export default function CheckoutTopTabNavigator() {
  return <MyTabs />;
}


// inorder to have access to the navigation props, it is advisable you use it this way
// <Tab.Screen
//   name="home"
//   children={(props) => <Component user={user} {...props} />}
// />;

  //  <tab.Screen
  //    name="home"
  //    children={() => <ComponentName propName={propValue} />}
  //  />;