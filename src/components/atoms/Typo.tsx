import { PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';

export const Typo = ({ children }: PropsWithChildren) => {
  return <Text>{children}</Text>;
};

const styles = StyleSheet.create({});
