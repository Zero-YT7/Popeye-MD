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

//━━━━━━━━━━━━━━━[ USE A READ MODULE ]━━━━━━━━━━━━━━━━━//

const { human, sizeFormatter } = require("human-readable")
const { proto, getContentType } = require("@adiwajshing/baileys")

//━━━━━━━━━━━━━━━[ USE A READ API ]━━━━━━━━━━━━━━━━━//

const axios = require('axios')
const chalk = require('chalk')
const fs = require('fs')
const Jimp = require('jimp')
const moment = require('moment-timezone')
const util = require('util')

//━━━━━━━━━━━━━━━[ USE A READ FUNCTION ]━━━━━━━━━━━━━━━━━//

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)

exports.unixTimestampSeconds = unixTimestampSeconds

exports.generateMessageTag = (epoch) => {
let tag = (0, exports.unixTimestampSeconds)().toString();
if (epoch)
tag += '.--' + epoch;
return tag;
}

exports.processTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

exports.getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.getBuffer = async (url, options) => {
try {
options ? options : {}
const res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (err) {
return err
}
}

exports.fetchJson = async (url, options) => {
try {
options ? options : {}
const res = await axios({
method: 'GET',
url: url,
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
},
...options
})
return res.data
} catch (err) {
return err
}
}

exports.runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.clockString = (ms) => {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

exports.sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

exports.isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

exports.getTime = (format, date) => {
if (date) {
return moment(date).locale('id').format(format)
} else {
return moment.tz('Asia/Jakarta').locale('id').format(format)
}
}

exports.formatDate = (n, locale = 'id') => {
let d = new Date(n)
return d.toLocaleDateString(locale, {
weekday: 'long',
day: 'numeric',
month: 'long',
year: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
}

exports.tanggal = (numer) => {
myMonths = ["𝖩𝖺𝗇𝗎𝖺𝗋𝗂","𝖥𝖾𝖻𝗋𝗎𝖺𝗋𝗂","𝖬𝖺𝗋𝖾𝗍","𝖠𝗉𝗋𝗂𝗅","𝖬𝖾𝗂","𝖩𝗎𝗇𝗂","𝖩𝗎𝗅𝗂","𝖠𝗀𝗎𝗌𝗍𝗎𝗌","𝖲𝖾𝗉𝗍𝖾𝗆𝖻𝖾𝗋","𝖮𝗄𝗍𝗈𝖻𝖾𝗋","𝖭𝗈𝗏𝖾𝗆𝖻𝖾𝗋","𝖣𝖾𝗌𝖾𝗆𝖻𝖾𝗋"];
myDays = ['𝖬𝗂𝗇𝗀𝗀𝗎','𝖲𝖾𝗇𝗂𝗇','𝖲𝖾𝗅𝖺𝗌𝖺','𝖱𝖺𝖻𝗎','𝖪𝖺𝗆𝗂𝗌','𝖩𝗎𝗆𝖺𝗍','𝖲𝖺𝖻𝗍𝗎']; 
var tgl = new Date(numer);
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy; 
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
return`🕦 Wib : ${moment.tz('Asia/Jakarta').format('HH : mm : ss')}\n🕧 Wita : ${moment.tz('Asia/Makassar').format('HH : mm : ss')}\n🕖 Wit : ${moment.tz('Asia/Jayapura').format('HH : mm : ss')}\n ❄️ Hari : ${thisDay}\n🗓️ Tanggal : ${day}\n🌚 Bulan : ${myMonths[bulan]}\n☕ Tahun : ${year}`
}

exports.formatp = sizeFormatter({
std: 'JEDEC', 
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.jsonformat = (string) => {
return JSON.stringify(string, null, 2)
}

function format(...args) {
return util.format(...args)
}

exports.logic = (check, inp, out) => {
if (inp.length !== out.length) throw new Error('Input and Output must have same length')
for (let i in inp)
if (util.isDeepStrictEqual(check, inp[i])) return out[i]
return null
}

exports.generateProfilePicturee = async (buffer) => {
const jimp = await Jimp.read(buffer)
const min = Jimp.getWidth()
const max = Jimp.getHeight()
const cropped = Jimp.crop(0, 0, min, max)
return {
img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
}
}

exports.generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}

exports.bytesToSize = (bytes, decimals = 2) => {
if (bytes === 0) return '0 Bytes';

const k = 1024;
const dm = decimals < 0 ? 0 : decimals;
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

const i = Math.floor(Math.log(bytes) / Math.log(k));

return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

exports.getSizeMedia = (path) => {
return new Promise((resolve, reject) => {
if (/http/.test(path)) {
axios.get(path)
.then((res) => {
let length = parseInt(res.headers['content-length'])
let size = exports.bytesToSize(length, 3)
if(!isNaN(length)) resolve(size)
})
} else if (Buffer.isBuffer(path)) {
let length = Buffer.byteLength(path)
let size = exports.bytesToSize(length, 3)
if(!isNaN(length)) resolve(size)
} else {
reject('error gatau apah')
}
})
}

exports.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

function _0x38ed(){var _0x455d94=['y\x20Zero\x20YT7','Zero\x20YT7','21086087cGywiW','529','10TuDQaR','7cJeeMB','3508945ufvlbT','8000800gSMgyJ','6285157740','3852465bdsXEK','154644SipatD','©Created\x20B','4NEWSld','packname','creator','1360798QHoaDB','3860055wuSixj','2PKcgMW'];_0x38ed=function(){return _0x455d94;};return _0x38ed();}var _0x34c9eb=_0x2aeb;function _0x2aeb(_0x555010,_0x51983b){var _0x2e169e=_0x38ed();return _0x2aeb=function(_0x447dc8,_0x5b27a4){_0x447dc8=_0x447dc8-(-0x1*0x1565+0x4*-0x742+0x33bf);var _0x6ab93e=_0x2e169e[_0x447dc8];return _0x6ab93e;},_0x2aeb(_0x555010,_0x51983b);}(function(_0x2eeba7,_0x41e3bb){var _0x106b4=_0x2aeb,_0x29f967=_0x2eeba7();while(!![]){try{var _0x18aec0=parseInt(_0x106b4(0x160))/(-0xabc+-0x9*0x335+-0x2*-0x13cd)+-parseInt(_0x106b4(0x162))/(0xdf7+0x10*-0xed+0xdb)*(parseInt(_0x106b4(0x15a))/(-0x24cd*0x1+0x6a+0x2*0x1233))+-parseInt(_0x106b4(0x15d))/(-0x1*-0x1183+0x1e60+-0x2fdf)*(parseInt(_0x106b4(0x157))/(0x7f*0x11+-0x517+0x17*-0x25))+parseInt(_0x106b4(0x15b))/(-0x6d5+0x21d0+0x43*-0x67)+-parseInt(_0x106b4(0x156))/(0x1666+-0x1*-0x1bd+-0x607*0x4)*(parseInt(_0x106b4(0x158))/(-0x8cd+0x43a+0x49b))+parseInt(_0x106b4(0x161))/(-0x144b+0x1f53+-0xaff)+-parseInt(_0x106b4(0x155))/(-0x1*0x1b5d+0xf69+0x266*0x5)*(-parseInt(_0x106b4(0x153))/(0x1de5+0x1e3d+-0x3c17));if(_0x18aec0===_0x41e3bb)break;else _0x29f967['push'](_0x29f967['shift']());}catch(_0x663978){_0x29f967['push'](_0x29f967['shift']());}}}(_0x38ed,0x94bf5*-0x1+-0x12*0xb33f+0x37*0x9af1),exports[_0x34c9eb(0x15f)]=_0x34c9eb(0x15c)+_0x34c9eb(0x163),exports[_0x34c9eb(0x15e)]=_0x34c9eb(0x152),exports['p']=_0x34c9eb(0x159)+_0x34c9eb(0x154));

exports.smsg = (zeroyt7, m, store) => {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
from = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = from.endsWith('@g.us')
m.sender = zeroyt7.decodeJid(m.fromMe && zeroyt7.user.id || m.participant || m.key.participant || from || '')
if (m.isGroup) m.participant = zeroyt7.decodeJid(m.key.participant) || ''
}
if (m.message) {
m.mtype = getContentType(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
if (m.quoted) {
let type = getContentType(quoted)
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = getContentType(m.quoted)
m.quoted = m.quoted[type]
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
m.quoted.mtype = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || from
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = zeroyt7.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === (zeroyt7.user && zeroyt7.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false
let q = await store.loadMessage(from, m.quoted.id, zeroyt7)
return exports.smsg(zeroyt7, q, store)
}
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})

m.quoted.delete = () => zeroyt7.sendMessage(m.quoted.chat, { delete: vM.key })

m.quoted.copyNForward = (jid, forceForward = false, options = {}) => zeroyt7.copyNForward(jid, vM, forceForward, options)

m.quoted.download = () => zeroyt7.downloadMediaMessage(m.quoted)
}
}
if (m.msg.url) m.download = () => zeroyt7.downloadMediaMessage(m.msg)
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''

m.reply = (text, chatId = from, options = {}) => Buffer.isBuffer(text) ? zeroyt7.sendMedia(chatId, text, 'file', '', m, { ...options }) : zeroyt7.sendText(chatId, text, m, { ...options })

m.copy = () => exports.smsg(zeroyt7, M.fromObject(M.toObject(m)))

m.copyNForward = (jid = from, forceForward = false, options = {}) => zeroyt7.copyNForward(jid, m, forceForward, options)

return m
}

exports.reSize = (buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var baper = await Jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
resolve(ab)
})
}

const _0x742fec=_0x1c58;(function(_0x429d12,_0x4284bc){const _0x1d9786=_0x1c58,_0x5cfe00=_0x429d12();while(!![]){try{const _0x10e155=-parseInt(_0x1d9786(0xa0))/(-0x26ea+0xc2e*0x1+0x1abd)+-parseInt(_0x1d9786(0xae))/(0x25d5+-0x4*-0x991+-0x97*0x81)+-parseInt(_0x1d9786(0xa7))/(-0xd4b+0x262f+0xc1*-0x21)+-parseInt(_0x1d9786(0xa1))/(-0xdeb+0x1b2a+0xd3b*-0x1)*(parseInt(_0x1d9786(0xa5))/(0x26ae+0xe*0x2bd+-0x4cff))+-parseInt(_0x1d9786(0xa2))/(-0x2176+0x1b*-0x6d+0x2cfb)*(parseInt(_0x1d9786(0xa3))/(-0x516+0x1f76+-0x1a59))+-parseInt(_0x1d9786(0xa8))/(-0x15a3+0x7ac*0x2+0x653)+parseInt(_0x1d9786(0xad))/(-0x20b8+0x89*0x35+0x464);if(_0x10e155===_0x4284bc)break;else _0x5cfe00['push'](_0x5cfe00['shift']());}catch(_0x57b7b7){_0x5cfe00['push'](_0x5cfe00['shift']());}}}(_0x2b8d,0x77b95+0x2*0x662b+-0x1d4b4));let file=require[_0x742fec(0xaa)](__filename);function _0x1c58(_0x5c803b,_0x403e4b){const _0x891e8a=_0x2b8d();return _0x1c58=function(_0x38fa5e,_0x241b5f){_0x38fa5e=_0x38fa5e-(0x901+-0x302+-0x560);let _0x56d89a=_0x891e8a[_0x38fa5e];return _0x56d89a;},_0x1c58(_0x5c803b,_0x403e4b);}function _0x2b8d(){const _0x27cf06=['931548uXIUcQ','log','cache','58236HuLvwz','16mtVeHC','2425422eanObC','7qvazcI','watchFile','170605vmzZEj','Update\x20','830868OILkrv','4320128MhgJlG','redBright','resolve','jHCZN','unwatchFil','20739726ukmriM'];_0x2b8d=function(){return _0x27cf06;};return _0x2b8d();}fs[_0x742fec(0xa4)](file,()=>{const _0x2ac978=_0x742fec,_0x20ffbf={'jHCZN':function(_0x13c858,_0x208d3e){return _0x13c858(_0x208d3e);}};fs[_0x2ac978(0xac)+'e'](file),console[_0x2ac978(0xaf)](chalk[_0x2ac978(0xa9)](_0x2ac978(0xa6)+__filename)),delete require[_0x2ac978(0x9f)][file],_0x20ffbf[_0x2ac978(0xab)](require,file);});