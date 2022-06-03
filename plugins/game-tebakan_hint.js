let handler = async (m, { conn }) => {
    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (!(id in conn.tebaktebakan)) throw false
    let json = conn.tebaktebakan[id][1]
    let isSurrender = /^me(nyerah|nyerahteb)$/i
        if (isSurrender) {
            clearTimeout(this.tebaktebakan[id][3])
            delete this.tebaktebakan[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebaktebakan, m)
        }
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahteb']
    ], m)
}
handler.command = /^hteb$/i

handler.limit = true

export default handler