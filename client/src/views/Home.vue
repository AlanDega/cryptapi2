
<template>
  
    <v-tabs >
      <v-tab>
        BTC
      </v-tab>
      <v-tab>
        ETH
      </v-tab>
      <v-tab>
        EOS
      </v-tab>
      <v-container>
          <v-tab-item>
          <v-row>
              <v-col  cols="6">
  <v-card >
          <v-card-text>
            <h1>Bitso</h1>
             <PrecioBTC1/>

          </v-card-text>
        </v-card>
              </v-col>
              <v-col  cols="6">
<v-card >
          <v-card-text>
            <h1>CryptoCompare</h1>
                        <PrecioBTC2/>

          </v-card-text>
        </v-card>
              </v-col>
          </v-row>
      
      </v-tab-item>
      </v-container>
    
       <v-tab-item>
          <v-row>
              <v-col  cols="6">
  <v-card >
          <v-card-text>
            <h1>Bitso</h1>
             <PrecioBTC1/>

          </v-card-text>
        </v-card>
              </v-col>
              <v-col  cols="6">
<v-card >
          <v-card-text>
            <h1>CryptoCompare</h1>
                        <PrecioBTC2/>

          </v-card-text>
        </v-card>
              </v-col>
             
          </v-row>
    <v-container>
      <v-card> 
        <!-- <v-card-title>Si compras en {{}} y vendes en {{}} puedes ganar :</v-card-title> -->
        <v-card-text>
          <!-- {{coins - coins2}} -->
          <Calculadora />
        </v-card-text>
        <v-card-text>
        </v-card-text>
        </v-card>
    </v-container>
      </v-tab-item>
       <v-tab-item>
          <v-row>
              <v-col  cols="6">
  <v-card >
          <v-card-text>
            <h1>Bitso</h1>
             <PrecioBTC1/>

          </v-card-text>
        </v-card>
              </v-col>
              <v-col  cols="6">
<v-card >
          <v-card-text>
            <h1>CryptoCompare</h1>
            <PrecioBTC2/>

          </v-card-text>
        </v-card>
              </v-col>
          </v-row>
      
      </v-tab-item>
     
    </v-tabs>
</template>

    <script>
    import { mapState } from 'vuex'

import PrecioBTC2 from '@/components/CryptoCompare/BTC/PrecioBTC.vue'
import PrecioBTC1 from '@/components/Bitso/BTC/PrecioBTC.vue'
import Calculadora from '@/components/Calculadora/Calculadora.vue'

  export default {
    components:{
        Calculadora,
        PrecioBTC2,
        PrecioBTC1

    },
    data () {
      return {
      }
    },
     mounted () {
    this.$store.dispatch('loadCoins')
  },
     created(){
    this.$store.dispatch('loadCoins2')

     },
  computed: mapState([
    'coins',
    'coins2'
  ])
  }

  
</script>

<style >

</style>