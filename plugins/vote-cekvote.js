let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, `Tidak ada voting digrup ini!`, '© Hinata-Md', 'Mulai', `${usedPrefix}+vote`, m)
    let [reason, upvote, devote] = conn.vote[id]
    let caption = `
「 *Vote* 」
*Alasan:* ${reason}
*Upvote*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split`@`[0]).join('\n')}
*Devote*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split`@`[0]).join('\n')}
wm
    `.trim()
const buttons = [
	   { buttonId: `${usedPrefix}upvote`, buttonText: { displayText: 'upvote' }, type: 1 },
          { buttonId: `${usedPrefix}devote`, buttonText: { displayText: 'devote' }, type: 1 },
          { buttonId: `${usedPrefix}-vote`, buttonText: { displayText: 'hapus' }, type: 1 }
	  ]
const buttonMessage = {
    text: caption,
    footer: global.wm,
    buttons: buttons,
    headerType: 1
}
conn.sendMessage(m.chat, buttonMessage, {quoted:m})
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i

export default handler
