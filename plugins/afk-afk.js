let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    let caption = `${conn.getName(m.sender)} Sekarang lagi AFK\nMungkin Dia Lelah${text ? ': ' + text : ''}`
conn.sendButton(m.chat, caption, author, null, [
        ['Ikut', '.afk Gwe ikut afk bang :l']
    ], m)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
//tes
