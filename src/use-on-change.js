import { useEffect } from 'react';
import usePrevious from './use-previous';

export default function useOnChange(callback, val) {
  const previous = usePrevious(val);

  useEffect(() => {
    if (typeof previous !== 'undefined' && val !== previous) {
      callback(val, previous);
    }
  }, [val, previous]);
}