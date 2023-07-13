import Vue from 'vue'
import Vuex from 'vuex'
import {Login} from '../api/index'
import router from '@/router'
import * as Types from "./mutations-types";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:'', //  用户名 
    token:'', //token

  },
  getters: {
     nickName(state){
       return `OOO${state.userName}XXX`;
    }
  },
  mutations: {
     [Types.LOGIN](state,payload){ // 只有 mutations 能够修改 state 
        state.userName  = payload.name;
        state.token = payload.token;
        router.push('/home')
    }
  },
  actions: { // 处理 异步 ，想要修改 state 需要 commit 到  mutations 里面去修改 
     async [Types.LOGIN](store,payload){
      let res = await Login({
          account: payload.account,
          password:payload.password
        })
        store.commit(Types.LOGIN,res)
     }
  },
  modules: {
  }
})
