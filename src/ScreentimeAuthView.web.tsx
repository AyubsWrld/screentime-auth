import * as React from 'react';

import { ScreentimeAuthViewProps } from './ScreentimeAuth.types';

export default function ScreentimeAuthView(props: ScreentimeAuthViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
