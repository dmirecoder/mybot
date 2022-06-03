let handler = async (m, { conn }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (!(id in conn.tebaklirik)) throw false
    let json = conn.tebaklirik[id][1]
    let isSurrender = /^me(nyerah|nyerahlir)$/i
        if (isSurrender) {
            clearTimeout(this.tebaklirik[id][3])
            delete this.tebaklirik[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebaklirik, m)
        }
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahlir']
    ], m)
}
handler.command = /^hlir$/i

handler.limit = true

export default handler