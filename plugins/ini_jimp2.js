
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!text) return m.reply(`Balas gambar dengan perintah
    ${usedPrefix + command} effect 20
*List effect:*
pixelate
posterize
rotate`)
    
    let img = await q.download?.()
    let url = await uploadImage(img)
  
  let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
    let images = `https://violetics.pw/api/jimp/${thm}?apikey=beta&img=${url}&level=${text1}`
    
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: '❇️ Effect'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Jimp2 」━┉⎔*
🤠 *Query* : ${url}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
//lo mau apa??
handler.help = ['jimp2 efek level']
handler.tags = ['maker']
handler.command = /^(jimp2)$/i

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}