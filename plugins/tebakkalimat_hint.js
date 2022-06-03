let handler = async (m, { conn }) => {
    conn.tebakkalimat = conn.tebakkalimat ? conn.tebakkalimat : {}
    let id = m.chat
    if (!(id in conn.tebakkalimat)) throw false
    let json = conn.tebakkalimat[id][1]
    let isSurrender = /^me(nyerah|nyerahkim)$/i
        if (isSurrender) {
            clearTimeout(this.tebakkimia[id][3])
            delete this.tebakkimia[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakkimia, m)
        }
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahkal']
    ], m)
}
handler.command = /^hkal$/i

handler.limit = true

export default handler