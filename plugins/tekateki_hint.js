let handler = async (m, { conn }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (!(id in conn.tekateki)) throw false
    let json = conn.tekateki[id][1]
    let isSurrender = /^me(nyerah|nyerahtek)$/i
        if (isSurrender) {
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontekateki, m)
        }
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahtek']
    ], m)
}
handler.command = /^htek$/i

handler.limit = true

export default handler