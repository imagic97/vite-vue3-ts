import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: 'always',
      },
    },
  },
  server: {
    port: 4233,
    hmr: {
      host: '127.0.0.1',
      port: 4233,
    },
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 'xxx': ['./xxx/xxx1', './xxx/xxx2', './xxx/xxx3'],
          // lodash: ['lodash']
        },
      },
    },
  },
});
