import { renderHook } from '@testing-library/react-hooks';
import { useIsMounted } from '../src';

describe('useIsMounted()', () => {
  it('should return a Boolean representing the mounted state', () => {
    const { result, rerender } = renderHook(() => useIsMounted());

    // Note: `useIsMounted` sets its internal state to `true` before this has a chance to run,
    // which is why this test doesn't see the initial `false` value.
    // Keep in mind that your application code will actually see a "flash" of `false` before
    // it becomes `true`.
    expect(result.current).toEqual(true);

    rerender();
    expect(result.current).toEqual(true);
  });
});
