import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'

const store = createStore({
  getters,
  // 状态持久化
  plugins: [createPersistedState(
    {
      storage: window.sessionStorage,
      reducer(val) {
        return {

        }
      }
    }
  )]
})
export default store
