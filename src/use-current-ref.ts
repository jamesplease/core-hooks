import { useEffect, useRef } from 'react';

export default function useCurrentRef<Value>(
  value: Value
): React.MutableRefObject<Value> {
  const currentRef = useRef(value);

  useEffect(() => {
    currentRef.current = value;
  }, [value]);

  return currentRef;
}
