import { promises } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!/audio/.test(mime)) throw `Balas vn/audio yang ingin diubah dengan caption *${usedPrefix + command}*`
        let audio = await q.download?.()
        if (!audio) throw 'Can\'t download audio!'
        if (!args[0] || !args[1]) throw 'xample: .bass 10 10'
        if (isNaN(args[0]) || isNaN(args[1])) return m.reply('Pake angka')
        let set
        if (/bass/.test(command)) set = `-af equalizer=f=${args[0]}:width_type=o:width=2:g=${args[1]}`
        if (/volume/.test(command)) set = `-af volume=${args[0]} -vcodec copy`
        if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
        if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
        if (/earrape/.test(command)) set = '-af volume=12'
        if (/fast/.test(command)) set = `-filter:a "atempo=1.63,asetrate=${args[0]}"`
        if (/fat/.test(command)) set = `-filter:a "atempo=1.6,asetrate=22100"`
        if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
        if (/reverse/.test(command)) set = '-filter_complex "areverse"'
        if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
        if (/slow/.test(command)) set = `-filter:a "atempo=1.0,asetrate=${args[0]}"`
        if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
        if (/tupai|squirrel|chipmunk/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
        if (/vibra/.test(command)) set = '-filter_complex "vibrato=f=15"'
        let ran = (new Date * 1) + '.mp3'
        let media = '../tmp/' + ran
        let filename = media + '.mp3'
        await promises.writeFile(media, audio)
        exec(`ffmpeg -i ${media} ${set} ${filename}`, async (err) => {
            await promises.unlink(media)
            if (err) return Promise.reject( `_*Error!*_`)
            let buff = await promises.readFile(filename)
            m.reply(wait)
            conn.sendFile(m.chat, buff, ran, null, m, /vn/.test(args[0]), { quoted: m, mimetype: 'audio/mp4' })
            await promises.unlink(filename)
        })
    } catch (e) {
        throw e
    }
}
handler.help = ['bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'tupai', 'vibra', 'volume'].map(v => v + ' [vn]')
handler.tags = ['audio']
handler.command = /^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|smooth|tupai|squirrel|chipmunk|vibra|volume)$/i

export default handler
