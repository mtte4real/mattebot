// antimedia by Onix, di Riad
export async function before(m, { conn }) {
    if (!m.isGroup || m.isBaileys) return true;

    const chat = global.db.data.chats[m.chat];
    if (!chat.antimedia) return true;

    const msg = m.msg || {};
    const type = m.mtype || '';

    // bot escluso
    if (m.sender === conn.user.jid) return true; 

    if (['imageMessage', 'videoMessage'].includes(type)) {
        const isViewOnce = msg?.[type]?.viewOnce;
        const isGif = msg?.videoMessage?.gifPlayback;

        if (!isViewOnce || isGif) {
            // Elimina il messaggio
            await conn.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant || m.sender
                }
            });

            // Messaggio di avviso
            await conn.sendMessage(m.chat, {
                text: `> ⚠️ 𝐀𝐍𝐓𝐈𝐌𝐄𝐃𝐈𝐀 𝐀𝐓𝐓𝐈𝐕𝐎 ⚠️\n 𝐒𝐨𝐥𝐨 𝐟𝐨𝐭𝐨 𝐞 𝐯𝐢𝐝𝐞𝐨 𝐚𝐝 1 𝐯𝐢𝐬𝐮𝐚𝐥 𝐬𝐨𝐧𝐨 𝐩𝐞𝐫𝐦𝐞𝐬𝐬𝐢.`,
                mentions: [m.sender]
            });
        }
    }

    return true;
}