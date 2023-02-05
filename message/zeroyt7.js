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

//━━━━━━━━━━━━━━━[ USE A READ SETTING ]━━━━━━━━━━━━━━━━━//

require('../options/setting')
require('../options/mess')

//━━━━━━━━━━━━━━━[ USE A READ MODULE ]━━━━━━━━━━━━━━━━━//

var { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys")
var { cheerio } = require("cheerio")
var { exec, spawn, execSync } = require('child_process')
var { EmojiAPI } = require("emoji-api")
var { cookie } = require("cookie")
var { FormData } = require("form-data")
var { syntaxerror } = require("syntax-error")

//━━━━━━━━━━━━━━━[ USE A READ API ]━━━━━━━━━━━━━━━━━//

var axios = require('axios')
var chalk = require('chalk')
var crypto = require('crypto')
var emoji = new EmojiAPI()
var FileType = require('file-type')
var fetch = require('node-fetch')
var fs = require('fs')
var fsx = require('fs-extra')
var ffmpeg = require('fluent-ffmpeg')
var Jimp = require('jimp')
var moment = require('moment-timezone')
var ms = require("ms")
var PhoneNumber = require('awesome-phonenumber')
var process = require('process')
var speed = require('performance-now')
var util = require('util')

//━━━━━━━━━━━━━━━[ USE A READ LIBRARY ]━━━━━━━━━━━━━━━━━//

var { clockString, tanggal, getTime, isUrl, sleep, runtime, fetchJson, packname, creator, p, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('../library/myfunc')
var { color, bgcolor } = require('../library/color')

//━━━━━━━━━━━━━━━[ USE A READ DATABASE ]━━━━━━━━━━━━━━━━━//

var antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
var db_menfes = JSON.parse(fs.readFileSync('./database/menfess.json'))
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

//━━━━━━━━━━━━━━━[ USE A READ IMAGE ]━━━━━━━━━━━━━━━━━//

var thumbnail = fs.readFileSync('./image/zeroyt7.jpg')

//━━━━━━━━━━━━━━━[ USE A READ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, m, chatUpdate, store) => {
try {
var { type, quotedMsg, mentioned, now, fromMe } = m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
var chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
var pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
var messagesC = pes.slice(0).trim()
var content = JSON.stringify(m.message)
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var botNumber = await zeroyt7.decodeJid(zeroyt7.user.id)
var itsMezeroyt7 = [botNumber, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var itsMe = m.sender == botNumber ? true : false
var text = q = args.join(" ")
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
var jam = moment.tz('asia/jakarta').format('HH:mm:ss')
var dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
var isMedia = /image|video|sticker|audio/.test(mime)
var isImage = (type == 'imageMessage')
var isVideo = (type == 'videoMessage')
var isAudio = (type == 'audioMessage')
var isSticker = (type == 'stickerMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
var isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
var sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
var senderNumber = sender.split('@')[0]
var isAntilink = m.isGroup ? antilink.includes(from) : false
var groupMetadata = m.isGroup ? await zeroyt7.groupMetadata(from).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
var groupOwner = m.isGroup ? groupMetadata.owner : ''
var groupMembers = m.isGroup ? groupMetadata.participants : ''
var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
var isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
var mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
var mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
var numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
var usernya = mentionByReply ? mentionByReply : mentionByTag[0]
var Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false

//━━━━━━━━━━━━━━━[ USE A READ PUBLIC ]━━━━━━━━━━━━━━━━━//

if (!zeroyt7.public) {
if (!m.key.fromMe) return
}

//━━━━━━━━━━━━━━━[ USE A READ COLOR ]━━━━━━━━━━━━━━━━━//

var listcolor = ['red','green','yellow','blue','magenta','cyan','white']
var randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

//━━━━━━━━━━━━━━━[ USE A READ CONSOLE MESSAGE ]━━━━━━━━━━━━━━━━━//

var _0x2fd06b=_0x505e;(function(_0x13672d,_0x68ac1c){var _0x4c3757=_0x505e,_0x3c1366=_0x13672d();while(!![]){try{var _0x3f53a3=parseInt(_0x4c3757(0xae))/(-0x212a+0xeaa+-0x3*-0x62b)+parseInt(_0x4c3757(0xb0))/(-0xc63+-0x103f+0x34*0x8d)*(-parseInt(_0x4c3757(0xbf))/(0x1*0x3ad+-0x1905+-0x4d*-0x47))+parseInt(_0x4c3757(0xc0))/(-0x85f+-0x16b4+0x1f17)*(-parseInt(_0x4c3757(0xbd))/(-0x270d*-0x1+0x1930+-0x807*0x8))+-parseInt(_0x4c3757(0xb9))/(-0x1931*0x1+-0x8*0x362+-0x9*-0x5cf)+parseInt(_0x4c3757(0xb6))/(-0x7ba+0x16c9+-0xf08)*(-parseInt(_0x4c3757(0xc2))/(0x2*-0x6bb+-0xa1+0x5*0x2d3))+parseInt(_0x4c3757(0xbe))/(0xd23+0x25*0xda+-0x2c9c)+parseInt(_0x4c3757(0xb4))/(0x1674*-0x1+-0x11*-0x7+-0x1*-0x1607);if(_0x3f53a3===_0x68ac1c)break;else _0x3c1366['push'](_0x3c1366['shift']());}catch(_0xca9fa4){_0x3c1366['push'](_0x3c1366['shift']());}}}(_0x1d20,-0x3df24*0x2+0x573f4+0x667a9));isCmd&&console[_0x2fd06b(0xb1)](chalk[_0x2fd06b(0xba)][_0x2fd06b(0xb2)][_0x2fd06b(0xaf)](_0x2fd06b(0xb3)),color(_0x2fd06b(0xbb),''+randomcolor),color(_0x2fd06b(0xb7),''+randomcolor),color(''+pushname,''+randomcolor),color(_0x2fd06b(0xb8),''+randomcolor),color(''+body,''+randomcolor));function _0x505e(_0x36bcf3,_0x4684f2){var _0x532042=_0x1d20();return _0x505e=function(_0x3e5b25,_0x2cf8b8){_0x3e5b25=_0x3e5b25-(0x1b22+-0x1*0x19cb+-0xa9);var _0x11fc20=_0x532042[_0x3e5b25];return _0x11fc20;},_0x505e(_0x36bcf3,_0x4684f2);}function _0x1d20(){var _0x3ee3e3=['log','bgCyan','Zero\x20YT7','2387690sonicZ','unavailabl','2093bxKtYb','FROM','Text\x20:','1773906SZTSFu','yellow','[\x20PESAN\x20]','sendPresen','5SXuiuJ','4225707XQCkKY','588753lhoVFy','121868tTFggI','ceUpdate','5088anEQCw','273894sMyCXS','bold','2UpJbRY'];_0x1d20=function(){return _0x3ee3e3;};return _0x1d20();}zeroyt7[_0x2fd06b(0xbc)+_0x2fd06b(0xc1)](_0x2fd06b(0xb5)+'e',from);

//━━━━━━━━━━━━━━━[ USE A READ AUTO BLOCK NO LUAR NEGRI ]━━━━━━━━━━━━━━━━━//

var _0x461458=_0x4a53;(function(_0x3d40dd,_0x1e55d9){var _0x5151e=_0x4a53,_0x103ecf=_0x3d40dd();while(!![]){try{var _0x726783=-parseInt(_0x5151e(0x157))/(-0x20c6*0x1+0x5*-0x683+-0x1*-0x4156)+parseInt(_0x5151e(0x15a))/(0x11*-0x119+-0xd3*0x19+0x2*0x13a3)+-parseInt(_0x5151e(0x156))/(0x527+0x95*0x16+-0x8f9*0x2)+-parseInt(_0x5151e(0x15d))/(0x10b4+0x27c+-0x132c)+parseInt(_0x5151e(0x15c))/(0x1*0x1867+-0x1f66+0x704)*(parseInt(_0x5151e(0x15b))/(-0x7c7*0x3+-0x525+0x1c80))+parseInt(_0x5151e(0x15f))/(-0x15*0xb7+-0x103e+0x1f48)*(parseInt(_0x5151e(0x158))/(-0x29*-0x9d+-0x1fa8+-0x5*-0x14f))+parseInt(_0x5151e(0x15e))/(-0x2*-0xc97+-0x4bb+0x367*-0x6);if(_0x726783===_0x1e55d9)break;else _0x103ecf['push'](_0x103ecf['shift']());}catch(_0x3079be){_0x103ecf['push'](_0x103ecf['shift']());}}}(_0x4858,-0x2*-0x31723+-0xe482d*-0x1+-0xb94e8));function _0x4a53(_0x3c54b9,_0x4505e4){var _0x470af5=_0x4858();return _0x4a53=function(_0xa22690,_0x2c2ab5){_0xa22690=_0xa22690-(0x9a3*0x3+-0x1d73+0x1dc);var _0x5992d3=_0x470af5[_0xa22690];return _0x5992d3;},_0x4a53(_0x3c54b9,_0x4505e4);}if(sender[_0x461458(0x153)](_0x461458(0x155)))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('91'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));function _0x4858(){var _0xf514f7=['updateBloc','startsWith','block','212','1344417sZCxuw','1137942XYNuRD','568YGAhLG','kStatus','651512xOClkO','42FHAqvb','609760ULZrJi','3736288MMyKYi','9754416uzcVta','82712DtZTfi'];_0x4858=function(){return _0xf514f7;};return _0x4858();}if(sender[_0x461458(0x153)]('92'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('90'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('54'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('55'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('40'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('94'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));if(sender[_0x461458(0x153)]('60'))return zeroyt7[_0x461458(0x152)+_0x461458(0x159)](sender,_0x461458(0x154));

//━━━━━━━━━━━━━━━[ USE A READ SEND MESSAGE ]━━━━━━━━━━━━━━━━━//

async function sendzeroyt7Message(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await zeroyt7.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

var sendSticker = (pesan) => {
zeroyt7.sendImageAsSticker(from, pesan, m, { packname: packname, author: global.author })
}

//━━━━━━━━━━━━━━━[ USE A READ PROFILE USER ]━━━━━━━━━━━━━━━━━//

try {
ppuser = await zeroyt7.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await reSize(ppuser, 300, 300)

//━━━━━━━━━━━━━━━[ USE A READ ANTILINK ]━━━━━━━━━━━━━━━━━//

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${wib} WIB\n└ *Message* : ${m.mtype}`
zeroyt7.sendMessage(from, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(from, true, {readViewOnce: true}, {quoted: m}).catch(_ => reply('Mungkin Dah Pernah Dibuka Bot'))
}

if (isAntilink) {
if (!isBotAdmins) return
if (budy.includes(`https://chat.whatsapp.com/`)) {
bvl = `*GROUP LINK DETECTOR*\n\nAdmin Telah Mengirim Link, Admin Tidak Akan Dikick`
if (isAdmins) m.reply(bvl)
if (m.key.fromMe) m.reply(bvl)
if (itsMezeroyt7) m.reply(bvl)
kice = m.sender
zeroyt7.sendMessage(from, {text:`*GROUP LINK DETECTOR*\n\n@${kice.split("@")[0]} Akan Dikick Karena Mengirim Link Di Group Ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
setTimeout( () => {
zeroyt7.groupParticipantsUpdate(from, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}, 3000)
} else {
}
}

//━━━━━━━━━━━━━━━[ USE A READ REPLY ]━━━━━━━━━━━━━━━━━//

var reply = (teks) => {
zeroyt7.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

var ftroli = {
key: {
fromMe: false,
"participant":"0@s.whatsapp.net", 
"remoteJid": "status@broadcast"},
"message": {
orderMessage: {
itemCount: 2022,status: 200, 
thumbnail: (thumbnail), 
surface: 200, 
message: creator, 
orderTitle: creator, 
sellerJid: '6285157740529@s.whatsapp.net'}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded":true},
sendEphemeral: true}

//━━━━━━━━━━━━━━━[ USE A READ AUTO READ MESSAGE ]━━━━━━━━━━━━━━━━━//

let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];

if (command) {
zeroyt7.sendPresenceUpdate(jd, from)
zeroyt7.readMessages([m.key])
}

//━━━━━━━━━━━━━━━[ USE A READ USER ]━━━━━━━━━━━━━━━━━//

var cekPesan = (satu, dua) => { 
let x2 = false
Object.keys(db_menfes).forEach((i) => {
if (db_menfes[i].id == dua){x2 = i}})
if (x2 !== false) {
if (satu == "id"){ return db_menfes[x2].id }
if (satu == "teman"){ return db_menfes[x2].teman }
}
if (x2 == false) { return null } 
}

//━━━━━━━━━━━━━━━[ USE A READ SPEED ]━━━━━━━━━━━━━━━━━//

var timestamp = speed()
var latensi = speed() - timestamp

//━━━━━━━━━━━━━━━[ USE A READ COMMAND ]━━━━━━━━━━━━━━━━━//

switch (command) {
case 'menu': {
teks = `┌── ⌜ *_INFORMATION_* ⌟
├❒ *_${botName}*_
├❒ Owner : ${ownerName}
├❒ Date : ${dt}
├❒ Waktu : ${jam} WIB
├❒ Prefix : ⌜ MULTI PREFIX ⌟
└───────
┌── ⌜ *_STATUS BOT_* ⌟
├❒ Creator : Zero YT7
├❒ Runtime : ${runtime(process.uptime())}
├❒ Baileys : Multi Device
├❒ Speed : ${latensi.toFixed(4)} _Second_
└───────
┌── ⌜ *_STATUS USER_* ⌟
├❒ Name : ${pushname}
├❒ Number : @${sender.split("@")[0]}
├❒ Status : ${itsMezeroyt7 ? 'Owner' : 'User'}
└───────`
var _0x235edc=_0x1527;function _0x1737(){var _0x300a90=['5057080hkALtn','My\x20Website','https://gi','24272720MkDgjq','ero-YT7','utube.com/','👥Owner','allmenu','2091052wyJgXG','https://ze','928915HlSUhT','ZeroYT7','357sUwalj','My\x20Youtube','178476EoRoUy','https://yo','2616536ybOlUS','royt7.biz.','My\x20Github','thub.com/Z','1483530CshNJa','owner','💌Command'];_0x1737=function(){return _0x300a90;};return _0x1737();}(function(_0x17181c,_0x434b39){var _0x2ffe33=_0x1527,_0x8fa1ed=_0x17181c();while(!![]){try{var _0x5d4106=-parseInt(_0x2ffe33(0x1d0))/(0x4*-0x1b5+0x57e+0x31*0x7)+parseInt(_0x2ffe33(0x1ce))/(-0x2278+-0x526+-0x1*-0x27a0)+parseInt(_0x2ffe33(0x1da))/(-0x475+0x182f*-0x1+0x1ca7)+parseInt(_0x2ffe33(0x1d6))/(0xb3a+-0x1*0x1b65+0x102f)+parseInt(_0x2ffe33(0x1dd))/(-0x13e*0xa+0x23ef+0xbbf*-0x2)+-parseInt(_0x2ffe33(0x1d4))/(0xd0a+-0x3*0xd03+-0x1a05*-0x1)*(-parseInt(_0x2ffe33(0x1d2))/(0x3*-0xbcf+-0x54e+0x28c2))+-parseInt(_0x2ffe33(0x1c9))/(0x1d84+0x17a5*-0x1+-0x73*0xd);if(_0x5d4106===_0x434b39)break;else _0x8fa1ed['push'](_0x8fa1ed['shift']());}catch(_0x521cd6){_0x8fa1ed['push'](_0x8fa1ed['shift']());}}}(_0x1737,-0xe0f*-0x13d+-0x2b4*0x718+-0x2ed8*-0x49));function _0x1527(_0x12a2c0,_0x44d8fb){var _0x51cfb8=_0x1737();return _0x1527=function(_0x16c863,_0x1266dd){_0x16c863=_0x16c863-(0x1012+-0xa7+-0xda2);var _0x45e62e=_0x51cfb8[_0x16c863];return _0x45e62e;},_0x1527(_0x12a2c0,_0x44d8fb);}var buttonsZero=[{'urlButton':{'displayText':_0x235edc(0x1d3),'url':_0x235edc(0x1d5)+_0x235edc(0x1cb)+_0x235edc(0x1d1)}},{'urlButton':{'displayText':_0x235edc(0x1d8),'url':_0x235edc(0x1df)+_0x235edc(0x1d9)+_0x235edc(0x1ca)}},{'urlButton':{'displayText':_0x235edc(0x1de),'url':_0x235edc(0x1cf)+_0x235edc(0x1d7)+'id'}},{'quickReplyButton':{'displayText':_0x235edc(0x1dc),'id':_0x235edc(0x1cd)}},{'quickReplyButton':{'displayText':_0x235edc(0x1cc),'id':_0x235edc(0x1db)}}];
zeroyt7.sendMessage(from, { viewOnce : true, caption: teks, location: { jpegThumbnail: await reSize(thumbnail, 200, 200)}, templateButtons: buttonsZero, footer: creator, mentions: [m.sender] })
}
break
case 'allmenu': {
teks = `┌── ⌜ *_STATUS USER_* ⌟
├❒ Name : ${pushname}
├❒ Number : @${sender.split("@")[0]}
├❒ Status : ${itsMezeroyt7 ? 'Owner' : 'User'}
├❒ Date : ${dt}
├❒ Waktu : ${jam} WIB
└───────
┌── ⌜ *_OWNER MENU_* ⌟
├❒ ${prefix}owner
├❒ ${prefix}bc
├❒ ${prefix}bcgc
├❒ ${prefix}join
├❒ ${prefix}leave
├❒ ${prefix}creategc
├❒ ${prefix}shutdown
├❒ ${prefix}setppbot
├❒ ${prefix}setbio
└───────
┌── ⌜ *_GROUP MENU_* ⌟
├❒ ${prefix}antilink
├❒ ${prefix}add
├❒ ${prefix}kick
├❒ ${prefix}promote
├❒ ${prefix}demote
├❒ ${prefix}hidetag
├❒ ${prefix}tagall
├❒ ${prefix}group
├❒ ${prefix}setppgroup
├❒ ${prefix}linkgroup
├❒ ${prefix}ephemeral
├❒ ${prefix}setname
├❒ ${prefix}setdesc
├❒ ${prefix}editinfo
└───────`
var _0x51c10a=_0x1138;function _0x4cbd(){var _0xe5e95c=['ZeroYT7','royt7.biz.','40428BlWNmR','https://gi','134813KZAKHs','https://ze','allmenu','8VJTBvz','735948MZepHL','owner','715WAndbh','10nZswRV','👥Owner','My\x20Youtube','102cELuuo','1635099qhgNcV','2312680RBBags','https://yo','406304MOyqVt','utube.com/','My\x20Website','My\x20Github','💰Donasi','ero-YT7','874876KuzuFA','2AaBEXc','thub.com/Z'];_0x4cbd=function(){return _0xe5e95c;};return _0x4cbd();}(function(_0x313fe4,_0x1dd7de){var _0x538ad9=_0x1138,_0x5bee88=_0x313fe4();while(!![]){try{var _0x4e03d5=-parseInt(_0x538ad9(0x8d))/(-0x585+0x2023+-0x2f5*0x9)*(parseInt(_0x538ad9(0x79))/(-0x1*-0x1ef6+-0x13d*-0xb+-0x2c93*0x1))+parseInt(_0x538ad9(0x8a))/(0xa*-0x39b+-0x12*0x65+-0x101*-0x2b)+parseInt(_0x538ad9(0x93))/(-0x2438+-0x2667+0x21*0x243)*(parseInt(_0x538ad9(0x86))/(-0x14ab+-0x3c9+0x1879))+-parseInt(_0x538ad9(0x89))/(-0x33*0x89+-0x1307*-0x1+0x84a)*(parseInt(_0x538ad9(0x7f))/(-0x1*0x1915+0xe32+0xaea))+parseInt(_0x538ad9(0x82))/(-0x1fd1+0x2*-0xde7+0x3ba7)*(parseInt(_0x538ad9(0x83))/(0x40+-0x3b5+-0x6*-0x95))+-parseInt(_0x538ad9(0x8b))/(-0x279+-0x250a+-0x7d*-0x51)+parseInt(_0x538ad9(0x85))/(0x1691+0x2*-0xc22+-0xdf*-0x2)*(parseInt(_0x538ad9(0x7d))/(0x883*0x4+0x7*-0x194+-0x16f4));if(_0x4e03d5===_0x1dd7de)break;else _0x5bee88['push'](_0x5bee88['shift']());}catch(_0x2ae0ee){_0x5bee88['push'](_0x5bee88['shift']());}}}(_0x4cbd,0x21*-0x4739+0x861b*0x5+-0x14bb*-0x8d));function _0x1138(_0x22a5ba,_0x295988){var _0x151e55=_0x4cbd();return _0x1138=function(_0x4bce36,_0x172257){_0x4bce36=_0x4bce36-(-0x18b*0x15+0xa02+0x16de);var _0x1140dd=_0x151e55[_0x4bce36];return _0x1140dd;},_0x1138(_0x22a5ba,_0x295988);}var buttonsZero=[{'urlButton':{'displayText':_0x51c10a(0x88),'url':_0x51c10a(0x8c)+_0x51c10a(0x8e)+_0x51c10a(0x7b)}},{'urlButton':{'displayText':_0x51c10a(0x90),'url':_0x51c10a(0x7e)+_0x51c10a(0x7a)+_0x51c10a(0x92)}},{'urlButton':{'displayText':_0x51c10a(0x8f),'url':_0x51c10a(0x80)+_0x51c10a(0x7c)+'id'}},{'quickReplyButton':{'displayText':_0x51c10a(0x91),'id':_0x51c10a(0x81)}},{'quickReplyButton':{'displayText':_0x51c10a(0x87),'id':_0x51c10a(0x84)}}];
zeroyt7.sendMessage(from, { viewOnce : true, caption: teks, location: { jpegThumbnail: await reSize(thumbnail, 200, 200)}, templateButtons: buttonsZero, footer: creator, mentions: [m.sender] })
}
break
case 'donasi': {
teks = `https://sociabuzz.com/ZeroYT7/tribe

Terimakasih Telah Support Saya Semoga Semakin Berkah`
zeroyt7.sendMessage(from, { text: teks }, { quoted: ftroli })
}
break
case 'bc': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!text) return reply(`Masukan Teksnya\nContoh : ${prefix + command} Please A Subscribe My Youtube Zero YT7`)
var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: thumbnail, }}}
let anu = await store.chats.all().map(v => v.id)
reply(mess.wait)
for (let yoi of anu) {
if (/image/.test(mime)) {
await sleep(1500)
var txtbc = `*Broadcast ${global.botName}*

*✉️ Message :* ${q? q : ''}\n`
var btnbc = [
{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }
]
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let url = await TelegraPh(media)
let urll = await getBuffer(url)
zeroyt7.sendMessage(yoi, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: ftroli })
if (fs.existsSync(media)) fs.unlinkSync(media)
} else if (/video/.test(mime)) {
await sleep(1500)
var txtbc = `*Broadcast ${global.botName}*

*✉️ Message :* ${q? q : ''}\n`
var btnbc = [
{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }
]
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let url = await TelegraPh(media)
let urll = await getBuffer(url)
zeroyt7.sendMessage(yoi, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: ftroli })
if (fs.existsSync(media)) fs.unlinkSync(media)
} else if (/audio/.test(mime)) {
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
await sleep(1500)
let urll = await UploadFileUgu(media)
zeroyt7.sendMessage(yoi, { audio: { url: urll.url }}, { quoted: ftroli })
} else {
await sleep(1500)
var txtbc = `*Broadcast ${global.botName}*

*✉️ Message :* ${q? q : ''}\n`
var btnbc = [
{ buttonId: `menu`, buttonText: { displayText: `💌 Menu` }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: `👥Owner` }, type: 1 }
]
await zeroyt7.sendButtonText(yoi, btnbc, txtbc, creator, ftroli)
}
reply(mess.succes)
}
}
break
case 'bcgc': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!text) return reply(`Masukan Teksnya\nContoh : ${prefix + command} Please A Subscribe My Youtube Zero YT7`)
let getGroups = await zeroyt7.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
var button = [
{ buttonId: `menu`, buttonText: { displayText: `💌 Menu` }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: `👥Owner` }, type: 1 }
]
let txt = `*「 ${global.botName} Broadcast 」*

*✉️ Message : ${text}`
zeroyt7.sendButtonText(i, button, txt, creator, ftroli)
}
reply(mess.succes)
}
break
case 'join': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!text) return reply(`Masukan Link Group Nya\nContoh ${prefix + command} Link Group`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await zeroyt7.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'leave': {
if (!itsMezeroyt7) return reply(mess.owner)
await zeroyt7.groupLeave(from).then((res) => reply(mess.succes)).catch((err) => reply(jsonformat(err)))
}
break
case 'creategc': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!args.join(" ")) return reply(`Masukan Nama Group Nya\nContoh ${prefix + command} Zero YT7 Official Bot`)
try {
let cret = await zeroyt7.groupCreate(args.join(" "), [])
let response = await zeroyt7.groupInviteCode(cret.id)
teks = `     「 Group Create Fitur 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
       `
zeroyt7.sendMessage(from, { text:teks, mentions: await zeroyt7.parseMention(teks)}, {quoted:ftroli})
} catch {
reply("Error!")
}
}
break
case 'shutdown': {
if (!itsMezeroyt7) return reply(mess.owner)
reply(`Bye... Bot Telah Di Matikan`)
await sleep(3000)
process.exit()
}
break
case 'setppbot': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await zeroyt7.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await zeroyt7.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(mess.succes)
} else {
var memeg = await zeroyt7.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(mess.succes)
}
}
break
case 'setbio': {
if (!itsMezeroyt7) return reply(mess.owner)
if (!text) return reply(`Masukan Text Bio Nya\nContoh : ${prefix + command} Please A Subscribe My Youtube Zero YT7`)
zeroyt7.setStatus(q)
reply(`*Bio Telah Di Ganti Menjadi ${q}*`)
}
break
case 'owner': {
var vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `N:;${global.ownerName}.;;;`
+ `FN:${global.ownerName}.\n`
+ `ORG:${global.ownerName};\n`
+ `TEL;type=CELL;type=VOICE;waid=${global.ownerNumber}:${global.ownerNumber}\n`
+ `END:VCARD`
var msg = await zeroyt7.sendMessage(from, { contacts: { displayName: `${global.owner}`, contacts: [{ vcard }] } }, { quoted: ftroli })
await sleep(1000)
var vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `N:;${p}.;;;`
+ `FN:Creator Script Bot.\n`
+ `ORG:Creator Script Bot;\n`
+ `TEL;type=CELL;type=VOICE;waid=${p}:${p}\n`
+ `END:VCARD`
var msg = await zeroyt7.sendMessage(from, { contacts: { displayName: `${global.owner}`, contacts: [{ vcard }] } }, { quoted: ftroli })
}
break
case 'antilink': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (args[0] === 'enable'){
if (isAntilink) return reply(`*[ ANTILINK ]* Sudah Aktif Sebelumnya !`)
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('*[ ANTILINK DI AKTIFKAN ]*\n\nYang Mengirim Link Group Akan Di Kick Otomatis Oleh Bot !')
} else if (args[0] === 'disable') { if (!isAntilink) return reply(`*[ ANTILINK ] Sudah Tidak Aktif Sebelumnya !*`)
anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('*[ ANTILINK DI NONAKTIFKAN ]*\n\nSemua Member Boleh Mengirimkan Link Group')
} else {
let buttons = [
{ buttonId: 'antilink enable', buttonText: { displayText: '✅Aktif' }, type: 1 },
{ buttonId: 'antilink disable', buttonText: { displayText: '❎Nonaktif' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Antilink`, creator, ftroli)
}
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!text) return reply(`Masukan Nomer Yang Mau Di Add\nContoh ${prefix + command} 628***`)
let add = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [add], 'add').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!text) return reply(`Masukan Nomer Yang Mau Di Kick\nContoh ${prefix + command} 628***`)
let kick = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [kick], 'remove').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) return reply(`Tag/Reply Nomer Admin Yang Mau Di Demote\nContoh ${prefix + command} Tag`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [users], 'promote').then((res) => reply(mess.succes)).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) return reply(`Tag/Reply Nomer Admin Yang Mau Di Demote\nContoh ${prefix + command} Tag`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [users], 'demote').then((res) => reply(mess.succes)).catch((err) => reply(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) return reply(`Masukan Text Nya\nContoh ${prefix + command} Please A Subscribe My Youtube Zero YT7`)
zeroyt7.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ftroli })
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) return reply(`Masukan Text Nya\nContoh ${prefix + command} Please A Subscribe My Youtube Zero YT7`)
let teks = `*_Tag All_*
 
💌 *Pesan :* ${q ? q : 'kosong'}\n\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}\n`
}
zeroyt7.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ftroli })
}
break
case 'group': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (args[0] === 'close'){
await zeroyt7.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await zeroyt7.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: '✅Buka' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: '❎Tutup' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Group`, creator, ftroli)
}
}
break
case 'setppgroup': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
await zeroyt7.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.succes)
}
break
case 'linkgroup': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
let response = await zeroyt7.groupInviteCode(from)
zeroyt7.sendText(from, `https://chat.whatsapp.com/${response}\n\n💌 Link Group : ${groupMetadata.subject}`, ftroli, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (args[0] === 'enable') {
await zeroyt7.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await zeroyt7.sendMessage(from, { disappearingMessagesInChat: false }).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'ephemeral enable', buttonText: { displayText: '✅Aktif' }, type: 1 },
{ buttonId: 'ephemeral disable', buttonText: { displayText: '❎Nonaktif' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Ephemeral Group`, creator, ftroli)
}
}
break
case 'setname': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!text) return reply(`Masukan Text Nya\nContoh ${prefix + command} Zero YT7`)
await zeroyt7.groupUpdateSubject(from, text).then((res) => reply(mess.succes)).catch((err) => reply(jsonformat(err)))
}
break
case 'setdesc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (!text) return reply(`Masukan Text Nya\nContoh ${prefix + command} Zero YT7`)
await zeroyt7.groupUpdateDescription(from, text).then((res) => reply(mess.succes)).catch((err) => reply(jsonformat(err)))
}
break
case 'editinfo': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMezeroyt7) return reply(mess.admin)
if (args[0] === 'open'){
await zeroyt7.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'close'){
await zeroyt7.groupSettingUpdate(from, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: '✅Buka' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: '❎Tutup' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Edit Info`, creator, ftroli)
}
}
break

