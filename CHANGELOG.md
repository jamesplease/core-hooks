### v2.0.0 (2021/12/10)

- `useCurrentRef` has been renamed to `useLatestRef`
- Improved types for `useMountTransition`
- Improved (breaking) API changes for `useMountTransition`
  - New callbacks: `onEntering` and `onLeaving`
  - The returned value is now an object, and not an an array
  - The returned value now includes `mountedState`, which represents the current state of the
    transition.

### v1.2.0 (2021/4/23)

- Add React 17 to peer dependencies

### v1.1.0 (2020/7/14)

- Introduce `useConstant`

### v1.0.1 (2020/5/30)

- Fix exported types

### v1.0.0 (2020/5/29)

- Library converted to TypeScript
- `useMountTransition` now accepts more options
- Renamed `useTransition` to `useMountTransition`

### v0.0.4 (2019/5/25)

- Update distribution files for different environments.

### v0.0.3 (2019/5/25)

- Fix main file.

### v0.0.2 (2019/5/25)

- Initial release.