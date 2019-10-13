/* Example in Node.js ES6 using request-promise */

const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/tools/price-conversion',
  qs: {
    'id': '1',
    'amount': '1',
    'convert': 'MXN'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '7ed767fc-6cb5-49f2-857b-229a51561240'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log('API call response:', response.data);
}).catch((err) => {
  console.log('API call error:', err.message);
});