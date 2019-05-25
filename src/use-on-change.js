import { useEffect } from 'react';
import { usePrevious } from './use-previous';

function isEqual(a, b) {
  return a === b;
}

export default function useChange(val, callback, comparator = isEqual) {
  const previous = usePrevious(val);

  useEffect(() => {
    if (!comparator(val, previous)) {
      callback(val, previous);
    }
  }, [val, previous, comparator, callback]);
}
