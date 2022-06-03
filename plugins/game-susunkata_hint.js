let handler = async (m, { conn }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (!(id in conn.susunkata)) throw false
    let json = conn.susunkata[id][1]
    let isSurrender = /^me(nyerah|nyerahasu)$/i
        if (isSurrender) {
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttonsusunkata, m)
        }
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahasu']
    ], m)
}
handler.command = /^hasu$/i

handler.limit = true

export default handler