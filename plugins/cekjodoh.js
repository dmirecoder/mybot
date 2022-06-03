import request from 'request'
import cheerio from 'cheerio'

let handler = async (m, { conn, command, text }) => {
let [nama, pasangan] = text.split ` & `

    if (!nama) return conn.reply(m.chat, 'Silahkan masukan namamu', m)
    if (!pasangan) return conn.reply(m.chat, 'Silahkan masukan nama pasanganmu\n\nMisal : Rafael & Dinda', m)

    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1=' + nama + '&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);

let hasil = `
*Kecocokan Berdasarkan Nama*
${d}
`.trim()

      conn.reply(m.chat, hasil, m)
  });
}
handler.help = ['cekjodoh <pasangan>']
handler.tags = ['kerang', 'fun']
handler.command = /^cekjodoh/i

handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

