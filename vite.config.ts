import * as path from "path";
import AutoImport from 'unplugin-auto-import/vite';
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  build: {
    outDir: process.env.VITE_OUT_PUT_NAME,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: {{port}},
    open: false,
    host: '0.0.0.0',
    proxy: {
      [""+process.env.VITE_BASE_API]: {
        target: process.env.VITE_SERVER_URL,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp('^/'+process.env.VITE_BASE_API), '')
      }
    }
  },
  plugins: [
    vue(),
    eslintPlugin(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ]
})
