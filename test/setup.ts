/* eslint-disable no-console */
import * as warning from '../src/warning';

beforeEach(() => {
  // @ts-ignore
  if (console.error.mockRestore) {
    // @ts-ignore
    console.error.mockRestore();
  }

  // @ts-ignore
  if (console.warn.mockRestore) {
    // @ts-ignore
    console.warn.mockRestore();
  }

  // @ts-ignore
  if (warning.warning.mockRestore) {
    // @ts-ignore
    warning.warning.mockRestore();
  }

  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(warning, 'warning').mockImplementation(() => {});

  warning.resetCodeCache();
});
