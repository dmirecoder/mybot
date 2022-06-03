import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  
  if (command == 'apkdone') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let x = jsons.result
        //APK Search
        let caption = `*⎔┉━「 APK Search 」━┉⎔*
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Version : ${x.apps_version}
Rate : ${x.apps_rate}
Tag : ${x.apps_tag}
`.trim()
        conn.sendButton(m.chat, caption, author, null, [
        ['Nyerah', 'menyerahtek']
    ], m)
}
if (command == 'apkgoogle') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let x = jsons.result
        let caption = `*⎔┉━「 APK Search 」━┉⎔*
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Tag : ${x.apps_tag}
`.trim()
        conn.sendButton(m.chat, caption, author, x.apps_thumb, [
        ['Nyerah', 'menyerahtek']
    ], m)
}
if (command == 'apkmody') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let x = jsons.result
        let caption = `*⎔┉━「 APK Search 」━┉⎔*
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Desc : ${x.desc}
`.trim()
        conn.sendButton(m.chat, caption, author, null, [
        ['Nyerah', 'menyerahtek']
    ], m)
}
if (command == 'apkshub') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps={text}&apikey=4ca83deeb14d61d16cf0$`)
        let jsons = await json.json()
        let x = jsons.result
        let caption = `*⎔┉━「 APK Search 」━┉⎔*
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
View : ${x.apps_views}
`.trim()
        conn.sendButton(m.chat, caption, author, x.apps_thumb, [
        ['Nyerah', 'menyerahtek']
    ], m)
}
if (command == 'happymod') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/happymod?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let x = jsons.result
        let caption = `*⎔┉━「 APK Search 」━┉⎔*
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Rate : ${x.apps_rate}
`.trim()
        conn.sendButton(m.chat, caption, author, x.apps_thumb, [
        ['Nyerah', 'menyerahtek']
    ], m)
}
if (command == 'hostapk') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let x = jsons.result
        let caption = `*⎔┉━「 APK Search 」━┉⎔*
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Rilis : ${x.apps_released}
Athor : ${x.apps_author}
Desc : ${x.apps_desc}
`.trim()
        conn.sendButton(m.chat, caption, author, x.apps_thumb, [
        ['Nyerah', 'menyerahtek']
    ], m)
}
if (command == 'revdl') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let x = jsons.result
        let caption = `*⎔┉━「 APK Search 」━┉⎔*
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
`.trim()
        conn.sendButton(m.chat, caption, author, x.apps_thumb, [
        ['Nyerah', 'menyerahtek']
    ], m)
}
if (command == 'toraccino') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json()
        let x = jsons.result
        let caption = `*⎔┉━「 APK Search 」━┉⎔*
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
Tag : ${x.apps_tag}
Rilis : ${x.apps_upload}
Athor : ${x.apps_author}
Desc : ${x.apps_desc}
`.trim()
        conn.sendButton(m.chat, caption, author, x.apps_thumb, [
        ['Nyerah', 'menyerahtek']
    ], m)
}
if (command == 'uapkpro') {
let json = await fetch(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
        let jsons = await json.json)
        let x = jsons.result
        let caption = `*⎔┉━「 APK Search 」━┉⎔*
🤠 *Name* : *${x.apps_name}*
Link : ${x.apps_linkdl}
`.trim()
        conn.sendButton(m.chat, caption, author, null, [
        ['Nyerah', 'menyerahtek']
    ], m)
}

}
handler.command = handler.help = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro']
handler.tags = ['internet']

export default handler