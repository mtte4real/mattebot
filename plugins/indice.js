import { performance } from 'perf_hooks'

let handler = async (m, { conn }) => {
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groups = chats.filter(([id]) => id.endsWith('@g.us'))
  let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
  let info = `
----------MATTE-BOT🥀🥀-------------
1) 𝔠𝔞𝔭𝔦𝔱𝔬𝔩𝔬 1 𝔥𝔬𝔩𝔩𝔶 𝔳𝔰 𝔤𝔬𝔬𝔡𝔳𝔦𝔟𝔢𝔰
2) 𝔞𝔯𝔞𝔠𝔫𝔬 𝔠𝔥𝔦𝔢𝔡𝔢 𝔞𝔦𝔲𝔱𝔬 𝔞𝔡 𝔥𝔬𝔩𝔩𝔶
3) 𝔦𝔩 𝔡𝔬𝔭𝔬 𝔤𝔲𝔢𝔯𝔯𝔞 𝔡𝔦 𝔞𝔯𝔞𝔠𝔫𝔬
4)𝔲𝔫𝔞 𝔰𝔬𝔠𝔦𝔢𝔱à 𝔫𝔞𝔰𝔠𝔢 𝔡𝔞𝔩𝔩𝔢 𝔠𝔢𝔫𝔢𝔯𝔦
5) 𝔦 𝔟𝔩𝔞𝔫𝔡𝔦𝔯𝔦𝔞𝔫𝔦 𝔢 𝔦𝔩 𝔩𝔬𝔯𝔬 𝔟𝔲𝔫𝔨𝔢𝔯.
6) 𝔩𝔞 𝔫𝔞𝔰𝔠𝔦𝔱𝔞 𝔡𝔦 𝔭𝔞𝔫𝔡𝔢𝔪𝔦𝔞
7) 𝔩𝔞 𝔟𝔢𝔩𝔩𝔢 𝔢𝔭𝔬𝔮𝔲𝔢
8) 𝔩𝔞 𝔭𝔞𝔠𝔢 𝔪𝔬𝔪𝔢𝔫𝔱𝔞𝔫𝔢𝔞.
9) 𝔩’𝔦𝔯𝔞 𝔡𝔦 𝔭𝔞𝔫𝔡𝔢𝔪𝔦𝔞.
10) 𝔩𝔞 𝔤𝔯𝔞𝔫𝔡𝔢 𝔤𝔲𝔢𝔯𝔯𝔞.
11)𝔩𝔢𝔤𝔢𝔫𝔡 𝔫𝔬𝔫 𝔪𝔲𝔬𝔯𝔢 𝔪𝔞𝔦
12)𝔩𝔞 𝔯𝔢𝔰𝔲𝔯𝔯𝔢𝔷𝔦𝔬𝔫𝔢 𝔡𝔦 𝔲𝔫𝔞 𝔰𝔬𝔠𝔦𝔢𝔱à 𝔫𝔬𝔫 𝔠𝔥𝔦𝔩𝔩
13)𝔰𝔠𝔬𝔫𝔱𝔯𝔬 𝔱𝔯𝔞 𝔱𝔦𝔱𝔞𝔫𝔦
14) 𝔦𝔩 𝔯𝔦𝔱𝔬𝔯𝔫𝔬 𝔡𝔦 𝔪𝔬𝔪𝔬 𝔦𝔩 𝔭𝔢𝔫𝔱𝔦𝔱𝔬
15) 𝔤𝔬𝔬𝔡𝔳𝔦𝔟𝔢𝔰 𝔪𝔦𝔫𝔞𝔠𝔠𝔦𝔞 𝔥𝔬𝔩𝔩𝔶
16)𝔲𝔫𝔞 𝔯𝔦𝔳𝔬𝔩𝔲𝔷𝔦𝔬𝔫𝔢 𝔦𝔫 𝔞𝔯𝔯𝔦𝔳𝔬
17) 𝔦𝔩 𝔭𝔞𝔱𝔱𝔬 𝔱𝔯𝔞 𝔩𝔢 𝔠𝔬𝔪𝔪 𝔦𝔱𝔞𝔩𝔦𝔞𝔫𝔢.
-----------MATTE-BOT🥀🥀-------------`.trim()
  conn.reply(m.chat, info, m, false)
}

handler.help = ['indice']
handler.tags = ['fun']
handler.command = /^(indice)$/i
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}