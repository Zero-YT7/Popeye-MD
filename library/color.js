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

const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ USE A READ COLOR ]━━━━━━━━━━━━━━━━━//

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = { color, bgcolor }