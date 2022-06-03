let handler = async (m, { conn }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (!(id in conn.tebakanime)) throw false
    let json = conn.tebakanime[id][1]
    let isSurrender = /^me(nyerah|nyerahani)$/i
        if (isSurrender) {
            clearTimeout(this.tebakanime[id][3])
            delete this.tebakanime[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakanime, m)
        }
    conn.sendButton(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahani']
    ], m)
}
handler.command = /^hani$/i

handler.limit = true

export default handler