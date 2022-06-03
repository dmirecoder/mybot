import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (id in conn.tebakanime) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakanime[id][0])
        throw false
    }
    let res = await fetch('http://zekais-api.herokuapp.com/tebakanime')
    let json = await res.json()
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hani untuk hani
Bonus: ${poin} XP
    `.trim()
    conn.tebakanime[id] = [
        await conn.sendButton(m.chat, caption, author, json.image, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakanime[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}\nDesk : ${json.desc}*`, author, null, [
                ['tebakanime', '/tebakanime']
            ], conn.tebakanime[id][0])
            delete conn.tebakanime[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i

export default handler

const buttons = [
    ['Hint', '/hani'],
    ['Nyerah', 'menyerahani']
]