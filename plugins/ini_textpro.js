let handler = async(m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} neon helo
   *List Efek:*
bear
berry
blackpink
blood
broken
carbon
christmas
circuit
devil
discovery
dropwater
embossed
fiction
firework
glossy
glue
gradient
greenhorror
harrypotter
imglitch
light
magma
metallic
neon
paper
skeleton
sketch
stone
transformer
videogame`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
        let images = `https://api-xcoders.xyz/api/textpro/${thm}?text=${text1}&apikey=xcoders`
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: '❇️ Effect'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Textpro 」━┉⎔*
🤠 *Query* : ${thm}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['textpro <effect> <text>']
handler.tags = ['maker']
handler.command = /^(textpro|textprome)$/i

export default handler