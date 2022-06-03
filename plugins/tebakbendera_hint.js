let handler = async (m, { conn }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (!(id in conn.tebakbendera)) throw false
    let json = conn.tebakbendera[id][1]
    let isSurrender = /^me(nyerah|nyerahben)$/i
        if (isSurrender) {
            clearTimeout(this.tebakbendera[id][3])
            delete this.tebakbendera[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakbendera, m)
        }
    conn.sendButton(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahben']
    ], m)
}
handler.command = /^hben$/i

handler.limit = true

export default handler