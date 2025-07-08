let richiestaInAttesa = {};

let handler = async (m, { conn, isAdmin, isBotAdmin, args, usedPrefix, command }) => {
  if (!m.isGroup) return;

  // 1️⃣ Controllo se l'utente ha risposto con un numero dopo "gestisci"
  if (richiestaInAttesa[m.sender]) {
    const numeroRaw = m.text || m.body || (m.message?.conversation) || '';
    const numero = parseInt(numeroRaw.trim());
    delete richiestaInAttesa[m.sender];
    if (isNaN(numero) || numero <= 0) {
      return m.reply("❌ Numero non valido. Usa un numero > 0.");
    }
    const groupId = m.chat;
    const pending = await conn.groupRequestParticipantsList(groupId);
    const daAccettare = pending.slice(0, numero);
    let accettati = 0;
    for (let p of daAccettare) {
      try {
        await conn.groupRequestParticipantsUpdate(groupId, [p.jid], 'approve');
        accettati++;
      } catch {}
    }
    return m.reply(`✅ Accettate ${accettati} richieste.`);
  }

  // 2️⃣ Comando iniziale
  if (!isBotAdmin) return m.reply("❌ Devo essere admin per gestire richieste.");
  if (!isAdmin) return m.reply("❌ Solo admin del gruppo possono usare questo command.");

  const groupId = m.chat;
  const pending = await conn.groupRequestParticipantsList(groupId);
  if (!pending.length) return m.reply("✅ Non ci sono richieste in sospeso.");

  if (!args[0]) {
    const text = `📨 Richieste in sospeso: ${pending.length}\nSeleziona un'opzione:`;
    return conn.sendMessage(m.chat, {
      text,
      footer: 'Gestione richieste gruppo',
      buttons: [
        { buttonId: `${usedPrefix}${command} accetta`, buttonText: { displayText: "✅ Accetta tutte" }, type: 1 },
        { buttonId: `${usedPrefix}${command} rifiuta`, buttonText: { displayText: "❌ Rifiuta tutte" }, type: 1 },
        { buttonId: `${usedPrefix}${command} accetta39`, buttonText: { displayText: "🇮🇹 Accetta +39" }, type: 1 },
        { buttonId: `${usedPrefix}${command} gestisci`, buttonText: { displayText: "📥 Gestisci richieste" }, type: 1 }
      ],
      headerType: 1,
      viewOnce: true
    }, { quoted: m });
  }

  if (args[0] === 'accetta') {
    const numero = parseInt(args[1]);
    const lista = isNaN(numero) || numero <= 0 ? pending : pending.slice(0, numero);
    let accettati = 0;
    for (let p of lista) {
      try {
        await conn.groupRequestParticipantsUpdate(groupId, [p.jid], 'approve');
        accettati++;
      } catch {}
    }
    return m.reply(`✅ Accettate ${accettati} richieste.`);
  }

  if (args[0] === 'rifiuta') {
    let rifiutati = 0;
    for (let p of pending) {
      try {
        await conn.groupRequestParticipantsUpdate(groupId, [p.jid], 'reject');
        rifiutati++;
      } catch {}
    }
    return m.reply(`❌ Rifiutate ${rifiutati} richieste.`);
  }

  if (args[0] === 'accetta39') {
    let accettati = 0;
    for (let p of pending) {
      const name = p.name || p.notify || '';
      if (/\+39/.test(name)) {
        try {
          await conn.groupRequestParticipantsUpdate(groupId, [p.jid], 'approve');
          accettati++;
        } catch {}
      }
    }
    return m.reply(`✅ Accettate ${accettati} con +39.`);
  }

  if (args[0] === 'gestisci') {
    richiestaInAttesa[m.sender] = true;
    return m.reply("✏️ Quante richieste vuoi accettare? Invia un numero (es. 2)");
  }
};

handler.command = ['richieste'];
handler.tags = ['gruppo'];
handler.help = ['richieste'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
handler.limit = false;

export default handler;