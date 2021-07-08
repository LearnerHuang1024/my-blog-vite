import {Commit } from 'vuex'

export interface dashboardState {
  count: number
}
const state: dashboardState ={
    count:0
}
const mutations = {
  INCREMENT:(state:dashboardState)=>{
    state.count++
  }
}
const actions = {
  increment(context: { commit: Commit, state: dashboardState }){
    context.commit('INCREMENT')
  }
}


export default {
  namespaced:true,
  state,
  mutations,
  actions
}