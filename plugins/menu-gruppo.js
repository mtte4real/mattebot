import { promises as fs } from 'fs';

let handler = async (m, { conn, usedPrefix }) => {
  const botName = global.db.data.nomedelbot || "ᴼʳⁱᵍⁱⁿ ᴮᵒᵗ✦";

  const menuText = `
╭━━━❰ *𝐌𝐞𝐧𝐮 𝐆𝐫𝐮𝐩𝐩𝐨* ❱━━━⬣
┃
┃ - *"𝐛𝐨𝐭 (𝐢𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐳𝐚 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥𝐞)"*
┃ - *"𝐢𝐚 (𝐢𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐳𝐚 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥𝐞)"*
┃ - *"𝐩𝐥𝐚𝐲 (𝐜𝐚𝐧𝐳𝐨𝐧𝐞 + 𝐚𝐫𝐭𝐢𝐬𝐭𝐚)"*
┃ - *"𝐯𝐢𝐝𝐞𝐨 (𝐜𝐚𝐧𝐳𝐨𝐧𝐞 + 𝐚𝐫𝐭𝐢𝐬𝐭𝐚)"*
┃ - *"𝐬𝐡𝐚𝐳𝐚𝐦 (𝐚𝐮𝐝𝐢𝐨)"*
┃ - *"𝐦𝐞𝐭𝐞𝐨 (𝐜𝐢𝐭𝐭𝐚' )"*
┃ - *"𝐡𝐝 (𝐟𝐨𝐭𝐨)"*
┃ - *"𝐥𝐞𝐠𝐠𝐢 (𝐟𝐨𝐭𝐨)"*
┃ - *"𝐫𝐢𝐦𝐮𝐨𝐯𝐢𝐬𝐟𝐨𝐧𝐝𝐨 (𝐟𝐨𝐭𝐨)"*
┃ - *"𝐬𝐞𝐠𝐚 (𝐧𝐨𝐦𝐞)"*
┃ - *"𝐝𝐢𝐭𝐚𝐥𝐢𝐧𝐨 (𝐧𝐨𝐦𝐞)"*
┃ - *"𝐢𝐧𝐬𝐮𝐥𝐭𝐚 (𝐧𝐨𝐦𝐞)"*
┃ - *"𝐪𝐫𝐜𝐨𝐝𝐞 (𝐭𝐞𝐬𝐭𝐨)"*
┃ - *"𝐫𝐢𝐯𝐞𝐥𝐚 (𝐟𝐨𝐭𝐨¹)"*
┃ - *"𝐬𝐭𝐲𝐥𝐞𝐭𝐞𝐱𝐭 (𝐭𝐞𝐬𝐭𝐨)"*
┃ - *"𝐜𝐚𝐥𝐜 (𝟏+𝟏)"*
┃ - *"𝐦𝐬𝐠/𝐚𝐭𝐭𝐢𝐯𝐢𝐭𝐚' @"*
┃ - *"𝐜𝐨𝐧𝐭𝐚𝐩𝐚𝐫𝐨𝐥𝐞 (𝐭𝐞𝐬𝐭𝐨)"*
┃ - *"𝐛𝐞𝐥𝐥𝐨/𝐚 @"*
┃ - *"𝐠𝐚𝐲 @"*
┃ - *"𝐩𝐮𝐭𝐭𝐚𝐧𝐚 @"*
┃ - *"𝐥𝐞𝐬𝐛𝐢𝐜𝐚 @"*
┃ - *"𝐢𝐧𝐬𝐮𝐥𝐭𝐚 @"*
┃ - *"𝐬𝐜𝐨𝐩𝐚 @"*
┃ - *"𝐚𝐛𝐛𝐫𝐚𝐜𝐜𝐢𝐚 @"*
┃ - *"𝐨𝐝𝐢𝐨 @"*
┃ - *"𝐚𝐦𝐨𝐫𝐞 @"*
┃ - *"𝐝𝐨𝐱 @"*
┃ - *"𝐢𝐝 (𝐠𝐫𝐮𝐩𝐩𝐨)"*
┃ - *"𝐠𝐢𝐭𝐜𝐥𝐨𝐧𝐞"*
┃ - *"𝐢𝐦𝐠"*
┃ - *"𝐬𝐞𝐭𝐢𝐠"*
┃ - *"𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐢𝐠"*
┃ - *"𝐭𝐫𝐢𝐬"*
┃ - *"𝐬𝐩𝐨𝐬𝐚𝐦𝐢"*
┃ - *"𝐜𝐫𝐮𝐬𝐡"*
┃ - *"𝐭𝐨𝐩𝐠𝐚𝐲𝐬"*
┃ - *"𝐭𝐨𝐩𝐧𝐚𝐳𝐢"*
┃ - *"𝐭𝐭𝐩"*
┃ - *"𝐝𝐚𝐝𝐨"*
┃ - *"𝐬𝐭𝐢𝐜𝐤𝐞𝐫 / 𝐬"*
┃ - *"𝐫𝐢𝐦𝐮𝐨𝐯𝐢𝐬𝐟𝐨𝐧𝐝𝐨"*
┃ - *"𝐭𝐨𝐯𝐢𝐝𝐞𝐨"*
┃ - *"𝐭𝐨𝐠𝐢𝐟"*
┃ - *"𝐚𝐮𝐭𝐨𝐚𝐝𝐦𝐢𝐧"*
┃
╰━━━━━━━━━━━━━━━━━━⬣`.trim();

  await conn.sendMessage(m.chat, {
    text: menuText,
    contextInfo: {
      externalAdReply: {
        title: "ᴼʳⁱᵍⁱⁿ ᴮᵒᵗ✦ - 𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐏𝐎",
        body: "𝐁𝐘 𝐘𝐎𝐔𝐍𝐒 - 𝐓𝐇𝐄 𝐁𝐄𝐒𝐓",
        thumbnail: await fs.readFile('./storage/image/origin.jpg'),
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
     // forwardingScore: 1,
     // isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363370244642449@newsletter',
        serverMessageId: '',
        newsletterName: botName
      }
    }
  }, { quoted: m });
};

handler.help = ['menugruppo'];
handler.tags = ['menu'];
handler.command = /^(menugruppo|gruppo)$/i;

export default handler;
