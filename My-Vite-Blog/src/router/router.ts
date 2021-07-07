import { RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw[] = []
//模块化导入router，适合模块化开发，但是可能不好做权限配置
const routesModules  = import.meta.globEager('../pages/**/router.ts')
Object.keys(routesModules).forEach((path,i)=>{
  routes.push(...routesModules[path].default)
})

export default routes