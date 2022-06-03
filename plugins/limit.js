let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    conn.sendButton(m.chat, `*${global.db.data.users[who].limit}* Limit Tersisa`, author, null, [
        ['BELI', '.buy'],
        ['Chit', '.ngechit']
    ], m)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
export default handler
