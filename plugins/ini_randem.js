let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Example : ${usedPrefix + command} cuddle \n*List Efek:*\n\nbully\ncuddle\ncry\nhug\nawoo\nkiss\nlick\npat\nsmug\nbonk\nyeet\nblush\nsmile\nwave\nsmile\nwave\nhighfive\nhandhold\nnom\nbite\nglomp\nkill\nslap\nhappy\nwink\npoke\ndance\ncringe\nblush`)
        let images = `https://api.lolhuman.xyz/api/random/${text}?apikey=9b817532fadff8fc7cb86862`
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: '❇️ Effect'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Random 」━┉⎔*
🤠 *Query* : ${text}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['randem <keyword>']
handler.tags = ['tools']
handler.command = /^(randem)$/i

export default handler