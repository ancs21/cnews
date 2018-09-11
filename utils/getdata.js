const got = require('got')
const wait = require('./wait')
const parserXmlToJson = require('./xmltojson');

const getDataNews = async (nameNews, urlRSS) => {
  const timeStart = + new Date()
  let data = []
  const lenUrl = urlRSS.length
  const linkErrors = []
  while (urlRSS.length) {
    await wait(2000) // waiting 2s
    const link = urlRSS.shift()
    // console.log(link)
    try {
      const options = {
        timeout: 5000
      }
      const xmlResponse = await got(link.url, options)
      if (xmlResponse.statusCode == 200) {
        const newdata = await parserXmlToJson(nameNews , xmlResponse.body)
        if (newdata) {
          data = [...data, ...newdata]
        }
        
      }
    } catch (error) {
      if (link.retry >= 2) {
        linkErrors.push(link)
      } else {
        urlRSS.push({ ...link, retry: link.retry + 1 })
      }
      return;
    }
  }
  return {
    successRate: 1 - linkErrors.length / lenUrl,
    data,
    timeStart,
    timeEnd: + new Date()
  }
}

module.exports = getDataNews