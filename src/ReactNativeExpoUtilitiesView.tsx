import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeExpoUtilitiesViewProps } from './ReactNativeExpoUtilities.types';

const NativeView: React.ComponentType<ReactNativeExpoUtilitiesViewProps> =
  requireNativeViewManager('ReactNativeExpoUtilities');

export default function ReactNativeExpoUtilitiesView(props: ReactNativeExpoUtilitiesViewProps) {
  return <NativeView {...props} />;
}
