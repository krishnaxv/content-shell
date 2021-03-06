// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

import pkg from './package.json';

// Globals
const globals = {
  react: 'React',
  'prop-types': 'PropTypes',
  'styled-components': 'styled',
  lodash: 'lodash'
};

// External
const external = ['react', 'prop-types', 'styled-components', 'lodash'];

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      globals
    },
    {
      file: pkg.module,
      format: 'es',
      globals
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'content-shell',
      globals
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    process.env.NODE_ENV === 'production' && uglify()
  ],
  external
};

export default config;
