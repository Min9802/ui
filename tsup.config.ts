import { Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
    treeshake: true,
    splitting: true,
    entry: ["./src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    minify: true,
    clean: true,
    external: ['react'],
    outDir: "lib",
    ...options
}))