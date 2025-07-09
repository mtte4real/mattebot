let handler = async (m, { conn, isAdmin }) => {  
    // Numero autorizzato
    const numeroAutorizzato = '66621409462@s.whatsapp.net'; // Sostituisci con il numero autorizzato

    // Verifica se l'utente che esegue il comando è il numero autorizzato
    if (m.sender !== numeroAutorizzato) {
        await conn.sendMessage(m.chat, { text: '𝑵𝒐𝒏 𝒔𝒆𝒊 𝒎𝒂𝒕𝒕𝒆, 𝒏𝒐𝒏 𝒉𝒂𝒊 𝒊𝒍 𝒑𝒐𝒕𝒆𝒓𝒆 𝒄𝒐𝒈𝒍𝒊𝒐𝒏𝒂𝒛𝒛𝒐😂🫵🏻' });
        return;
    }

    if (m.fromMe) return;
    if (isAdmin) throw 'ok';

    try {  
        // Invia il messaggio prima di eseguire l'azione
        await conn.sendMessage(m.chat, { text: '"Immagina matte admin prima di GTA VI"' });

        // Promuove l'utente a admin
        await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote");
    } catch {
        await m.reply('coglione non sai fare nulla e vuoi diventare Dio 😂');
    }
};

handler.command = /^matte$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;