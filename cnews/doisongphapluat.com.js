
const { upDb , readFileRss} = require('../utils')
const path = require('path')
const schedule = require('node-schedule')

const config = {
  nameNews: 'Đời sống pháp luật',
  urlNews: 'doisongphapluat.com',
  file: path.join(__dirname + '/doisongphapluat.com.txt')
}

module.exports = async () => {
  schedule.scheduleJob('* * * * *', async () => {
    console.log(`--> Job starting ${new Date()}`)
    const urlrss = await readFileRss(config.file)
    await upDb(config, urlrss)
    return
  })
}
