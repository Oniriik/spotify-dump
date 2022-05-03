import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/vue/PageHome'
import PageYourDump from '@/vue/PageYourDump'
import PageFaq from '@/vue/PageFaq'
import PageContact from '@/vue/PageContact'
import { Buffer } from 'buffer';
import store from '@/store'
import spotify from '@/config/spotify'
import { initCustomFormatter } from 'vue'
const axios = require('axios').default;
const queryString = require('query-string');



var client_id = 'd64ca4429f4b41c4a1257db9ea1dc94d'
var client_secret = 'fe85a79091034c4aad34afff0423dfbe'
var redirect_uri = 'http://localhost:8080/callback/'
var scope = 'user-read-email user-follow-modify playlist-modify-public user-top-read'
var spotify_uri_prefix = 'https://accounts.spotify.com/authorize?'

const generateRandomString = (myLength) => {
  const chars =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  const randomArray = Array.from(
    { length: myLength },
    (v, k) => chars[Math.floor(Math.random() * chars.length)]
  );

  const randomString = randomArray.join("");
  return randomString;
}




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
    beforeEnter(to, from, next) {
      console.log('/yourdump')
      if (!store.getters.isReady) {
        console.log('/yourdump - missing code/token => /auth')
        next('auth')
      } else {
        console.log('/yourdump - ready => access /yourdump')
        next()
      }
    }
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
        console.log('/auth - missing code/token => signIn()')
        signIn()
      } else {
        console.log('auth ok')
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
        console.log('code')
        console.log(to.query.code)
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
    scope: 'user-read-email user-follow-modify user-follow-read user-top-read playlist-modify-public',
    redirect_uri: spotify.REDIRECT_URL,
  });
  console.log('redirect to spotify-login')
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
      console.log('token => save')
      console.log('fetching UserProfile')
      console.log('token')
      console.log(res.data)
      axios.get("https://api.spotify.com/v1/me", {
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + res.data.access_token
        }
      }).then(res => {
        console.log(res)
        store.dispatch("updateUser", res.data)
        console.log('saved_Data')
      }).then(()=>{
        axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10", {
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + res.data.access_token
        }}).then(res=>{
          console.log(res)
          store.dispatch("updateUserTop", res.data)
          console.log('saved_Top_Tracks')
        }).then(()=>{
          next({ name: 'yourdump' })
        })
      })
      
    } else {
      console.log('err auth : 1')
      next({ name: 'home' })
    }
  });
  return
}


export default createRouter({
  history: createWebHistory(),
  routes,
})