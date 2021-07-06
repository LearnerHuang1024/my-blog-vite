import { createRouter, createWebHashHistory } from "vue-router";
import routes from './routes'

/**
 * 初始化路由 配置
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

/**
 * 导出路由
 */
export default router