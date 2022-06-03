let handler = async (m, { conn }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (!(id in conn.tebakkimia)) throw false
    let json = conn.tebakkimia[id][1]
    let isSurrender = /^me(nyerah|nyerahkim)$/i
        if (isSurrender) {
            clearTimeout(this.tebakkimia[id][3])
            delete this.tebakkimia[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakkimia, m)
        }
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahkim']
    ], m)
}
handler.command = /^hkim$/i

handler.limit = true

export default handler