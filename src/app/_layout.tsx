import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Feather } from "@expo/vector-icons";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerHideStatusBarOnOpen: true,
          overlayColor: "transparent",
          drawerActiveBackgroundColor: "transparent",
          drawerInactiveBackgroundColor: "transparent",
          drawerActiveTintColor: "#FFFFFF",
          drawerInactiveTintColor: "#727D9B",
          drawerStyle: {
            backgroundColor: "#1D1F25",
            width: "50%",
            paddingTop: Platform.OS === "android" ? 32 : 0,
          },
          drawerLabelStyle: {
            marginLeft: -24,
          },
          sceneContainerStyle: {
            backgroundColor: "#1D1F25",
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Início",
            drawerIcon: ({ color }) => (
              <Feather name="home" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="notifications"
          options={{
            drawerLabel: "Notificações",
            drawerIcon: ({ color }) => (
              <Feather name="bell" size={20} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
