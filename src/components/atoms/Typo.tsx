import { PropsWithChildren } from "react";
import { Text } from "react-native";

export default function Typo({ children }: PropsWithChildren) {
  return <Text>{children}</Text>;
}
