import { useEffect, useRef } from 'react';

export default function useCurrentRef(value) {
  const currentRef = useRef(value);

  useEffect(() => {
    currentRef.current = value;
  }, [value]);

  return currentRef;
}
