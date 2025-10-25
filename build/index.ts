import { rollup } from "rollup";
import vue from "rollup-plugin-vue";
import glob from "fast-glob";
import esbuild from 'rollup-plugin-esbuild'



export async function buildComponents() {
  const files = await glob("**/*.{js,ts,vue}", {
    cwd: "packages/components",
    absolute: true
  });
  console.log('files: ', files);
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
    dir:'packages/components/dist',
    preserveModules: true,
    format: "es",
    sourcemap: true,
  });
}
buildComponents();
