const { nld, vnn, nd } = require('./cnews')
const { db } = require('./utils')

const main = async () => {
  const argUrl = process.argv.slice(2)
  if (argUrl.length) {
    switch (argUrl[0]) {
      case 'nld':
        await nld()
        break

      case 'vnn':
        const dataVnn = await vnn()
        console.log(dataVnn)
        break

      case 'nd':
        const dataNd = await nd()
        console.log(dataNd)
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
