import { View, StyleSheet, Image, Text, Platform } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";

import { DrawerSceneWrapper } from "@/components/drawer-scene-wrapper";

export default function Index() {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.img}
            source={{ uri: "https://github.com/hugodemoraes.png" }}
          />

          <View style={styles.user}>
            <Text style={styles.text}>Olá,</Text>
            <Text style={styles.username}>Hugo de Moraes</Text>
          </View>

          <DrawerToggleButton />
        </View>
      </View>
    </DrawerSceneWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: Platform.OS === "android" ? 40 : 60,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  user: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
  },
  username: {
    fontSize: 16,
    fontWeight: "700",
  },
});
