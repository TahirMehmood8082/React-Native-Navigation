import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Screen1"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Image
                source={require("../../assets/checkbox")}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? "purple" : "black",
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Screen2"
        component={Screen2}
        options={{ 
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Image
                source={require("../../assets/checkbox")}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? "purple" : "black",
                }}
              />
            );
          }, 
        }}
      />
      <Bottom.Screen
        name="Screen3"
        component={Screen3}
        options={{ 
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Image
                source={require("../../assets/checkbox")}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? "purple" : "black",
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
