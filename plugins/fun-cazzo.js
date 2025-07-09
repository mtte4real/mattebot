let handler = async (m, { conn, command, text }) => {
    // Calcolo del cazzo in base alla volontà di Youns
    let length = Math.floor(Math.random() * 31);

    // Frase ad effetto di Youns
    let finalPhrase = length >= 15 
        ? "🍆 *Wow, decisamente impressionante!*"
        : "😅 *Beh, si dice che la qualità conti più della quantità...*";

    // Messaggio 😎
    let message = `
━━━━━━━━━━━━━━━━━━━━━━━
🤭 *CALCOLATORE DEL CAZZO* 🤭
━━━━━━━━━━━━━━━━━━━━━━━
🥵 *${text} ha un cazzo di lunghezza pari a:*  
⚡ *${length} cm* di pura inutilità! ⚡
━━━━━━━━━━━━━━━━━━━━━━━
${finalPhrase}
`.trim();

    m.reply(message, null, { mentions: conn.parseMention(message) });
};

handler.command = /^(cazzo)$/i;

export default handler;
