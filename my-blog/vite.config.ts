import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from "path"
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/css`;
        },
      }]
    })
  ],
  resolve:{
    extensions:['.js', '.jsx', '.ts', '.tsx', '.vue'],
    alias:{
      '@': path.resolve(__dirname, "src"),
    }
  },
  base: './',
  server: {
    host: 'localhost',
    port: 8849,
    open: true,
  } ,
  css:{
    preprocessorOptions: {
      scss: {
        //引用公共样式，使用vite搭建项目只安装sass即可，不需要安装node-sass,sass-loader
        additionalData: `@import "styles/common.scss";`
      }
    }
  }
})