//━━━━━━━━━━━━━━━[ USE A READ CONSOLE BOT ]━━━━━━━━━━━━━━━━━//

default:
var _0x468960=_0xd8c1;function _0xd8c1(_0x2b334e,_0x2c8a23){var _0x3a2cf5=_0x2c95();return _0xd8c1=function(_0x393204,_0x55be7d){_0x393204=_0x393204-(-0x1504+0x35f+-0x4e5*-0x4);var _0x2dc5b7=_0x3a2cf5[_0x393204];return _0x2dc5b7;},_0xd8c1(_0x2b334e,_0x2c8a23);}function _0x2c95(){var _0x4e58b8=['extendedTe','\x20CHAT*\x0a?\x20:','(async\x20()\x20','util','1475645xYMYJN','text','messages','slice','2505306knYlnk','760744qGhNGc','startsWith','message','HQzyi','352XVnRXG','pesan\x20dite','inspect','\x20})()','teman','807003Eflnwf','owner','xtMessage','*ANONYMOUS','=>\x20{\x20retur','746840miIRYi','sendMessag','ruskan','type','5432adRSNk','306212Wzrcho','stringify','24SYpWQY','string','reply','78MubDXS','84aXkrwZ','conversati','format'];_0x2c95=function(){return _0x4e58b8;};return _0x2c95();}(function(_0x32c862,_0x1b0de9){var _0x1d2bd0=_0xd8c1,_0x2095e9=_0x32c862();while(!![]){try{var _0x17a9bb=-parseInt(_0x1d2bd0(0x1f2))/(-0x12bf+0x2*0x16f+0xfe2)+parseInt(_0x1d2bd0(0x203))/(0x11*0x1+0x23bb+0x2*-0x11e5)+-parseInt(_0x1d2bd0(0x1f7))/(-0x1*0x22c3+-0x7a3+0x2a69)*(parseInt(_0x1d2bd0(0x1f1))/(-0x163a+0x1ead+-0x86f*0x1))+parseInt(_0x1d2bd0(0x1ff))/(-0x235f+0x463+0x1f01)*(parseInt(_0x1d2bd0(0x1f4))/(-0x1aab+-0xb95+0x2646))+-parseInt(_0x1d2bd0(0x1f8))/(-0x853*-0x1+-0x4*-0x59b+0xf5c*-0x2)*(-parseInt(_0x1d2bd0(0x204))/(-0x6*-0x1d3+0x1096+-0x58*0x50))+-parseInt(_0x1d2bd0(0x20d))/(0x7*-0x4e1+0x17f9+0x5*0x20b)+-parseInt(_0x1d2bd0(0x212))/(-0x3d6*-0x4+0x2b*0x76+-0x2320)*(parseInt(_0x1d2bd0(0x208))/(-0x219d+0x1837+0x971));if(_0x17a9bb===_0x1b0de9)break;else _0x2095e9['push'](_0x2095e9['shift']());}catch(_0x36f272){_0x2095e9['push'](_0x2095e9['shift']());}}}(_0x2c95,-0x5*-0xeacf+0x2e895*-0x5+0x157318));if(budy[_0x468960(0x205)]('=>')){if(!itsMezeroyt7)return reply(mess[_0x468960(0x20e)]);function Return(_0x2dda0f){var _0x4eeff3=_0x468960,_0x3b8cc3={'HQzyi':function(_0x587886,_0x327b12){return _0x587886==_0x327b12;}};sat=JSON[_0x4eeff3(0x1f3)](_0x2dda0f,null,-0x9*0x2f4+0x1ad2*0x1+-0x3c),bang=util[_0x4eeff3(0x1fa)](sat),_0x3b8cc3[_0x4eeff3(0x207)](sat,undefined)&&(bang=util[_0x4eeff3(0x1fa)](_0x2dda0f)),m[_0x4eeff3(0x1f6)](bang);}try{reply(util[_0x468960(0x1fa)](eval(_0x468960(0x1fd)+_0x468960(0x211)+'n\x20'+budy[_0x468960(0x202)](0x1*0x1d2f+0x895+-0x25c1)+_0x468960(0x20b))));}catch(_0x1f5da1){reply(String(_0x1f5da1));}}if(budy[_0x468960(0x205)]('>')){if(!itsMezeroyt7)m[_0x468960(0x1f6)](mess[_0x468960(0x20e)]);try{let evaled=await eval(budy[_0x468960(0x202)](0x3*-0x6d9+-0x4*-0x553+-0x1*0xbf));if(typeof evaled!==_0x468960(0x1f5))evaled=require(_0x468960(0x1fe))[_0x468960(0x20a)](evaled);await reply(evaled);}catch(_0x5d1be8){await reply(String(_0x5d1be8));}}if(budy[_0x468960(0x205)]('$')){if(!itsMezeroyt7)m[_0x468960(0x1f6)](mess[_0x468960(0x20e)]);exec(budy[_0x468960(0x202)](0x12f2+0xec1+0x73*-0x4b),(_0x159ad2,_0x4e22c5)=>{var _0x4bf827=_0x468960;if(_0x159ad2)m[_0x4bf827(0x1f6)](_0x159ad2);if(_0x4e22c5)m[_0x4bf827(0x1f6)](_0x4e22c5);});}if(!isCmd){if(cekPesan('id',sender)==null)return;if(cekPesan(_0x468960(0x20c),sender)==![])return;if(m[_0x468960(0x201)][0x8f7+-0x1*-0xfe5+-0xc6e*0x2][_0x468960(0x1f0)]==_0x468960(0x1f9)+'on'||m[_0x468960(0x201)][0x202d*-0x1+0x21ef+-0x2*0xe1][_0x468960(0x1f0)]==_0x468960(0x1fb)+_0x468960(0x20f)){try{var chat_anonymous=m[_0x468960(0x201)][0x127a+-0xaed*-0x3+-0x1*0x3341][_0x468960(0x206)][_0x468960(0x1fb)+_0x468960(0x20f)][_0x468960(0x200)];}catch(_0x3fc25e){var chat_anonymous=m[_0x468960(0x201)][-0x130c+-0x2*0xa37+0x277a][_0x468960(0x206)][_0x468960(0x1f9)+'on'];}let text_nya_menfes=_0x468960(0x210)+_0x468960(0x1fc)+'\x20'+chat_anonymous;zeroyt7[_0x468960(0x213)+'e'](cekPesan(_0x468960(0x20c),sender),{'text':text_nya_menfes}),zeroyt7[_0x468960(0x213)+'e'](from,{'text':_0x468960(0x209)+_0x468960(0x1ef)},{'quoted':m});}}

