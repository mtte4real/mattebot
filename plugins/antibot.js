// Plugin antibot: attivabile/disattivabile da menu sicurezza

export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (!m.isGroup) return;
    let chat = global.db.data.chats[m.chat];
    if (!chat.antiBot) return; // Disattivato di default e controllato qui

    let delet = m.key.participant;
    let bang = m.key.id;
    if (m.fromMe) return true;

    if (
        (m.id.startsWith('NJX-') ||
        (m.id.startsWith('BAE5') && m.id.length === 16) ||
        (m.id.startsWith('B24E') && m.id.length === 20))
    ) {
        if (isBotAdmin) {
            await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }});
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        }
    }
}