const { proto, delay, getContentType, downloadContentFromMessage} = require('@adiwajshing/baileys')
const chalk = require('chalk')
const fs = require('fs')
const Crypto = require('crypto')
const axios = require('axios')
const moment = require('moment-timezone')
const { sizeFormatter } = require('human-readable')
const util = require('util')
const Jimp = require('jimp')
const { defaultMaxListeners } = require('stream')

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)

exports.unixTimestampSeconds = unixTimestampSeconds

exports.generateMessageTag = (epoch) => {
let tag = (0, exports.unixTimestampSeconds)().toString();
if (epoch)
tag += '.--' + epoch; // attach epoch if provided
return tag;
}

exports.processTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

exports.getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
exports.UserAgent = () => {
const UA = [
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
"Mozilla/5.0 (X11; Datanyze; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/E7FBAF",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063",
"Mozilla/5.0 (X11; Linux x86_64; rv:45.0) Gecko/20100101 Firefox/45.0",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:47.0) Gecko/20100101 Firefox/47.0",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/601.2.7 (KHTML, like Gecko) Version/9.0.1 Safari/601.2.7",
"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36",
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
"Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:47.0) Gecko/20100101 Firefox/47.0",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 (KHTML, like Gecko) Version/9.1.2 Safari/601.7.7",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36",
];
const res = UA[~~(Math.random() * UA.length)];
return res;
};
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
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
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
exports.isUrltiktok = (url) => {
return url.match(new RegExp(/https:?\/\/.+\.tiktok.+/g)) 
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
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
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
				
return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

exports.formatp = sizeFormatter({
std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
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

function _0x3768(){var _0x574722=['author','588530vJNYSo','Zero\x20YT7','creator','Created\x20By','14328CSGdCg','4063619rTjNIK','18628IFdcRh','\x20Zero\x20YT7','187UxHKMd','3485568uMomvi','5698584dTtXVS','3298oYYTXs','7479aYkvFy','547HIXASx','packname','485YlTnWP'];_0x3768=function(){return _0x574722;};return _0x3768();}function _0x3a3f(_0x430150,_0x56a565){var _0xfb9d55=_0x3768();return _0x3a3f=function(_0x1e8397,_0x456a5f){_0x1e8397=_0x1e8397-(0xc*-0x187+-0xe0c+0x2137);var _0x4c2ad2=_0xfb9d55[_0x1e8397];return _0x4c2ad2;},_0x3a3f(_0x430150,_0x56a565);}var _0x1f8b49=_0x3a3f;(function(_0x2344ad,_0x813cf2){var _0x264b68=_0x3a3f,_0x250d57=_0x2344ad();while(!![]){try{var _0x455bcd=-parseInt(_0x264b68(0xdd))/(-0x68*-0x35+-0x4b5*-0x1+-0x1a3c)*(-parseInt(_0x264b68(0xdb))/(0x1503+0x10cb*-0x1+-0x2*0x21b))+parseInt(_0x264b68(0xd9))/(0x693+0x1ef7+-0x2587)+-parseInt(_0x264b68(0xe7))/(0x2*0x6a+-0x1d2+-0x2b*-0x6)*(parseInt(_0x264b68(0xdf))/(0x125+0xffa*-0x1+-0x76d*-0x2))+-parseInt(_0x264b68(0xda))/(-0x1*0x21d+-0x268+0x48b)+parseInt(_0x264b68(0xe6))/(-0x4a6+0x1e5b+0x13*-0x15a)+-parseInt(_0x264b68(0xe5))/(0xca+0xe*0x217+0x1*-0x1e04)*(parseInt(_0x264b68(0xdc))/(-0x92b+0x20ab*0x1+-0x1777))+-parseInt(_0x264b68(0xe1))/(-0xbc8+0x2*-0x136+-0x2*-0x71f)*(-parseInt(_0x264b68(0xd8))/(-0x235d+0xab6+0x18b2));if(_0x455bcd===_0x813cf2)break;else _0x250d57['push'](_0x250d57['shift']());}catch(_0x138edc){_0x250d57['push'](_0x250d57['shift']());}}}(_0x3768,0x1*-0xb33f2+-0x5e811+0x1ca17a),exports[_0x1f8b49(0xe3)]=_0x1f8b49(0xe4)+_0x1f8b49(0xd7),exports[_0x1f8b49(0xde)]=_0x1f8b49(0xe2),exports[_0x1f8b49(0xe0)]=_0x1f8b49(0xe2));

exports.logic = (check, inp, out) => {
if (inp.length !== out.length) throw new Error('Input and Output must have same length')
for (let i in inp)
if (util.isDeepStrictEqual(check, inp[i])) return out[i]
return null
}

exports.generateProfilePicture = async (buffer) => {
const jimp = await Jimp.read(buffer)
const min = jimp.getWidth()
const max = jimp.getHeight()
const cropped = jimp.crop(0, 0, min, max)
return {
img: await cropped.scaleToFit(720, 300).getBufferAsync(Jimp.MIME_JPEG),
preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
}
}
exports.updateProfilePicture = async (buffer) => {
const jimp = await Jimp.read(buffer)
const min = jimp.getWidth()
const max = jimp.getHeight()
const cropped = jimp.crop(0, 0, min, max)
return {
img: await cropped.scaleToFit(720, 300).getBufferAsync(Jimp.MIME_JPEG),
preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
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

exports.smsg = (conn, m, store) => {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
from = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = from.endsWith('@g.us')
m.sender = conn.decodeJid(m.fromMe && conn.user.id || m.participant || m.key.participant || from || '')
if (m.isGroup) m.participant = conn.decodeJid(m.key.participant) || ''
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
m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === (conn.user && conn.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false
let q = await store.loadMessage(from, m.quoted.id, conn)
return exports.smsg(conn, q, store)
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

m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })

m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options)

m.quoted.download = () => conn.downloadMediaMessage(m.quoted)
}
}
if (m.msg.url) m.download = () => conn.downloadMediaMessage(m.msg)
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''

m.reply = (text, chatId = from, options = {}) => Buffer.isBuffer(text) ? conn.sendMedia(chatId, text, 'file', '', m, { ...options }) : conn.sendText(chatId, text, m, { ...options })

m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))

