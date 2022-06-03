let handler = async (m, { conn }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (!(id in conn.tebaklagu)) throw false
    let json = conn.tebaklagu[id][1]
    let isSurrender = /^me(nyerah|nyerahlag)$/i
        if (isSurrender) {
            clearTimeout(this.tebaklagu[id][3])
            delete this.tebaklagu[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebaklagu, m)
        }
    conn.sendButton(m.chat, '```' + json.judul.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahlag']
    ], m)
}
handler.command = /^hlag$/i

handler.limit = true

export default handler