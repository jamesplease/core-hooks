import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const env = process.env.NODE_ENV;

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'CoreHooks',
      file: pkg.browser,
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      resolve({
        jsnext: true,
      }),
      commonjs({}),
      babel({
        exclude: 'node_modules/**',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
    ],
  },

  {
    input: 'src/index.js',
    external: ['react'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
