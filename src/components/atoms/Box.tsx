import { PropsWithChildren, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';

interface BoxProps extends PropsWithChildren {
  flex?: boolean;
  horizontal?: boolean;
  gap?: number;
  center?: boolean;
  xcenter?: boolean;
  ycenter?: boolean;
}

export const Box = ({ children, ...props }: BoxProps) => {
  const memoizedStyles = useMemo(
    () => [
      props.flex && styles.flex,
      props.horizontal && styles.horizontal,
      props.center && styles.center,
      props.xcenter && styles.xcenter,
      props.ycenter && styles.ycenter,
      { gap: props.gap },
    ],
    [props],
  );

  return <View style={memoizedStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  horizontal: { flexDirection: 'row' },
  center: { justifyContent: 'center', alignItems: 'center' },
  ycenter: { justifyContent: 'center' },
  xcenter: { alignItems: 'center' },
});
