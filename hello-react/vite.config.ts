import { defineConfig, loadEnv } from 'vite'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env: Partial<ImportMeta> = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      react(),
      UnoCSS({
        configFile: './uno.config.ts'
      })
    ],
    define: {
      'process.env': env
    },
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: '/src/'
        }
      ]
    },
    server: {
      hmr: true,
      open: true
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true,
        },
      },
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        }
      }
    },
  })
}
