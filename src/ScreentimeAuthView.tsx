import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ScreentimeAuthViewProps } from './ScreentimeAuth.types';

const NativeView: React.ComponentType<ScreentimeAuthViewProps> =
  requireNativeViewManager('ScreentimeAuth');

export default function ScreentimeAuthView(props: ScreentimeAuthViewProps) {
  return <NativeView {...props} />;
}
