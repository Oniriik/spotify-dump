import { createStore } from 'vuex'
import axios from 'axios'
import spotify from '@/config/spotify'
const queryString = require('query-string');
import { Buffer } from 'buffer';
import createPersistedState from "vuex-persistedstate";

export default createStore({
    // plugins: [createPersistedState()],
    state: {
        currentPage: 0,
        user:{
            code: null,
            token: null,
            data:{}
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user.code && state.user.token !== null
          },
        isReady(state) {
            return state.user.code !== null
          },
          getCode(state) {
            return state.user.code
          },
          getToken(state) {
            return state.user.token?.access_token
          },
    },
    actions: {
        updateCurrentPage({ commit }, page) {
            commit('updateCurrentPage', page)
        },
        updateUserCode({ commit }, code) {
          commit('updateUserCode', code)
        },
        updateUserToken({ commit }, token) {
          commit('updateUserToken', token)
        },
        updateUser({ commit }, data) {
          commit('updateUser', data)
        },
        updateUserTop({ commit }, data) {
          commit('updateUserTop', data)
        },
        clearState({ commit }){
          commit('clearState')
        }

    },
    mutations: {
        updateCurrentPage(state, page) {
            this.state.currentPage = page
        },
        updateUserCode(state,value) {
            this.state.user.code = value
        },
        updateUserToken(state,value) {
            this.state.user.token = value
        },
        updateUser(state, data) {
          state.user.data = data
        },
        updateUserTop(state, data) {
          state.user.data.top_tracks = data
        },
        clearState(state) {
            state.user = {
              code: null,
              token: null,
              data:{}
            }
        },
        
        
    }
})
