const { nld, vnn, nd, dspl } = require('./cnews')
const { db } = require('./utils')

const main = async () => {
  const argUrl = process.argv.slice(2)
  if (argUrl.length) {
    switch (argUrl[0]) {
      case 'nld':
        await nld()
        break

      case 'vnn':
        await vnn()
        break

      case 'nd':
        await nd()
        break
        
      case 'dspl':
        await nd()
        break

      default:
        console.log('no url news')
    }
  } else {
    console.log('need argument')
  }
}
// console.log(process.env.MONGODB)
// const name = process.argv.slice(2)
// if (name.length) {
//   console.log(`hello ${process.argv.slice(2)}`)
// } else {
//   console.log('Need argument')
// }

main()
