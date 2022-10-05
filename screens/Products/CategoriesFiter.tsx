import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { TabView, TabBar } from "react-native-tab-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Categories, Products } from "../../utils/interface";
import ProductsCategoriesData from "../../assets/data/categories.json";

const SCREEN_WIDTH = Dimensions.get("window").width;

type CategoriesFiterProps = {
  setTabViewId: (index: string) => void;
};

const CategoriesFiter = ({
  setTabViewId,
}: CategoriesFiterProps) => {
  const [active, setActive] = useState<boolean>(false);
  const [index, setIndex] = useState(0);

  const menuItems = ProductsCategoriesData.map((value) => {
    return {
      key: value._id.$oid,
      title: value.name,
    };
  });

  const allCtr = [
    {
      key: "5f15d5cdcb4a6642bddc0fe9p",
      title: "All",
    },
  ];

  const [routes] = useState([...allCtr, ...menuItems]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {}}
      >
        <>
          <TabView
            navigationState={{ index, routes }}
            renderScene={() => <View></View>}
            onIndexChange={setIndex}
            initialLayout={{ width: SCREEN_WIDTH }}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
            style={[
              styles.center,
              { margin: 5 },
              active === true ? styles.active : styles.inActive,
            ]}
          />
          {useEffect(() => {
            setTabViewId(routes[index].key);
            setActive(true);
          }, [routes[index].key])}
        </>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CategoriesFiter;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#03bafc",
  },
  inActive: {
    backgroundColor: "#a0e1eb",
  },
  tab: {
    paddingTop: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },

  tabContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    // borderRadius: 25,
    backgroundColor: "#f2f2f2",
  },

  tabLabel: { fontWeight: "bold", color: "#03bafc" },

  tabStyle: { width: SCREEN_WIDTH / 3 },
  // view10: { elevation: 10, backgroundColor: "red" },
});
