<template>
<v-container>
    <div v-if=" coiner >= coiner2 " >
        <h1>calc</h1>
{{coiner}}
    </div>
     <div v-if="coiner2 >= coiner ">
        <h1>calc</h1>
{{coiner2}}
    </div>
</v-container>
    
</template>

<script>
import { mapState } from 'vuex'
    export default {
        data() {
            return {
                resultado: null
            }
        },
 mounted () {
    this.$store.dispatch('loadCoins')
    this.$store.dispatch('loadCoins2')
  },       
  computed: {
      coiner(){         
 console.log('1', this.$store.state.coins);
          return this.$store.state.coins
      },
      coiner2(){ 
                         console.log('2', this.$store.state.coins2);

          return this.$store.state.coins2

      }
  }
    }
    
</script>

<style lang="scss" scoped>

</style>