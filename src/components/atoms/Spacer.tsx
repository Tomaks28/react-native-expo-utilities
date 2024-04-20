import { memo } from "react";
import { View } from "react-native";

export interface SpacerProps {
  vertical?: number;
  horizontal?: number;
}

export const Spacer = memo(({ vertical, horizontal }: SpacerProps) => {
  return (
    <View
      style={{
        ...(vertical && { minHeight: vertical }),
        ...(horizontal && { minWidth: horizontal }),
      }}
    />
  );
});
