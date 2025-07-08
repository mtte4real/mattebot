let handler = async (m, { conn }) => {

    const createVCard = (name, number, role) => {
        return `BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:ChatUnity;
TEL;type=CELL;type=VOICE;waid=${number}:+${number}
X-ABLabel:${role}
END:VCARD`.replace(/\n/g, '\r\n');
    };

    await conn.sendMessage(m.chat, { 
        contacts: { 
            displayName: '👥 ChatUnity Staff', 
            contacts: [
                { vcard: createVCard('Creatore', '393515533859', 'Founder') },
                { vcard: createVCard('Finanziatore', '393803482529', 'Financer') },
                { vcard: createVCard('Promoter', '393534243103', 'Promoter') },

                // Team Sviluppo
                { vcard: createVCard('Developer 1', '393935731102', 'Developer') },
                { vcard: createVCard('Developer 2', '447365589428', 'Developer') },
                { vcard: createVCard('Developer 3', '590590596699', 'Developer') },
                { vcard: createVCard('Developer 4', '393518419909', 'Developer') },
                { vcard: createVCard('Developer 5', '‪639121920206‬', 'Developer') },
                { vcard: createVCard('Developer 6', '393509368693', 'Developer') },
                { vcard: createVCard('Developer 7', '393201448716', 'Developer') },
                { vcard: createVCard('Developer 8', '393476686131', 'Developer') }
            ]
        }
    }, { quoted: m });
};

handler.help = ['staff'];
handler.tags = ['info'];
handler.command = ['staff', 'team'];

export default handler;