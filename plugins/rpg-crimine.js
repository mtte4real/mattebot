let cooldowns = {}

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let users = global.db.data.users;

  // Assicurati che l'utente che invia il comando esista nel DB
  if (!users[m.sender]) {
    users[m.sender] = {
      limit: 10,
      // ...altre proprietà se necessarie
    };
  }

  let senderId = m.sender;
  let senderName = conn.getName(senderId);

  // Identifica il bersaglio: o da reply, o da mention
  let targetId;

  if (m.quoted && m.quoted.sender) {
    targetId = m.quoted.sender;
  } else if (text && m.mentionedJid && m.mentionedJid.length > 0) {
    targetId = m.mentionedJid[0];
  } else {
    return m.reply('🧠 Rispondi a un messaggio *oppure* tagga qualcuno per rubare da quell\'utente.');
  }

  // Evita che l'utente rubi a se stesso
  if (targetId === senderId) {
    return m.reply('🤡 Non puoi rubare a te stesso, idiota.');
  }

  // Assicurati che il target esista nel DB
  if (!users[targetId]) {
    users[targetId] = {
      limit: 10,
      // ...altre proprietà se necessarie
    };
  }

  // Cooldown di 5 minuti
  let cooldownTime = 5 * 60 * 1000; // in ms
  if (cooldowns[senderId] && Date.now() - cooldowns[senderId] < cooldownTime) {
    let tempoRimanente = formattaTempo(Math.ceil((cooldowns[senderId] + cooldownTime - Date.now()) / 1000));
    return m.reply(`🚩 Hai già commesso un crimine, aspetta *⏱ ${tempoRimanente}* prima di tentare di nuovo.`);
  }

  cooldowns[senderId] = Date.now();

  // Quantità rubabile
  let minRubare = 50;
  let maxRubare = 100;
  let quantita = Math.floor(Math.random() * (maxRubare - minRubare + 1)) + minRubare;

  // Esiti: 0=successo, 1=catturato, 2=parziale
  let esito = Math.floor(Math.random() * 3);

  switch (esito) {
    case 0: // Successo completo
      users[senderId].limit += quantita;
      users[targetId].limit = Math.max(0, users[targetId].limit - quantita);
      await conn.sendMessage(m.chat, {
        text: `💰 Hai rubato con successo *${quantita} 💶 UC* da @${targetId.split("@")[0]}!\n\n*+${quantita} 💶* aggiunti al tuo saldo.`,
        mentions: [targetId]
      }, { quoted: m });
      break;

    case 1: // Catturato
      let multa = Math.min(Math.floor(Math.random() * (users[senderId].limit - minRubare + 1)) + minRubare, maxRubare);
      multa = Math.max(0, multa); // evita valori negativi
      users[senderId].limit = Math.max(0, users[senderId].limit - multa);
      await conn.reply(m.chat, `🚔 Sei stato catturato! Multa di *-${multa} 💶 UC* per ${senderName}.`, m);
      break;

    case 2: // Parziale
      let parziale = Math.min(Math.floor(Math.random() * (users[targetId].limit / 2 - minRubare + 1)) + minRubare, maxRubare);
      parziale = Math.max(0, parziale); // evita valori negativi
      users[senderId].limit += parziale;
      users[targetId].limit = Math.max(0, users[targetId].limit - parziale);
      await conn.sendMessage(m.chat, {
        text: `💸 Hai rubato solo *${parziale} 💶 UC* da @${targetId.split("@")[0]}.\n\n*+${parziale} 💶* aggiunti al tuo saldo.`,
        mentions: [targetId]
      }, { quoted: m });
      break;
  }

  global.db.write();
}

handler.tags = ['rpg'];
handler.help = ['ruba'];
handler.command = ['ruba', 'rapina'];
handler.register = true;
handler.group = true;

function formattaTempo(secondi) {
  let minuti = Math.floor(secondi / 60);
  let secondiRimanenti = Math.floor(secondi % 60);
  return `${minuti} minuti e ${secondiRimanenti} secondi`;
}

export default handler;