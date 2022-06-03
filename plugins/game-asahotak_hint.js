let handler = async (m, { conn }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (!(id in conn.asahotak)) throw false
    let json = conn.asahotak[id][1]
    let isSurrender = /^me(nyerah|nyerahasa)$/i
        if (isSurrender) {
            clearTimeout(this.asahotak[id][3])
            delete this.asahotak[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttonasahotak, m)
        }
    conn.sendButton(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerahasa']
    ], m)
}
handler.command = /^hasa$/i

handler.limit = true

export default handler