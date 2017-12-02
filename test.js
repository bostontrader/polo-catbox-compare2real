const config = require('config')
const fs = require('fs')

const testerCore = async () => {

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
}

testerCore()
