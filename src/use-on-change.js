import { useEffect } from 'react';
import usePrevious from './use-previous';
import { warning } from './warning';

function isEqual(a, b) {
  return a === b;
}

export default function useChange(val, callback, comparator = isEqual) {
  const previous = usePrevious(val);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      if (typeof callback !== 'function') {
        warning(
          `A non-function callback was passed to the useChange hook. callback must be a function.`,
          'useOnChange_invalidCallback'
        );
      }

      if (typeof comparator !== 'function') {
        warning(
          `A non-function comparator was passed to the useChange hook. comparator must be a function.`,
          'useOnChange_invalidComparator'
        );
      }
    }

    if (typeof callback === 'function') {
      if (!comparator(val, previous)) {
        callback(val, previous);
      }
    }
  }, [val, previous, comparator, callback]);
}
