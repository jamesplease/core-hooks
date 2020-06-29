import * as React from 'react';

type ValueContainer<T> = { v: T };

export default function useConstant<Value>(fn: () => Value): Value {
  const ref = React.useRef<ValueContainer<Value>>();

  if (!ref.current) {
    ref.current = { v: fn() };
  }

  return ref.current.v;
}
