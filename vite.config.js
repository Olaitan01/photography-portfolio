import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      include: ["src/**/*"],
      exclude: ["node_modules/**"],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"], // Add .jsx extension
  },
  assetsInclude: ["**/*.node"],
  optimizeDeps: {
    exclude: ["@swc/core-win32-x64-msvc"],
  },
  server: {
    historyApiFallback: true, // This ensures all routes serve the index.html
  },
});
