import { renderHook } from '@testing-library/react-hooks';
import { useLatestRef } from '../src';

describe('useLatestRef()', () => {
  it('should return a ref that remains up-to-date', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useLatestRef(value),
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
