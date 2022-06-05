import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return m.reply(`Contoh penggunaan ${usedPrefix}${command} dumai`)
  let json = await fetch(`https://api-xcoders.xyz/api/info/cuaca/${text}?apikey=hnslrl1882`)
  let jsons = await json.json()
        let x = jsons.result
  m.reply(`
  Kota: *${x.Name}*
  Titik Koordinat: ${x.Longitude}, ${x.Latitude}

  Terbit: ${x.sunrise},
  Terbenam: ${x.sunset},
  Temperatur Suhu: ${x.suhu},
  Kecepatan Angin: ${x.Angin},
  Kelembapan: ${x.Kelembapan}
  Keadaan Cuaca: ${x.Cuaca}, ${x.Keterangan}
  Tekanan Udara: ${x.Udara}
  
`.trim())
}
handler.help = ['cuaca'].map(v => v + ' <apa>')
handler.tags = ['edukasi']
handler.command = /^(cuaca|kota)$/i

export default handler