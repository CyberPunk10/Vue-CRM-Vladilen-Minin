import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)

Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyBnjjG5aM7VvE5bf3wk9v7rx83y77_mgwo',
  authDomain: 'vue-crm-21.firebaseapp.com',
  databaseURL: 'https://vue-crm-21.firebaseio.com',
  projectId: 'vue-crm-21',
  storageBucket: 'vue-crm-21.appspot.com',
  messagingSenderId: '70150830874',
  appId: '1:70150830874:web:a502b5c2802e586f8d0aa3',
  measurementId: 'G-C6CW5TKHGJ'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
