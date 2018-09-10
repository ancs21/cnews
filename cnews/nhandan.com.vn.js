const { upDb , readFileRss} = require('../utils')
const path = require('path')
const schedule = require('node-schedule')

const config = {
  nameNews: 'Nhân dân',
  urlNews: 'nhandan.com.vn',
  file: path.join(__dirname + '/nhandan.com.vn.txt')
}

module.exports = async () => {
  schedule.scheduleJob('*/10 * * * *', async () => {
    console.log(`--> Job starting ${new Date()}`)
    const urlrss = await readFileRss(config.file)
    await upDb(config, urlrss)
    return
  })
}