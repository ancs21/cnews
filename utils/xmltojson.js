const parseString = require('xml2js').parseString

const xml2jsonPromise = xmlInput => {
  return new Promise((resolve, reject) => {
    parseString(xmlInput, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
}

const parserXmlToJson = async (nameNews, xml) => {
  const data = []
  const result = await xml2jsonPromise(xml)
  let items 
  if ('item' in result.rss.channel[0]) {
    items =  result.rss.channel[0].item
  } else {
    items = []
  }
  for (let i = 0; i < items.length; i++) {
    data.push({
      nameNews,
      title: items[i].title[0].replace(/(\r\n|\n|\r)/gm, '').trim(),
      link: items[i].link[0].replace(/(\r\n|\n|\r)/gm, '').trim(),
      pubDate: +new Date(items[i].pubDate[0])
    })
  }

  return data
}

module.exports = parserXmlToJson