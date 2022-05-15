import { createRouter, createWebHistory } from 'vue-router'
import { Buffer } from 'buffer';
import store from '@/store'
import spotify from '@/config/spotify'
const axios = require('axios').default;
const queryString = require('query-string');

import PageHome from '@/vue/PageHome'
import PageYourDump from '@/vue/PageYourDump'
import PageFaq from '@/vue/PageFaq'
import PageContact from '@/vue/PageContact'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome
  },
  {
    path: '/yourdump',
    name: 'yourdump',
    component: PageYourDump,
  },
  {
    path: '/faq',
    name: 'faq',
    component: PageFaq
  },
  {
    path: '/contact',
    name: 'contact',
    component: PageContact
  },
  {
    path: '/auth',
    name: 'auth',
    beforeEnter(to, from, next) {
      if (!store.getters.isReady) {
        signIn()
        next({ name: 'yourdump' })
      }
    }
  },
  {
    path: '/callback',
    name: 'callback',
    beforeEnter(to, from, next) {
      if (to.query.code !== "" && to.query.code !== undefined) {
        store.dispatch('updateUserCode', to.query.code)
        initUser(to.query.code, next)
      } else {
        next({ name: 'auth' })
      }
    }
  }


]


function signIn() {
  let url = "https://accounts.spotify.com/authorize?" + queryString.stringify({
    response_type: 'code',
    client_id: spotify.CLIENT_ID,
    scope: 'user-follow-modify playlist-modify-public user-top-read playlist-modify-private',
    redirect_uri: spotify.REDIRECT_URL,
  });
  window.location.href = url
}

function initUser(code, next) {
  axios.post("https://accounts.spotify.com/api/token", queryString.stringify({
    code,
    redirect_uri: spotify.REDIRECT_URL,
    grant_type: 'authorization_code'
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      'Authorization': 'Basic ' + (new Buffer.from(spotify.CLIENT_ID + ':' + spotify.CLIENT_SECRET, 'utf-8').toString('base64'))
    }
  }).then(res => {
    if (res.status === 200) {
      store.dispatch("updateUserToken", res.data)
      axios.get("https://api.spotify.com/v1/me", {
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + res.data.access_token
        }
      }).then(res => {
        store.dispatch("updateUser", res.data)
      }).then(()=>{
        axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10", {
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + res.data.access_token
        }}).then(res=>{
          store.dispatch("updateUserTop", res.data)
        }).then(()=>{
          next({ name: 'yourdump' })
        })
      })
      
    } else {
      next({ name: 'home' })
    }
  });
  return
}


export default createRouter({
  history: createWebHistory(),
  routes,
})