if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
zeroyt7.copyNForward(from, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
zeroyt7.sendMessage(m.key.remoteJid, { text: `*[ERROR !!!]*\n${err}` }, { quoted: m })
}
}

function _0x47c4(_0x42a530,_0x44dc09){var _0xbb1a67=_0x5ebb();return _0x47c4=function(_0x523ec0,_0x28966c){_0x523ec0=_0x523ec0-(0x61*-0x6+0x11*0x110+-0xedb);var _0xbdd251=_0xbb1a67[_0x523ec0];return _0xbdd251;},_0x47c4(_0x42a530,_0x44dc09);}var _0x4fe54f=_0x47c4;function _0x5ebb(){var _0x297909=['42kTuinw','2116580dMJMWy','12399HmqDBm','ception','eption:\x20','uncaughtEx','1011374sQlbFM','16MNNlNh','584mGDtKF','24650329iSNJuM','Caught\x20exc','9BGMPTK','log','360315BWYQlP','tWueY','6351008kcWYmf','34962JgGgfL'];_0x5ebb=function(){return _0x297909;};return _0x5ebb();}(function(_0x54d7c7,_0x30e200){var _0x1d81ca=_0x47c4,_0x44093b=_0x54d7c7();while(!![]){try{var _0x399c0e=-parseInt(_0x1d81ca(0xf5))/(-0x1739+0x1199+-0x83*-0xb)*(-parseInt(_0x1d81ca(0xfd))/(0x177d+-0xbf8*-0x2+-0x2f6b*0x1))+parseInt(_0x1d81ca(0xf8))/(0x1f0+-0xfff+-0x1*-0xe12)*(-parseInt(_0x1d81ca(0xfe))/(0xfd9+-0x1eaa+0xed5))+-parseInt(_0x1d81ca(0xf2))/(-0x163+-0xfe*-0x9+-0x6*0x141)*(parseInt(_0x1d81ca(0xf6))/(0x2*-0xc7+-0x15*0x68+-0x1*-0xa1c))+parseInt(_0x1d81ca(0xfc))/(0x493*-0x1+-0x4a6+0x940)+-parseInt(_0x1d81ca(0xf4))/(0x1*-0x1267+-0x1b59*0x1+0x4*0xb72)+parseInt(_0x1d81ca(0xf0))/(-0xdee+0x1c62+-0xe6b)*(-parseInt(_0x1d81ca(0xf7))/(0x1*0x1d17+-0xf1*-0x26+-0x1*0x40d3))+parseInt(_0x1d81ca(0xff))/(0x5*-0x207+0x12b5*0x1+-0x887);if(_0x399c0e===_0x30e200)break;else _0x44093b['push'](_0x44093b['shift']());}catch(_0x351f40){_0x44093b['push'](_0x44093b['shift']());}}}(_0x5ebb,-0x20*0x8095+-0xa84f2+0x2302be),process['on'](_0x4fe54f(0xfb)+_0x4fe54f(0xf9),function(_0x20a966){var _0x3ae8e9=_0x4fe54f,_0x3fe0b2={'tWueY':_0x3ae8e9(0xef)+_0x3ae8e9(0xfa)};console[_0x3ae8e9(0xf1)](_0x3fe0b2[_0x3ae8e9(0xf3)],_0x20a966);}));