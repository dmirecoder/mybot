import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
 let text = args.slice(1).join(' ')
let res = await fetch(`https://freesound.org/apiv2/search/text/?format=json&query=${text}&token=TJEbxX84wKTySiEtUPxhm8b2WCi5Izak0h9nNDbO`)
if (res.status != 200) throw await res.text()
let json = await res.json()
let aidi = json.results.id
let ris = await fetch(`https://freesound.org/apiv2/sounds/${aidi}/?format=json`)
let jsin = await ris.json()
let rengs = jsin.previews[4]
conn.sendFile(m.chat, rengs, 'tts.mp3', null, m, true)
  
}
handler.help = ['sfx <teks>']
handler.tags = ['tools']
handler.command = /^(sfx)$/i

export default handler
