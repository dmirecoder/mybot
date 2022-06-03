import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (command == 'ttpg') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/ttp-gradient?apikey=beta&text=${text}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'attpg') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/attp-gradient?apikey=beta&text=${text}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'attpg2') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/canvas/attp-gradient2?apikey=beta&text=${text}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
if (command == 'quotex') {
    let images = `https://violetics.pw/api/canvas/quotes?apikey=beta&text=${text}&author=HinataMd`
        let buttons = [
                    {buttonId: `quotes ${text}`, buttonText: {displayText: '➡️➡️Next Quotes➡️➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Quotes 」━┉⎔*
🤠 *Query* : *${text}*
`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
if (command == 'tahta') {
    let stiker = await sticker(null, global.API(`https://violetics.pw/api/jimp/tahta?apikey=beta&text=${text}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
}
handler.command = handler.help = ['ttpg', 'attpg', 'attpg2', 'quotex', 'tahta']
handler.tags = ['sticker']
export default handler