import { renderHook } from '@testing-library/react-hooks';
import { useCurrentRef } from '../src';

describe('useCurrentRef()', () => {
  it('should return a ref that remains up-to-date', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useCurrentRef(value),
      {
        initialProps: {
          value: 'sandwiches',
        },
      }
    );

    expect(result.current).toEqual({
      current: 'sandwiches',
    });

    rerender({
      value: 'wot',
    });

    expect(result.current).toEqual({
      current: 'wot',
    });
  });
});
