let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Example : ${usedPrefix + command} bj \n*List Efek:*\nbj\nero\ncum\nles\nneko\nfeet\nyuri\ntrap\nngif\nlewd\nfeed\neron\nsolo\ngasm\npoke\nanal\nholo\nketa\ntits\nkuni\nkiss\nerok\nsmug\nbaka\nsolog\nfeetg\nlewdk\nwaifu\npussy\ntickle\nfemdom\ncuddle\nhentai\neroyuri\ncum_jpg\nblowjob\nerofeet\nholoero\nclassic\nerokemo\nfox_girl\nfutanari\nhololewd\nlewdkemo\nwallpaper\npussy_jpg\nkemonomimi\nnsfw_avatar\nnsfw_neko_gif\nrandom_hentai_gif`)
        let images = `https://api.lolhuman.xyz/api/random/nsfw/${text}?apikey=9b817532fadff8fc7cb86862`
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
handler.help = ['randem2 <keyword>']
handler.tags = ['tools']
handler.command = /^(randem2)$/i

export default handler