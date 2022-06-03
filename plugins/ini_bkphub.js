import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
  try {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} tante`
  let json = await fetch(`https://api-xcoders.xyz/api/search/bokephub?query=${text}&apikey=xcoders`)
  let jsons = await json.json()
        let x = jsons.result
  m.reply(`
Judul *${x.title}*
_Thumb:_ ${x.thumb}
_Url:_ ${x.url}
`.trim())
}
}
handler.help = ['bokephub'].map(v => v + ' <apa>')
handler.tags = ['edukasi']
handler.command = /^(bokephub)$/i

export default handler