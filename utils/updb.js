const db = require('./db')
const getDataNews = require('./getdata')


const upDb = async (config, urlrss) => {
  const initdb = await db()
  const dataNews = await getDataNews(config.nameNews, urlrss)
  for (let item of dataNews.data) {
    initdb
      .collection('datacnews')
      .updateOne(
        { link: item.link },
        {
          $set: {
            ...item,
            urlNews: config.urlNews,
            nameNews: config.nameNews
          },
          $inc: { count: 1 }
        },
        { upsert: true }
      )
      .then(() => {})
      .catch(error => console.log(error))
  }
  // log
  initdb
    .collection('logcnews')
    .insertOne({
      urlNews: config.urlNews,
      nameNews: config.nameNews,
      timeStart: dataNews.timeStart,
      timeEnd: +new Date(),
      successRate: dataNews.successRate
    })
    .then(() => {})
    .catch(error => console.log(error))
  console.log(`-> success rate ${dataNews.successRate}`)
  return 
}

module.exports = upDb