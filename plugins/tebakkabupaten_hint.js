let handler = async (m, { conn }) => {
    conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (!(id in conn.tebakkabupaten)) throw false
    let json = conn.tebakkabupaten[id][1]
    let isSurrender = /^me(nyerah|nyerahkab)$/i
        if (isSurrender) {
            clearTimeout(this.tebakkabupaten[id][3])
            delete this.tebakkabupaten[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakkabupaten, m)
        }
    conn.sendButton(m.chat, '```' + json.title.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahkab']
    ], m)
}
handler.command = /^hkab$/i

handler.limit = true

export default handler