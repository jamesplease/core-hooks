# Core Hooks

A small collection of commonly-used custom [React Hooks](https://reactjs.org/docs/hooks-intro.html).

## Motivation

I regularly find myself reusing the same custom hooks in all of my projects, so I abstracted them into a library.

This collection of hooks is intended to remain reasonably sized.

## Installation

Install using [npm](https://www.npmjs.com):

```
npm install core-hooks
```

or [yarn](https://yarnpkg.com/):

```
yarn add core-hooks
```

## Hooks

- [useOnChange](#use-on-change)
- [usePrevious](#use-previous)
- [useIsMounted](#use-is-mounted)
- [useCurrentRef](#use-current-ref)
- [useTransition](#use-transition)

### `useOnChange( callback, value, [comparator] )`

A hook that calls `callback` anytime that `value` changes. `callback` is
called with two arguments: `(currentValue, previousValue)`.

Pass a `comparator` function to customize the comparison. It is called with two values,
`currentValue` and `previousValue`. The default comparison is a strict equals (`===`).

This hook does not return any value.

```js
import { useOnChange } from 'core-hooks';

useOnChange((isVisible, wasVisible) => {
  if (isVisible && !wasVisible) {
    console.log('It just became visible.');
  }
}, isVisible);
```

### `usePrevious( value )`

This hook returns the previous value of `value`.

```js
import { usePrevious } from 'core-hooks';

const prevState = usePrevious(state);
```

> Note: if you wish to detect _when_ a value changes, then you may want to consider
> [useOnChange](#use-on-change) instead.

### `useIsMounted()`

Returns a Boolean representing whether or not the component has mounted.

```js
import { useIsMounted } from 'core-hooks';

const isMounted = useIsMounted();
```

### `useCurrentRef(value)`

Returns an up-to-date [ref](https://reactjs.org/docs/hooks-reference.html#useref) of `value`. This
is useful when you need to access `value` in side effect callbacks in your component, such as
`setTimeout`, `setInterval`, or user input events like key presses.

```js
import { useState } from 'react';
import { useCurrentRef } from 'core-hooks';

const [state, setState] = useState();
const stateRef = useCurrentRef(state);
```

### `useTransition({ shouldBeMounted, transitionDurationMs, [onEnteringTimeout] })`

A hook that allows you to create transitions between two states. Common use cases are:

- General two-state transitions (such as open and close)
- Animated mounting/unmounting of a single component

The API was designed with CSS and JS transitions in mind.

The following example demonstrates how you can use this hook for animating a component that
is being mounted.

```js
import { useTransition } from 'core-hooks';
import classnames from 'classnames';

function MyComponent({ renderChildren }) {
  const [shouldMount, useActiveClass] = useTransition({
    // A Boolean representing which state the transition is in.
    shouldBeMounted: renderChildren,
    // How long the transition between the states lasts
    transitionDurationMs: 500,
    // Pass `true` when using CSS Transitions. This creates a delay between the
    // `shouldMount` and `useActiveClass` booleans being flipped to `true`, so that
    // your mount CSS transition animates properly.
    // If you are not using CSS transitions, then you do not need to pass this option.
    onEnteringTimeout: true,
  });

  return (
    <>
      {shouldMount && (
        <div
          className={classnames('myDiv', {
            'myDiv-active': useActiveClass,
          })}>
          This div animates in and out
        </div>
      )}
    </>
  );
}
```

> Note: This can be considered a Hook replacement of the react-transition-group
> [`Transition` component](https://reactcommunity.org/react-transition-group/transition),
> but _not_ for the [`TransitionGroup` component](https://reactcommunity.org/react-transition-group/transition-group).
