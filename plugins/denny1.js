
let handler = async (m, { conn, isAdmin }) => {  
    // Numero autorizzato
    const numeroAutorizzato = '639504425950@s.whatsapp.net'; // Sostituisci con il numero autorizzato

    // Verifica se l'utente che esegue il comando è il numero autorizzato
    if (m.sender !== numeroAutorizzato) {
        await conn.sendMessage(m.chat, { text: '𝑵𝒐𝒏 𝒔𝒆𝒊 𝒅𝒆𝒈𝒏𝒐 𝒅𝒊 𝒒𝒖𝒆𝒔𝒕𝒐 𝒑𝒐𝒕𝒆𝒓𝒆 𝒎𝒆𝒎𝒆𝒛 𝒊𝒐 𝒔𝒐𝒏𝒐 𝒍𝒂 𝑸𝒖𝒆𝒆𝒏' });
        return;
    }

    if (m.fromMe) return;
    if (isAdmin) throw 'ok';

    try {  
        // Invia il messaggio prima di eseguire l'azione
        await conn.sendMessage(m.chat, { text: '"𝑳𝒆 𝒓𝒆𝒈𝒊𝒏𝒆 𝒏𝒐𝒏 𝒂𝒔𝒑𝒆𝒕𝒕𝒂𝒏𝒐 𝒑𝒆𝒓𝒎𝒆𝒔𝒔𝒊."' });

        // Promuove l'utente a admin
        await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote");
    } catch {
        await m.reply('coglione non sai fare nulla e vuoi diventare Dio 😂');
    }
};

handler.command = /^denny|trans$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;