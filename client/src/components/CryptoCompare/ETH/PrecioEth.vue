
<template>
  <div>
      <h1>{{precio}}</h1>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        precio: null
      }
    },
    mounted()  {
axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,EOS&tsyms=MXN&api_key=07ef122416564c2ba3d7eb0ea39ede317487f06eae2252802a8d5377b6b29a68')
  .then((response) => {
    // handle success
    console.log(response.data.ETH.MXN);
    this.precio =  JSON.parse(response.data.ETH.MXN);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

    }
  }
</script>

<style lang="scss" scoped>

</style>




