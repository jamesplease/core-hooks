import { renderHook } from 'react-hooks-testing-library';
import { usePrevious } from '../src';

describe('usePrevious()', () => {
  it('should return a ref that always lags one behind an update', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: {
        value: 'sandwiches',
      },
    });

    expect(result.current).toEqual(undefined);

    rerender({
      value: 'wot',
    });

    expect(result.current).toEqual('sandwiches');

    rerender({
      value: 'ok',
    });

    expect(result.current).toEqual('wot');

    rerender({
      value: 'ok',
    });

    expect(result.current).toEqual('ok');
  });
});
