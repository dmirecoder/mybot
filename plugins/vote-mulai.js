let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) return conn.sendButton(m.chat, 'Masih ada vote di chat ini!', wm, 'Hapus', `${usedPrefix}-vote`, m)
    const buttons = [
	   { buttonId: `${usedPrefix}upvote`, buttonText: { displayText: 'upvote' }, type: 1 },
          { buttonId: `${usedPrefix}devote`, buttonText: { displayText: 'devote' }, type: 1 }
	  ]
const buttonMessage = {
    text: `Vote dimulai!
*${usedPrefix}upvote* - untuk setuju
*${usedPrefix}devote* - untuk tidak setuju
*${usedPrefix}cekvote* - untuk mengecek vote
*${usedPrefix}hapusvote* - untuk menghapus vote`,
    footer: global.wm,
    buttons: buttons,
    headerType: 1
}
conn.sendMessage(m.chat, buttonMessage, {quoted:m})
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai|\+)vote$/i

export default handler
