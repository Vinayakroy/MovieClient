export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://9c96-183-106-239-104.ap.ngrok.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});