import { View, StyleSheet, Text } from "react-native";

import { DrawerSceneWrapper } from "@/components/drawer-scene-wrapper";

export default function Notifications() {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Notificações</Text>
        </View>
      </View>
    </DrawerSceneWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
  },
});
