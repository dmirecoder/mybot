let handler = async (m, { conn }) => {
    conn.tebaksiapa = conn.tebaksiapa ? conn.tebaksiapa : {}
    let id = m.chat
    if (!(id in conn.tebaksiapa)) throw false
    let json = conn.tebaksiapa[id][1]
    let isSurrender = /^me(nyerah|nyerahsia)$/i
        if (isSurrender) {
            clearTimeout(this.tebaksiapa[id][3])
            delete this.tebaksiapa[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebaksiapa, m)
        }
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahsia']
    ], m)
}
handler.command = /^hsia$/i

handler.limit = true

export default handler