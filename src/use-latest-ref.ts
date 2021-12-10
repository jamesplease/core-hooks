import { useEffect, useRef } from 'react';

export default function useLatestRef<Value>(
  value: Value
): React.MutableRefObject<Value> {
  const latestRef = useRef(value);

  useEffect(() => {
    latestRef.current = value;
  }, [value]);

  return latestRef;
}
