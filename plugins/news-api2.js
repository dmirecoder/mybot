import fetch from 'node-fetch'
const defaultLang = 'id'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `Contoh:
${usedPrefix + command} [category]
*List:*
antara
bbc
cnbc
cnn
daily
detik
fajar
idn
indozone
inews
kompas
kontan
kumparan
merdeka
metro
okezone
republika
sindo
tempo
tribun
viva`

    let text = args.slice(1).join(' ')
    let src = await (await fetch(`https://dhn-api.herokuapp.com/api/news/${text}?apikey=4ca83deeb14d61d16cf0`)).json()
    let xxx = src.articles
    let xs = xxx.berita
    let xa = xxx.berita_url
    
    let caption = `
    *Berita*
*Source :* ${xa}
Berita : ${xs}
`.trim()
 await conn.reply(m.chat, caption, m),

}
handler.help = ['news'].map(v => v + ' <category>')
handler.tags = ['tools']
handler.command = /^(news|berita)$/i

export default handler