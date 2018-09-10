const fs = require('fs')
const os = require('os');

const readFileRss = async file => {
  const urlrss = []
  const data = await fs.readFileSync(file).toString().split(os.EOL)
  for (let url of data) {
    urlrss.push({
      url,
      retry: 0
    })
  }
  return urlrss
}

module.exports = readFileRss