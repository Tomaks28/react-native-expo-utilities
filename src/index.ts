import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeExpoUtilities.web.ts
// and on native platforms to ReactNativeExpoUtilities.ts
import ReactNativeExpoUtilitiesModule from './ReactNativeExpoUtilitiesModule';
import ReactNativeExpoUtilitiesView from './ReactNativeExpoUtilitiesView';
import { ChangeEventPayload, ReactNativeExpoUtilitiesViewProps } from './ReactNativeExpoUtilities.types';

// Get the native constant value.
export const PI = ReactNativeExpoUtilitiesModule.PI;

export function hello(): string {
  return ReactNativeExpoUtilitiesModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeExpoUtilitiesModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeExpoUtilitiesModule ?? NativeModulesProxy.ReactNativeExpoUtilities);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeExpoUtilitiesView, ReactNativeExpoUtilitiesViewProps, ChangeEventPayload };
