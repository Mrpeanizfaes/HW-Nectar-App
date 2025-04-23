import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import ExploreScreen from "../screens/explore/ExploreScreen";
import { Image, StyleSheet, Text } from "react-native";
import CustomTabButton from "../components/CustomTabButton.js";

const Tab = createBottomTabNavigator();

export default function MainBottomTab({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarActiveTintColor: "#4A90E2",
        tabBarInactiveTintColor: "#BBBBBB",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton {...props} onPress={props.onPress}>
              <Image
                source={require("../assets/icons/shop.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text style={{ fontSize: 12 }}>Shop</Text>
            </CustomTabButton>
          ),
        }}
      />

      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton {...props} onPress={props.onPress}>
              <Image
                source={require("../assets/icons/exploregreen.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text style={{ fontSize: 12, color: "#53B175" }}>Explore</Text>
            </CustomTabButton>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 20,
    right: 20,
    height: 90,
    backgroundColor: "#fff",
    borderRadius: 40,
    elevation: 5,
  },
});
