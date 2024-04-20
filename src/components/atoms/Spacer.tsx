import { View } from "react-native";

export interface SpacerProps {
  vertical?: number;
  horizontal?: number;
}

export default function Spacer({ vertical, horizontal }: SpacerProps) {
  return (
    <View
      style={{
        ...(vertical && { minHeight: vertical }),
        ...(horizontal && { minWidth: horizontal }),
      }}
    />
  );
}
