import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ScreentimeAuth.web.ts
// and on native platforms to ScreentimeAuth.ts
import ScreentimeAuthModule from './ScreentimeAuthModule';
import ScreentimeAuthView from './ScreentimeAuthView';
import { ChangeEventPayload, ScreentimeAuthViewProps } from './ScreentimeAuth.types';

// Get the native constant value.
export const PI = ScreentimeAuthModule.PI;

export function hello(): string {
  return ScreentimeAuthModule.hello();
}

export async function setValueAsync(value: string) {
  return await ScreentimeAuthModule.setValueAsync(value);
}

const emitter = new EventEmitter(ScreentimeAuthModule ?? NativeModulesProxy.ScreentimeAuth);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ScreentimeAuthView, ScreentimeAuthViewProps, ChangeEventPayload };
