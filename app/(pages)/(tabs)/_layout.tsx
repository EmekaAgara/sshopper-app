import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#000",
          paddingTop: 9,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={27} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="preferences"
        options={{
          headerShown: false,
          title: "Preferences",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={27} name="th-large" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          headerShown: false,
          title: "Inbox",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={27} name="envelope" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={27} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
