let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/18c123b72250f8f44a6b8.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

◪ 📮 *GC BOT*
│ *GC BOT :* 
│ ╰ https://chat.whatsapp.com/CxJShadfxYqCVAHHxdHSiy
│ *GC BOT:* 
│ ╰ https://chat.whatsapp.com/CxJShadfxYqCVAHHxdHSiy
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Script bot ada di desk grup!


Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
