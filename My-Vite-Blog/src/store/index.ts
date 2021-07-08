import { createStore } from 'vuex'
import getters from './getters'
import dashboard from './modules/dashboard'
// import about from './modules/about'
const store = createStore({
  modules:{
    dashboard,
    // about
  },
  getters
})
export default store