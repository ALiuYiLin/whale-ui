import { rollup } from "rollup";
import vue from '@vitejs/plugin-vue'
import glob from "fast-glob";
import esbuild from 'rollup-plugin-esbuild'
import { copyFile } from "fs/promises";
import scss from 'rollup-plugin-scss';

export async function copyFiles() {
  copyFile('packages/package.json','dist/whale-ui/es/package.json')
}

export async function buildComponents() {
  const files = await glob("**/*.{js,ts,vue}", {
    cwd: "packages",
    absolute: true
  });
  const bundle = await rollup({
    input: files,
    plugins: [
      vue(),
      scss({
        // outputStyle:'compressed',
        fileName:'index.css',
        sourceMap: true
      }),
      esbuild()
    ],
    external: ["vue"],

  });
  await bundle.write({
    entryFileNames: '[name].js',
    dir:'dist/whale-ui/es',
    preserveModules: true,
    format: "es",
    sourcemap: true,
  });
}

export async function buildMain(){
  await buildComponents()
  await copyFiles()
}

buildMain()