import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    result: 0,
   coins: "",
   coins2: ""

  },
  mutations: {
    SET_COINS (state, coins) {
      
      state.coins = coins

    },
    SET_COINS2 (state, coins2) {
      state.coins2 = coins2
    },

  },
  actions: {
    loadCoins ({ commit }) {
      axios
      .get("https://api.bitso.com/v3/order_book/?book=btc_mxn")
      .then(response => 
         response.data.payload.bids[0].price
      )
      .then( coins => {
        // if(coins2) {
        //   console.log(coins2)
        // }
        // else{
        //   console.log('no has state')
        // }
      commit ('SET_COINS', coins)
    })
    },

    loadCoins2 ({ commit }) {
      axios
      .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,EOS&tsyms=MXN&api_key=07ef122416564c2ba3d7eb0ea39ede317487f06eae2252802a8d5377b6b29a68')
      .then(result => 
          result.data.BTC.MXN
            )
      .then( coins2 => {
      commit ('SET_COINS2', coins2)
    })
    },

    // calcular(){
    //   console.log('calc', coins)
    // }
  },
  

  getters: {
    // axios.get(...)
    // .then((response) => {
    //   return axios.get(...); // using response.data
    // })
    // .then((response) => {
    //   console.log('Response', response);
    // });
  }
})

// .then(response => {
      //     return axios.get("https://api.bitso.com/v3/order_book/?book=btc_mxn")
      //   })
      //   .then((response) => {
      //     console.log('Response', response)
      //   })
    