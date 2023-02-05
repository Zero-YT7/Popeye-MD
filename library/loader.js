/* BASE ORI CREATED By Zero YT7
Follow Me On All Sosial Media
❑ My Youtube : Zero YT7
❑ My Instagram : @Zero_YT7
❑ My Github : Zero-YT7

Link Sosial Media Me
❑ Youtube : https://youtube.com/ZeroYT7
❑ Instagram : https://instagram.com/Zero_YT7
❑ Github : https://github.com/Zero-YT7

Donate Me For Support
❑ https://sociabuzz.com/ZeroYT7/tribe
*/

/* JIKA INGIN ORDER KEBUTUHAN BOT
SILAHKAN CEK DI WEBSITE SHOP SAYA
❑ https://zeroyt7.biz.id

/* BASE SCRIPT INI BARU JADI DAN MASIH FRESH
❑ SIMPLE
❑ RAPI
❑ KEREN
JIKA INGIN BELI YG FULL NO ENC / FULL FITUR
BISA LNGSUNG HUBUNGI SAYA
NO WA : 085157740529
*/

//━━━━━━━━━━━━━━━[ USE A READ API ]━━━━━━━━━━━━━━━━━//

const fs = require('fs')

//━━━━━━━━━━━━━━━[ USE A READ COLOR ]━━━━━━━━━━━━━━━━━//

const { color } = require('./color')

listcolor = ['aqua','red','blue','purple','magenta']
const randomcolor = listcolor[Math.floor(Math.random() * (listcolor.length))]

//━━━━━━━━━━━━━━━[ USE A READ LOADER ]━━━━━━━━━━━━━━━━━//

async function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

async function nocache(module, cb = () => { }) {
console.log(color(`Module`, `${randomcolor}`), color(`${module} Di Awasi Zero YT7 Awas Hati Jangan Asal Ubah`, `${randomcolor}`))
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

module.exports = { uncache, nocache }