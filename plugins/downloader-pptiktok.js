import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*[❗INFO❗] Masukan Nama User Tiktok Yang Ingin Diambil Fotonya*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] Sukses Mengambil Foto User ${text}*`, m, false)
}
handler.help = ['tiktokfoto <user>']
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|pptiktok)$/i
export default handler
