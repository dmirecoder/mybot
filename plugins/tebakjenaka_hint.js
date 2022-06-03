let handler = async (m, { conn }) => {
    conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
    let id = m.chat
    if (!(id in conn.tebakjenaka)) throw false
    let json = conn.tebakjenaka[id][1]
    let isSurrender = /^me(nyerah|nyerahjen)$/i
        if (isSurrender) {
            clearTimeout(this.tebakjenaka[id][3])
            delete this.tebakjenaka[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakjenaka, m)
        }
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahjen']
    ], m)
}
handler.command = /^hjen$/i

handler.limit = true

export default handler