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

process.on('uncaughtException', console.error)
require('../options/config')
require('../options/Mess')
var { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var { exec, spawn, execSync } = require("child_process")
var axios = require('axios')
var path = require('path')
var os = require('os')
var fetch = require('node-fetch')
var crypto = require('crypto')
var toMs = require('ms')
var moment = require('moment-timezone')
var { JSDOM } = require('jsdom')
var speed = require('performance-now')
var x = require('xfarr-api')
var maker = require('mumaker')
var ggs = require('google-it')
var { performance } = require('perf_hooks')
var hx = require("hxz-api")
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, packname, author, fetchJson, getBuffer, jsonformat, creator, format, parseMention, getRandom, generateProfilePicture, reSize}= require('../message/myfunc')
var { color, bgcolor } = require("../message/color")

//━━━━━━━━━━━━━━━[ READ DATABASE ]━━━━━━━━━━━━━━━━━//

global.db = JSON.parse(fs.readFileSync('./pth/database.json'))
var antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
...(global.db || {})
}

//━━━━━━━━━━━━━━━[ READ IMAGE ]━━━━━━━━━━━━━━━━━//

var thumbnail = fs.readFileSync('./file/image/zeroyt7.jpg')
var fake = fs.readFileSync('./file/image/zero.jpg')

//━━━━━━━━━━━━━━━[ TIME ]━━━━━━━━━━━━━━━━━//

var tanggl = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
var timetime = moment().tz('Asia/Jakarta').format("HH:mm:ss")
var timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
var timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good Midnight'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good Night'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good Afternoon Before Evening'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good Day'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good Morning Before Lunch'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Morning'
 }

//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var botNumber = await zeroyt7.decodeJid(zeroyt7.user.id)
var isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var itsMe = m.sender == botNumber ? true : false
var text = args.join(' ')
var q = args.join(' ')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
var isMedia = /image|video|sticker|audio/.test(mime)
var sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
var more = String.fromCharCode(8206)
var readmore = more.repeat(4001)
var groupMetadata = m.isGroup ? await zeroyt7.groupMetadata(from).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
var groupOwner = m.isGroup ? groupMetadata.owner : ''
var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var isAntilink = m.isGroup ? antilink.includes(from) : false

//━━━━━━━━━━━━━━━[ PUBLIC & SELF ]━━━━━━━━━━━━━━━━━//

if (!zeroyt7.public) {
if (isOwner && !m.key.fromMe) return
}

//━━━━━━━━━━━━━━━[ AUTOREAD ]━━━━━━━━━━━━━━━━━//

