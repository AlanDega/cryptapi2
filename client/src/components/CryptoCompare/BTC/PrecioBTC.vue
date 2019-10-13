
<template>
  <div>
      <h1>{{coins2}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
  export default {
    data() {
      return {
      }
    },
    mounted()  {

      this.$store.dispatch('loadCoins2')
    },
// axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,EOS&tsyms=MXN&api_key=07ef122416564c2ba3d7eb0ea39ede317487f06eae2252802a8d5377b6b29a68')
//   .then((response) => {
//     // handle success
//     console.log(response.data.ETH.MXN);
//     this.precio =  JSON.parse(response.data.BTC.MXN);

//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
    computed: mapState ([
          'coins2'
    ])
    }
  
</script>

<style lang="scss" scoped>

</style>




