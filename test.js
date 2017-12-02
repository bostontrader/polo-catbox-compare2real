const config = require('config')
const crypto = require('crypto')
const fs = require('fs')
const rp = require('request-promise-native')

const testerCore = async () => {

  const getPrivateHeaders = function (key, secret, parameters) {
    let paramString, signature
    paramString = Object.keys(parameters).map(param => encodeURIComponent(param) + '=' + encodeURIComponent(parameters[param])).join('&')
    signature = crypto.createHmac('sha512', secret).update(paramString).digest('hex')
    return {Key: key, Sign: signature}
  }

  const u = config.get('url-poloniex')
  const baseURL = u.protocol + '://' + u.host + (u.port ? ':' + u.port : '')
  const publicURL = baseURL + '/public'

  const tradingAPIOptions = {
    method: 'POST',
    url: baseURL + '/tradingApi'
  }

  const readKeyFile = async (keyFile) => {
    return new Promise( (resolve, reject) => {
      fs.readFile(keyFile, 'utf8', function(err, data) {
        if (err) throw err
        resolve(JSON.parse(data))
      })
    })
  }

  console.log('polo-keyfile:', config.get('polo-keyfile'))
  const keys = await readKeyFile(config.get('polo-keyfile'))
  console.log(keys)

  // 1. Compare trade history

  // 1.1 Polo return trade history
  const parameters = {
    command: 'returnTradeHistory', nonce: Date.now(),
    currencyPair: 'all',
    start: new Date(config.get('start')).getTime()/1000,
    end: new Date(config.get('end')).getTime()/1000
  }
  tradingAPIOptions.form = parameters
  tradingAPIOptions.headers = getPrivateHeaders(keys.apiKey, keys.secret, parameters)
  const result = rp(tradingAPIOptions)
  .then(html => { console.log('returnTradeHistory: ', html) })

  // 1.2 Pump that into the catbox
  // 1.3 polo-catbox return trade history
  // 1.4 Now compare
}

if(config.has('forReal')) testerCore()

