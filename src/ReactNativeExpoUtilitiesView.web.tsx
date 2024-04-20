import * as React from 'react';

import { ReactNativeExpoUtilitiesViewProps } from './ReactNativeExpoUtilities.types';

export default function ReactNativeExpoUtilitiesView(props: ReactNativeExpoUtilitiesViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
