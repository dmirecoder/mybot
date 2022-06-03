import fetch from 'node-fetch'

let handler = async (m, { args, text, usedPrefix, command }) => {
if (!text) throw `Contoh:
${usedPrefix + command} gustixa`

    let text = args.slice(1).join(' ')

    let src = await (await fetch(`https://anabotofc.herokuapp.com/api/jooxsearch?apikey=AnaBot&query=${text}`)).json()
    let xxx = src.result
    let xs = xxx.album_id
    let xa = xxx.id
    let xt = xxx.name
    let xd = xxx.album_name
    let xu = xxx.artist_list.name
    let xut = xxx.images.url
    let xp = xxx.vip_flag
    
    let caption = `
Album id : ${xs.name}
ID : *${xa}*
Judul : *${xt}*
Albun : ${xd}
Artist : ${xu}
Img : ${xut}
Vip : *${xp}*

`.trim()
 await conn.reply(m.chat, caption, m),


}
handler.help = ['jooxs'].map(v => v + ' <penyanyi>')
handler.tags = ['tools']
handler.command = /^(jooxs)$/i

export default handler