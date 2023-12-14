import * as path from "path";

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
    port: 3010,
    open: false,
    host: '0.0.0.0',
    proxy: {
      "/visitApi": {
        target: 'https://webapi.pharmablock.com',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp('^/visitApi'), '')
      }
    }
  },
  plugins: [
    vue(),
    eslintPlugin(),
    Components({
      resolvers: [VantResolver()],
    }),
  ]
})
