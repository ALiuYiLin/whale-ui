import { rollup } from "rollup";
// import vue from "rollup-plugin-vue";
import vue from '@vitejs/plugin-vue'

import glob from "fast-glob";
import esbuild from 'rollup-plugin-esbuild'
import { componentsDir, distWhaleUiDir } from "build/utils";

export async function buildComponents() {
  const files = await glob("**/*.{js,ts,vue}", {
    cwd: componentsDir,
    absolute: true
  });
  const bundle = await rollup({
    input: files,
    plugins: [
      vue(),
      esbuild()
    ],
    external: ["vue"],
  });
  await bundle.write({
    entryFileNames: '[name].js',
    dir: distWhaleUiDir,
    preserveModules: true,
    format: "es",
    sourcemap: true,
  });
}
