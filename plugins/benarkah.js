// Jangan buly saya om saya cuma bercanda:)


let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Iya','Sudah pasti','Sudah pasti bisa','Tidak','Tentu tidak','Sudah pasti tidak'])}
`.trim(), m)
}
handler.help = ['benarkah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^benarkah/i
handler.owner = false

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

