const db = require('./db')
const parserXmlToJson = require('./xmltojson')
const wait = require('./wait')
const getDataNews = require('./getdata');
const upDb = require('./updb');
const readFileRss = require('./readfilerss');

module.exports = {
  db,
  upDb,
  wait,
  getDataNews,
  readFileRss,
  parserXmlToJson,
}