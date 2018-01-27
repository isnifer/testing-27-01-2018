const webdriverio = require('webdriverio')

const options = {
  desiredCapabilities: {
    browserName: 'chrome',
  },
}

export default webdriverio
  .remote(options)
  .init()
  .url('https://testing-27-01-2018.surge.sh')
