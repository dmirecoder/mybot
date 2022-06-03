import fetch from 'node-fetch'
const defaultLang = 'id'

let handler = async (m, { args, usedPrefix, command }) => {
if (!text) throw `Contoh:
${usedPrefix + command} [pcountry] [category]
${usedPrefix + command} id hukum`

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    let src = await (await fetch(`https://newsapi.org/v2/top-headlines?category=${text}&country=${lang}&apiKey=916be7f6341f4cd3991d4c3937707d30`)).json()
    let xxx = src.articles
    let xs = xxx.source
    let xa = xxx.author
    let xt = xxx.title
    let xd = xxx.description
    let xu = xxx.url
    let xut = xxx.urlToImage
    let xp = xxx.publishedAt
    
    let caption = `
Source : ${xs.name}
Author : *${xa}*
Judul : *${xt}*
Desc : ${xd}
Url : ${xu}
Img : ${xut}
Publish : *${xp}*

`.trim()
 await conn.reply(m.chat, caption, m),


}
handler.help = ['news2'].map(v => v + ' <category> <lang>')
handler.tags = ['tools']
handler.command = /^(news2|berita2)$/i

export default handler