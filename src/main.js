import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

// Initialize Firebase
let config = {
  apiKey: "AIzaSyDNM6XEwdnGVPizttsWhkNNTDiIANupG0c",
  authDomain: "dev-timaskraning.firebaseapp.com",
  databaseURL: "https://dev-timaskraning.firebaseio.com/",
  projectId: "dev-timaskraning",
  storageBucket: "dev-timaskraning.appspot.com",
  messagingSenderId: "dev-timaskraning"
};

firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
