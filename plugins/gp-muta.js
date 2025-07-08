import fetch from 'node-fetch';

const ownerJid = '393515533859@s.whatsapp.net'; // Numero creatore

const handler = async (message, { conn, command, text, isAdmin }) => {
  if (!isAdmin) throw 'ⓘ 𝐒𝐨𝐥𝐨 𝐮𝐧 𝐚𝐦𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐭𝐨𝐫𝐞 𝐩𝐮ò 𝐞𝐬𝐞𝐠𝐮𝐢𝐫𝐞 𝐪𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 👑';

  const chatId = message.chat;
  const mentionedUser = message.mentionedJid?.[0]
    || message.quoted?.sender
    || (text.trim().replace(/\D/g, '') + '@s.whatsapp.net');

  if (!mentionedUser) {
    const prompt = command === 'muta'
      ? '𝐓𝐚𝐠𝐠𝐚 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐝𝐚 𝐦𝐮𝐭𝐚𝐫𝐞 👤'
      : '𝐓𝐚𝐠𝐠𝐚 𝐥𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐝𝐚 𝐬𝐦𝐮𝐭𝐚𝐫𝐞 👤';
    return conn.reply(chatId, prompt, message);
  }

  const groupMetadata = await conn.groupMetadata(chatId);
  const groupOwner = groupMetadata.owner || chatId.split('-')[0] + '@s.whatsapp.net';

  if (mentionedUser === groupOwner || mentionedUser === ownerJid)
    throw 'ⓘ 𝐈𝐥 𝐜𝐫𝐞𝐚𝐭𝐨𝐫𝐞 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐩𝐨 𝐧𝐨𝐧 𝐩𝐮ò 𝐞𝐬𝐬𝐞𝐫𝐞 𝐦𝐮𝐭𝐚𝐭𝐨';

  if (mentionedUser === conn.user.jid)
    throw 'ⓘ 𝐍𝐨𝐧 𝐩𝐮𝐨𝐢 𝐦𝐮𝐭𝐚𝐫𝐞 𝐢𝐥 𝐛𝐨𝐭';

  const userData = global.db.data.users[mentionedUser] || {};
  
  const imageUrl = command === 'muta'
    ? 'https://telegra.ph/file/f8324d9798fa2ed2317bc.png'
    : 'https://telegra.ph/file/aea704d0b242b8c41bf15.png';

  const caption = command === 'muta'
    ? '𝐈 𝐬𝐮𝐨𝐢 𝐦𝐞𝐬𝐬𝐚𝐠𝐠𝐢 𝐯𝐞𝐫𝐫𝐚𝐧𝐧𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐭𝐢'
    : '𝐈 𝐬𝐮𝐨𝐢 𝐦𝐞𝐬𝐬𝐚𝐠𝐠𝐢 𝐧𝐨𝐧 𝐯𝐞𝐫𝐫𝐚𝐧𝐧𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐭𝐢';

  const locationName = command === 'muta' ? 'Utente Mutato' : 'Utente Smutato';

  const alreadyMuted = userData.muto === true;
  if (command === 'muta' && alreadyMuted)
    throw 'ⓘ 𝐐𝐮𝐞𝐬𝐭𝐨 𝐮𝐭𝐞𝐧𝐭𝐞 𝐞’ 𝐠𝐢𝐚 𝐬𝐭𝐚𝐭𝐨 𝐦𝐮𝐭𝐚𝐭𝐨/𝐚 🔇';
  if (command === 'smuta' && !alreadyMuted)
    throw 'ⓘ 𝐐𝐮𝐞𝐬𝐭𝐨 𝐮𝐭𝐞𝐧𝐭𝐞 𝐧𝐨𝐧 𝐞’ 𝐦𝐮𝐭𝐚𝐭𝐨/𝐚';

  userData.muto = command === 'muta';
  global.db.data.users[mentionedUser] = userData;

  const thumbnail = await (await fetch(imageUrl)).buffer();

  const fakeContact = {
    key: {
      fromMe: false,
      participant: '0@s.whatsapp.net',
      id: 'mutato'
    },
    message: {
      locationMessage: {
        name: locationName,
        jpegThumbnail: thumbnail
      }
    }
  };

  await conn.reply(chatId, caption, fakeContact, { mentions: [mentionedUser] });
};

handler.command = /^(muta|smuta)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;