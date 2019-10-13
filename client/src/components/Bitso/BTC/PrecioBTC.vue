  <template>
      <div>
  <h1>{{monedasMXN}}</h1>
      </div>
  </template>
  
  <script>
    import axios from "axios";
    const options = {
  headers: {'X-Custom-Header': 'value'}
};

    export default {
        name: 'app',
        data() {
            return {
                monedasMXN: "",
                
            }
        },
        created(){
 
    //         axios({ method: "GET", "url": "https://api.bitso.com/v3/order_book/?book=btc_mxn" })
    //         .then(result => {
    //     this.monedasMXN = result.data.payload.bids[0].price;
    //     console.log(this.monedasMXN)
    // }, error => {
    //     console.error(error);
    // });
        },
      
        methods: {
             
    }
}
      
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  
  
  
  
  
  
 