let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, `Tidak ada voting digrup ini!`, wm, 'Mulai', `${usedPrefix}+vote`, m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Kamu sudah vote!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
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
    `.trim()
const buttons = [
	   { buttonId: `${usedPrefix}upvote`, buttonText: { displayText: 'upvote' }, type: 1 },
          { buttonId: `${usedPrefix}devote`, buttonText: { displayText: 'devote' }, type: 1 }
	  ]
const buttonMessage = {
    text: caption,
    footer: global.wm,
    buttons: buttons,
    headerType: 1
}
conn.sendMessage(m.chat, buttonMessage, {quoted:m})
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i

export default handler
