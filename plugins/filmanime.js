import fetch from 'node-fetch'
import axios from 'axios'
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Film Animenya', m)

	let res = await fetch(`https://api.lolhuman.xyz/api/lk21?apikey=sanzychan01&query=${text}`)
	 json = await res.json()
  let {
    title,
    genre,
    rating,
    link,
    desc,
  } = json.result
	 	let hasil = `*🎥Film Dari ${text}*\n\n🏷️Judul : ${title}\n🔖Genre: : ${genre}\n⭐Rating : ${rating}\n🎥Link Movie : ${link}\n📖Sinopsis : ${desc}`.trim()
    conn.sendButton(m.chat, json.result.thumbnail, hasil, '© Hinata-Md', 'Internet', '.? internet', m)
}
handler.help = ['filmanime', 'film'].map(v => v + '<film>')
handler.tags = ['internet', 'anime']

handler.command = /^film(anime)?$/i

handler.limit = true

export default handler