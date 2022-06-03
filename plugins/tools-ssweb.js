let handler = async (m, { conn, command, args }) => {
	if (!args[0]) return m.reply(`Masukkan URL dengan awalan *https://*`
	let res = `https://violetics.pw/api/media/ssweb?apikey=beta&url=${args[0]}`
	conn.sendButton(m.chat, `Screenshot Image ${command.capitalize()}`, res, res, [['Next', `/${command}`]], m)
}
handler.help = ['ss', 'ssf']
handler.tags = ['tools']
handler.alias = ['ss', 'ssf', 'ssweb', 'sswebf']
handler.command = /^ss(web)?f?$/i

export default handler
