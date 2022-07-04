import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy-assets';
import { visualizer } from 'rollup-plugin-visualizer';
import analyze from 'rollup-plugin-analyzer';
import packageJson from './package.json';

export default [{
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ['./lib'],
    }),
    peerDepsExternal(),
    copy({
      assets: [
        // You can include directories with the `copy` plugin
        'assets',
        'themes',
        'index.css',
      ],
    }),
    resolve({ preferBuiltins: false }),
    commonjs(),
    typescript({
      tsconfigOverride: {
        exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      },
    }),
    postcss(),
    analyze({
      summaryOnly: true,
    }),
    visualizer({
      title: 'heller-ui dep graph',
      filename: 'stats/heller-ui-dep-stats.html',
      open: false,
      template: 'sunburst',
    }),
  ],
}];