m.copyNForward = (jid = from, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)

return m
}
exports.reSize = (buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var baper = await Jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
resolve(ab)
})
}

function _0x33f5(_0x317f63,_0xa5be7a){const _0x4f8f98=_0x94d4();return _0x33f5=function(_0x4f6bbd,_0x906ab6){_0x4f6bbd=_0x4f6bbd-(0xc84+-0x1f0*0x5+-0x1e5);let _0x1c55f5=_0x4f8f98[_0x4f6bbd];return _0x1c55f5;},_0x33f5(_0x317f63,_0xa5be7a);}function _0x94d4(){const _0x3a30b6=['watchFile','unwatchFil','926481VYxxnQ','79812QxhNng','pvyMm','741952vwgnRB','pink','76uGytmj','176BipSJN','11aPERlO','log','resolve','Update','\x20Telah\x20Di\x20','229170kIiGgU','1676820wnVVvb','646OKlmrb','5drjNzj','1412656fibAJe','cache'];_0x94d4=function(){return _0x3a30b6;};return _0x94d4();}const _0x3c1e8c=_0x33f5;(function(_0x443373,_0x3ce881){const _0x2f36db=_0x33f5,_0x55b8a0=_0x443373();while(!![]){try{const _0x2055b0=parseInt(_0x2f36db(0xfa))/(-0x25*0xed+0x25a+0x1fe8)*(-parseInt(_0x2f36db(0xf1))/(-0x12e7*-0x1+-0xaf0+-0x15*0x61))+-parseInt(_0x2f36db(0x100))/(-0x38d*-0x8+0xa1+-0x1d06)+-parseInt(_0x2f36db(0xef))/(-0x66b+0x1ff8+-0x1989)+-parseInt(_0x2f36db(0xfb))/(0x1ee+-0x3*-0x713+-0x1722)*(-parseInt(_0x2f36db(0xf9))/(-0x1d04+0x1331+0x9d9*0x1))+parseInt(_0x2f36db(0xfc))/(-0x5*0x656+-0x56*-0x4d+0x5d7)+-parseInt(_0x2f36db(0xf2))/(0x5*0x2c2+0x839*-0x1+-0x589)*(-parseInt(_0x2f36db(0x101))/(0x17*0xd1+0x755+0x1a13*-0x1))+-parseInt(_0x2f36db(0xf8))/(-0xdf*0x5+-0x1*-0x1a35+-0x2ba*0x8)*(-parseInt(_0x2f36db(0xf3))/(0xd91+-0x1*-0x10b1+-0x1c7*0x11));if(_0x2055b0===_0x3ce881)break;else _0x55b8a0['push'](_0x55b8a0['shift']());}catch(_0x4130fc){_0x55b8a0['push'](_0x55b8a0['shift']());}}}(_0x94d4,0x17ff5*-0x2+-0x36ba+0x2fbb8*0x2));let file=require[_0x3c1e8c(0xf5)](__filename);fs[_0x3c1e8c(0xfe)](file,()=>{const _0x5280ba=_0x3c1e8c,_0x4bfc1b={'pvyMm':function(_0x1add2b,_0x139f6e){return _0x1add2b(_0x139f6e);}};fs[_0x5280ba(0xff)+'e'](file),console[_0x5280ba(0xf4)](chalk[_0x5280ba(0xf0)](__filename+(_0x5280ba(0xf7)+_0x5280ba(0xf6)))),delete require[_0x5280ba(0xfd)][file],_0x4bfc1b[_0x5280ba(0x102)](require,file);});