import { ReactNode } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import { Platform } from "react-native";

interface Props {
  children: ReactNode;
}

export function DrawerSceneWrapper({ children }: Props) {
  const isAndroid = Platform.OS === "android";
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          progress.value,
          [0, 1],
          [1, 0.8],
          Extrapolation.CLAMP
        ),
      },
      {
        translateX: isAndroid
          ? interpolate(progress.value, [0, 1], [0, 200], Extrapolation.CLAMP)
          : 0,
      },
      {
        rotateY: isAndroid
          ? interpolate(progress.value, [0, 1], [0, -25], Extrapolation.CLAMP) +
            "deg"
          : "0deg",
      },
    ],
    overflow: "hidden",
    borderRadius: progress.value > 0.1 ? 20 : 0,
  }));

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      {children}
    </Animated.View>
  );
}
