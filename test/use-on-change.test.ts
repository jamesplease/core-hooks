import { renderHook } from '@testing-library/react-hooks';
import { useOnChange } from '../src';
import { warning } from '../src/warning';

describe('useOnChange()', () => {
  it('warns when an invalid callback is passed', () => {
    // @ts-ignore
    renderHook(({ value }) => useOnChange(value, true), {
      initialProps: {
        value: 'sandwiches',
      },
    });

    expect(warning).toHaveBeenCalledTimes(1);
    // @ts-ignore
    expect(warning.mock.calls[0][1]).toEqual('useOnChange_invalidCallback');
  });

  it('warns when an invalid comparator is passed', () => {
    // @ts-ignore
    renderHook(({ value }) => useOnChange(value, () => {}, false), {
      initialProps: {
        value: 'sandwiches',
      },
    });

    expect(warning).toHaveBeenCalledTimes(1);
    // @ts-ignore
    expect(warning.mock.calls[0][1]).toEqual('useOnChange_invalidComparator');
  });

  it('should call the callback when a primitive value changes', () => {
    const myMock = jest.fn();

    const { rerender } = renderHook(({ value }) => useOnChange(value, myMock), {
      initialProps: {
        value: 'sandwiches',
      },
    });

    expect(myMock.mock.calls.length).toBe(1);
    expect(myMock.mock.calls[0][0]).toBe('sandwiches');
    expect(myMock.mock.calls[0][1]).toBe(undefined);

    rerender({
      value: 'sandwiches',
    });
    rerender({
      value: 'sandwiches',
    });
    rerender({
      value: 'sandwiches',
    });

    expect(myMock.mock.calls.length).toBe(1);

    rerender({
      value: 'ok',
    });

    expect(myMock.mock.calls.length).toBe(2);
    expect(myMock.mock.calls[1][0]).toBe('ok');
    expect(myMock.mock.calls[1][1]).toBe('sandwiches');

    expect(warning).toHaveBeenCalledTimes(0);
  });

  it('supports a custom comparator', () => {
    const myMock = jest.fn();

    function comparator(a = {}, b = {}) {
      return a.id === b.id;
    }

    const { rerender } = renderHook(
      ({ value }) => useOnChange(value, myMock, comparator),
      {
        initialProps: {
          value: {
            id: 'a',
            attributes: {},
          },
        },
      }
    );

    expect(myMock.mock.calls.length).toBe(1);
    expect(myMock.mock.calls[0][0]).toEqual({
      id: 'a',
      attributes: {},
    });
    expect(myMock.mock.calls[0][1]).toBe(undefined);

    rerender({
      value: {
        id: 'a',
        attributes: {},
      },
    });
    rerender({
      value: {
        id: 'a',
        attributes: {},
      },
    });
    rerender({
      value: {
        id: 'a',
        attributes: {},
      },
    });

    expect(myMock.mock.calls.length).toBe(1);

    rerender({
      value: {
        id: 'b',
        attributes: {},
      },
    });

    expect(myMock.mock.calls.length).toBe(2);
    expect(myMock.mock.calls[1][0]).toEqual({
      id: 'b',
      attributes: {},
    });
    expect(myMock.mock.calls[1][1]).toEqual({
      id: 'a',
      attributes: {},
    });

    expect(warning).toHaveBeenCalledTimes(0);
  });
});