if (m.message && !m.key.fromMe) {
zeroyt7.readMessages([m.key])

//━━━━━━━━━━━━━━━[ CONSOLE ]━━━━━━━━━━━━━━━━━//

zeroyt7.sendPresenceUpdate('available', from)
console.log(chalk.black(chalk.bgWhite('[ Zero YT7 ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
var reactionMessage = {
react: {
text: args[0],
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}

//━━━━━━━━━━━━━━━[ REPLY ]━━━━━━━━━━━━━━━━━//

var reply = (teks) => {
zeroyt7.sendMessage(from, { text: teks }, { quoted: m })
}

//━━━━━━━━━━━━━━━[ BUTTONS ]━━━━━━━━━━━━━━━━━//

function _0x5543(_0x3e9eb3,_0x41ec3a){const _0x2b6f81=_0x35d6();return _0x5543=function(_0x4038d6,_0x45e278){_0x4038d6=_0x4038d6-(0xe8*0x5+-0x208b+0x1da4);let _0xd22925=_0x2b6f81[_0x4038d6];return _0xd22925;},_0x5543(_0x3e9eb3,_0x41ec3a);}const _0x100b3e=_0x5543;(function(_0x4daeb8,_0x2c2577){const _0x299fdf=_0x5543,_0x978eff=_0x4daeb8();while(!![]){try{const _0x8526a4=-parseInt(_0x299fdf(0x1b7))/(0x14fb+0xb7d+-0x2077)+parseInt(_0x299fdf(0x1a4))/(-0x18e4+0x14b8+0x42e*0x1)*(parseInt(_0x299fdf(0x1aa))/(-0x53a+0x898+-0x35b*0x1))+parseInt(_0x299fdf(0x1ae))/(-0x236d+0x1003+0x3*0x67a)+-parseInt(_0x299fdf(0x1a9))/(-0x21b6*-0x1+-0x1d*-0x12a+-0x4373)*(parseInt(_0x299fdf(0x1b5))/(0x4*0x241+0xcb4+-0x1*0x15b2))+-parseInt(_0x299fdf(0x1b1))/(0x2647+-0xe00+-0x1840)*(-parseInt(_0x299fdf(0x1ad))/(-0x269b+-0x3*0x3bb+0x31d4))+parseInt(_0x299fdf(0x1b8))/(-0xc8e+-0x58c+0x1223)*(parseInt(_0x299fdf(0x1a6))/(0x355*-0xb+-0x4*0x68a+0x3ed9))+-parseInt(_0x299fdf(0x1a2))/(-0xb*0x232+-0x7fe+-0x4d*-0x6b)*(parseInt(_0x299fdf(0x1a1))/(-0x1068+-0x1*0x1963+0x29d7));if(_0x8526a4===_0x2c2577)break;else _0x978eff['push'](_0x978eff['shift']());}catch(_0x401ee6){_0x978eff['push'](_0x978eff['shift']());}}}(_0x35d6,-0x2d3*-0x566+0x4732+-0x3ef81*0x1));function _0x35d6(){const _0x451184=['5480jRtkKQ','ero-YT7','script','2515krOnWh','20685XGNjyq','owner','menu','3066832HEujNY','2723900AHJbVl','https://gi','thub.com/Z','21NWatVd','ZeroYT7','My\x20Github','Back\x20To\x20Me','996ZuLoIL','All\x20Menu','1100823uuayFl','5292EOPhHB','https://yo','My\x20Youtube','Script','Owner','19536KbDyYv','10593QmqWOp','utube.com/','394SFhsJo','allmenu'];_0x35d6=function(){return _0x451184;};return _0x35d6();}const buttonsDefault=[{'urlButton':{'displayText':_0x100b3e(0x1ba),'url':_0x100b3e(0x1b9)+_0x100b3e(0x1a3)+_0x100b3e(0x1b2)}},{'urlButton':{'displayText':_0x100b3e(0x1b3),'url':_0x100b3e(0x1af)+_0x100b3e(0x1b0)+_0x100b3e(0x1a7)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1b6),'id':prefix+_0x100b3e(0x1a5)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1bc),'id':prefix+_0x100b3e(0x1ab)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1bb),'id':prefix+_0x100b3e(0x1a8)}}],buttons2=[{'urlButton':{'displayText':_0x100b3e(0x1ba),'url':_0x100b3e(0x1b9)+_0x100b3e(0x1a3)+_0x100b3e(0x1b2)}},{'urlButton':{'displayText':_0x100b3e(0x1b3),'url':_0x100b3e(0x1af)+_0x100b3e(0x1b0)+_0x100b3e(0x1a7)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1bc),'id':prefix+_0x100b3e(0x1ab)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1bb),'id':prefix+_0x100b3e(0x1a8)}}],buttons3=[{'urlButton':{'displayText':_0x100b3e(0x1ba),'url':_0x100b3e(0x1b9)+_0x100b3e(0x1a3)+_0x100b3e(0x1b2)}},{'urlButton':{'displayText':_0x100b3e(0x1b3),'url':_0x100b3e(0x1af)+_0x100b3e(0x1b0)+_0x100b3e(0x1a7)}},{'quickReplyButton':{'displayText':_0x100b3e(0x1b4)+'nu','id':prefix+_0x100b3e(0x1ac)}}];

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const ftroli = {
key: {
fromMe: false,
"participant":"0@s.whatsapp.net", 
"remoteJid": "status@broadcast"},
"message": {
orderMessage: {
itemCount: 2022,status: 200, 
thumbnail: (fake), 
surface: 200, 
message: `Creted By Zero YT7`, 
orderTitle: 'Created By Zero YT7', 
sellerJid: '0@s.whatsapp.net'}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded":true},
sendEphemeral: true}

//━━━━━━━━━━━━━━━[ ANTILINK ]━━━━━━━━━━━━━━━━━//

if (isAntilink) {
if (!isBotAdmins) return
if (budy.includes(`https://chat.whatsapp.com/`)) {
bvl = `*GROUP LINK DETECTOR*\n\nAdmin Telah Mengirim Link, Admin Tidak Akan Dikick`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
kice = m.sender
zeroyt7.sendMessage(from, {text:`*GROUP LINK DETECTOR*\n\n@${kice.split("@")[0]} Akan Dikick Karena Mengirim Link Di Group Ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
setTimeout( () => {
zeroyt7.groupParticipantsUpdate(from, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}, 3000)
} else {
}
}
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//━━━━━━━━━━━━━━━[ CMD WITH MEDIA ]━━━━━━━━━━━━━━━━━//

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: zeroyt7.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, zeroyt7.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
zeroyt7.ev.emit('messages.upsert', msg)
}

//━━━━━━━━━━━━━━━[ FITUR ]━━━━━━━━━━━━━━━━━//

switch(command) {
case 'menu': {
menu = `Hy Saya Adalah ${global.botName}
Siap Membantu Anda
Untuk Mempermudah Aktivitas
Di WhatsApp Silahkan Pilih
List Di Bawah Ini

Creator : ${creator}
My Script : ${global.botName}

Thanks To
• Allah S.W.T
• Ortuku
• All Creator Bot
• All Subscriber Ku`
zeroyt7.sendMessage(from, { viewOnce : true, caption: menu, image: thumbnail, templateButtons: buttonsDefault, footer: creator, mentions: [m.sender] })
}
break
case 'allmenu' : {
allmenu = `Silahkan Pilih List Menunya Dibawah Ini
Gunakan ${global.botName} Dengan Bijak Ya

*[ Group Menu ]*
• ${prefix}linkgroup
• ${prefix}ephemeral
• ${prefix}setppgc
• ${prefix}setname
• ${prefix}setdesc
• ${prefix}group
• ${prefix}editinfo
• ${prefix}add
• ${prefix}kick
• ${prefix}hidetag
• ${prefix}tagall
• ${prefix}promote
• ${prefix}demote
• ${prefix}antilink
• ${prefix}listonline

*[ Convert Menu ]*
• ${prefix}toimage
• ${prefix}removebg
• ${prefix}sticker
• ${prefix}tovideo
• ${prefix}togif
• ${prefix}tourl
• ${prefix}tomp3
• ${prefix}tovn

*[ Owner Menu ]*
• ${prefix}script
• ${prefix}owner
• ${prefix}join
• ${prefix}leave
• ${prefix}block
• ${prefix}unblock
• ${prefix}setppbot
• ${prefix}setbio
• ${prefix}listpc
• ${prefix}listgc`
zeroyt7.sendMessage(from, { viewOnce : true, caption: allmenu, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break

case 'linkgroup': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
let response = await zeroyt7.groupInviteCode(from)
zeroyt7.sendText(from, `https://chat.whatsapp.com/${response}\n\n• Link Group : ${groupMetadata.subject}`, ftroli, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'enable') {
await zeroyt7.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await zeroyt7.sendMessage(from, { disappearingMessagesInChat: false }).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'ephemeral enable', buttonText: { displayText: 'Aktif' }, type: 1 },
{ buttonId: 'ephemeral disable', buttonText: { displayText: 'Nonaktif' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Group`, creator, ftroli)
}
}
break
case 'setppgroup': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
await zeroyt7.updateProfilePicture(from, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
case 'setname': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply( 'Textnya Mana Kak ?')
await zeroyt7.groupUpdateSubject(from, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'setdesc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply( 'Textnya Mana Kak ?')
await zeroyt7.groupUpdateDescription(from, text).then((res) => zeroyt7(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'group': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'close'){
await zeroyt7.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await zeroyt7.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Tutup' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Group`, creator, ftroli)
}
}
break
case 'editinfo': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'open'){
await zeroyt7.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'close'){
await zeroyt7.groupSettingUpdate(from, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Tutup' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Edit Info`, creator, ftroli)
}
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let add = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [add], 'add').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let kick = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [kick], 'remove').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
zeroyt7.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ftroli })
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
let teks = `*[ Tag All ]*
 
• *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}\n`
}
zeroyt7.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: ftroli })
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let promote = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [promote], 'promote').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let demote = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.groupParticipantsUpdate(from, [demote], 'demote').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'antilink': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply( mess.botAdmin)
if (!isAdmins && !isOwner) return reply(mess.admin)
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
{ buttonId: 'antilink enable', buttonText: { displayText: 'Aktif' }, type: 1 },
{ buttonId: 'antilink disable', buttonText: { displayText: 'Nonaktif' }, type: 1 }
]
await zeroyt7.sendButtonText(from, buttons, `Silahkan Pilih Mode Antilink`, creator, ftroli)
}
}
break
case 'listonline': {
if (!m.isGroup) return reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
zeroyt7.sendText(from, 'List Online :\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, ftroli, { mentions: online })
}
break
case 'toimage': {
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Balas Sticker Dengan Caption *${prefix + command}*`)
reply(mess.wait)
let toimage = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${toimage} ${ran}`, (err) => {
fs.unlinkSync(toimage)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(from, { image: buffer }, { quoted: ftroli })
fs.unlinkSync(ran)
})
}
break
case 'removebg': {
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let remobg = require('remove.bg')
let apirnobg = ['qpmjqVVpD6Ca5p6uo4MEDFRF']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './pth/sampah/remobg-'+getRandom('')
localFile = await zeroyt7.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './pth/sampah/hremo-'+getRandom('.png')
reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
zeroyt7.sendMessage(from, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : ftroli })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'sticker': {
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
reply(mess.wait)
if (/image/.test(mime)) {
let sticker = await quoted.download()
let encmedia = await zeroyt7.sendImageAsSticker(from, sticker, ftroli, { packname: packname, author: author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) reply('Maksimal 10 detik!')
let stiker = await quoted.download()
let encmedia = await zeroyt7.sendVideoAsSticker(from, stike, ftroli, { packname: packname, author: author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'tovideo': {
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Balas Sticker Dengan Caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('../message/uploader')
let video = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(video)
await zeroyt7.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video'} }, { quoted: ftroli })
await fs.unlinkSync(video)
}
break
case 'togif': {
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Balas Stiker Dengan Caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('../message/uploader')
let gif = await zeroyt7.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(gif)
await zeroyt7.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: ftroli })
await fs.unlinkSync(gif)
}
break
case 'tourl': {
reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../message/uploader')
let url = await zeroyt7.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(url)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(url)
reply(util.format(anu))
}
await fs.unlinkSync(url)
}
break
case 'tomp3': {
if (/document/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
reply(mess.wait)
let mp3 = await quoted.download()
let { toAudio } = require('../message/converter')
let audio = await toAudio(mp3, 'mp4')
zeroyt7.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By Zero YT7.mp3`}, { quoted : ftroli })
}
break
case 'tovn': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!quoted) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
reply(mess.wait)
let vn = await quoted.download()
let { toPTT } = require('../message/converter')
let audio = await toPTT(vn, 'mp4')
zeroyt7.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:ftroli})
}
break
case 'join': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
reply(mess.wait)
let join = args[0].split('https://chat.whatsapp.com/')[1]
await zeroyt7.groupAcceptInvite(join).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'leave': {
if (!isOwner) return reply(mess.owner)
await zeroyt7.groupLeave(from).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'block': {
if (!isOwner) return reply(mess.owner)
let block = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.updateBlockStatus(block, 'block').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isOwner) return reply(mess.owner)
let unblock = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zeroyt7.updateBlockStatus(unblock, 'unblock').then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'setppbot': {
if (!isOwner) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await zeroyt7.downloadAndSaveMediaMessage(quoted)
await zeroyt7.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply(mess.success)
}
break
case 'setbio': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply(`Textnya Mana Kak ?`)
zeroyt7.setStatus(q)
reply(`*Bio Telah Di Ganti Menjadi ${q}*`)
}
break
case 'listpc': {
if (!isOwner) return reply(mess.owner)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `* [ LIST PERSONAL CHAT ]*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `• *Nama :* ${nama}\n• *User :* @${i.split('@')[0]}\n• *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
}
zeroyt7.sendTextWithMentions(from, teks, ftroli)
}
break
case 'listgc': {
if (!isOwner) return reply(mess.owner)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*[ LIST GROUP CHAT ]*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await zeroyt7.groupMetadata(i)
teks += `• *Nama :* ${metadata.subject}\n• *Owner :* @${metadata.owner.split('@')[0]}\n• *ID :* ${metadata.id}\n• *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• *Member :* ${metadata.participants.length}\n\n=====================\n\n`
}
zeroyt7.sendTextWithMentions(from, teks, ftroli)
}
break
case 'script': {
tekssc = `❖ Source Code By ❖

Author : Zero YT7
Youtube : https://youtube.com/ZeroYT7
Instagram : https://instagram.com/Zero_YT7

❖ Link Base Script ❖
https://github.com/Zero-YT7/Popeye-MD

Big Thanks To
• Zero YT7
• Allah S.W.T
• Ortu Ku
• All Creator Bot
• All Subscriber Ku`
zeroyt7.sendMessage(from, { viewOnce : true, caption: tekssc, image: thumbnail, templateButtons: buttons3, footer: creator, mentions: [m.sender] })
}
break
case 'owner': {
let vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `N:;${global.ownerName}.;;;`
+ `FN:${global.ownerName}.\n`
+ `ORG:${global.ownerName};\n`
+ `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
+ `END:VCARD`
let msg = await zeroyt7.sendMessage(from, { contacts: { displayName: `${global.owner}`, contacts: [{ vcard }] } }, { quoted: ftroli })
let buttons3 = [
{buttonId: `menu`, buttonText: {displayText: 'Back To Menu'}, type: 1},
]
let buttonMessage3 = {
text: `DONT NOT SPAM OWNER!! `,
footerText: 'Press The Button Below',
buttons: buttons3,
headerType: 2
}
zeroyt7.sendMessage(from, buttonMessage3, { quoted: ftroli })                        
}
break

// ━━━━━━━━━━━━━[ AKHIRAN ]━━━━━━━━━━━━━━━━━//

default:
if (budy.startsWith('=>')) {
if (!isOwner) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isOwner) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
	
if (from.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
	
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

const _0x4fb9e4=_0x1df3;(function(_0x2b13ba,_0x5a20ca){const _0x7e97f5=_0x1df3,_0x3c41da=_0x2b13ba();while(!![]){try{const _0x354a4f=parseInt(_0x7e97f5(0x1c5))/(0xbc*0x2+-0x1c1f*-0x1+0xecb*-0x2)*(parseInt(_0x7e97f5(0x1b4))/(-0x10d*0x9+0x58d+0x3ea))+parseInt(_0x7e97f5(0x1b5))/(-0xe2b+0x1*0x1e28+-0xffa)*(parseInt(_0x7e97f5(0x1b9))/(-0xd*-0x296+0x1d07+0x1*-0x3ea1))+parseInt(_0x7e97f5(0x1b8))/(-0x578+0x28f*0x1+0xa*0x4b)+-parseInt(_0x7e97f5(0x1c4))/(-0x13d*0xb+0x12c8+0x107*-0x5)+-parseInt(_0x7e97f5(0x1b6))/(-0x47*0x7+0x213f+-0x1f47)+-parseInt(_0x7e97f5(0x1ba))/(0x23ed+-0x14*0x1e1+0x1af)*(-parseInt(_0x7e97f5(0x1bb))/(-0xe*0x179+0x2f*-0x9a+-0xf*-0x343))+parseInt(_0x7e97f5(0x1bf))/(0x119*0x1a+0x881*0x1+-0x2501);if(_0x354a4f===_0x5a20ca)break;else _0x3c41da['push'](_0x3c41da['shift']());}catch(_0x4013bd){_0x3c41da['push'](_0x3c41da['shift']());}}}(_0x1d7b,0x1cd4c+-0x63814+0xce34f));let file=require[_0x4fb9e4(0x1b7)](__filename);function _0x1df3(_0x572077,_0x2c319e){const _0x250692=_0x1d7b();return _0x1df3=function(_0x5978d8,_0x549f71){_0x5978d8=_0x5978d8-(-0x26fb+0x12df+0x15cf);let _0x212a3f=_0x250692[_0x5978d8];return _0x212a3f;},_0x1df3(_0x572077,_0x2c319e);}fs[_0x4fb9e4(0x1c0)](file,()=>{const _0x55f274=_0x4fb9e4,_0x364522={'DyBxh':function(_0x1ea4e8,_0x94c63d){return _0x1ea4e8(_0x94c63d);}};fs[_0x55f274(0x1be)+'e'](file),console[_0x55f274(0x1c3)](chalk[_0x55f274(0x1c2)](__filename+(_0x55f274(0x1bd)+_0x55f274(0x1c1)))),delete require[_0x55f274(0x1bc)][file],_0x364522[_0x55f274(0x1b3)](require,file);});function _0x1d7b(){const _0x7d86c=['watchFile','Update','blue','log','4363284XOEpZH','36451WENywJ','DyBxh','6czktnP','3KNIwVE','3516114PwMPzd','resolve','3315695OKHlvH','2250520NQbHbK','808ZNgqbp','35298gvMXAj','cache','\x20Telah\x20Di\x20','unwatchFil','534150hWYltP'];_0x1d7b=function(){return _0x7d86c;};return _0x1d7b();}
