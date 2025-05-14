const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `𝙈𝙀𝙉𝘾𝙄𝙊𝙉𝙀𝙎:* ${pesan}`;
  let teks = `*> 𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝚒𝚜 𝚗𝚘𝚝 𝚏𝚒𝚗𝚊𝚕 𝚏𝚊𝚒𝚕𝚞𝚛𝚎 𝚒𝚜 𝚗𝚘𝚝 𝚏𝚊𝚝𝚊𝚕: 𝙸𝚝 𝚒𝚜 𝚝𝚑𝚎 𝚌𝚘𝚞𝚛𝚊𝚐𝚎 𝚝𝚘 𝚌𝚘𝚗𝚝𝚒𝚗𝚞́𝚎 𝚝𝚑𝚊𝚝 𝚌𝚘𝚞𝚗𝚝𝚜*\n\n *${oi}\n\n➥ _*@tany.salazar._:*_\n`;
  for (const mem of participants) {
    teks += `*🥷🏼 ⇝* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└𝐓𝐚𝐧𝐲 𝐩𝐞 𝐜𝐭𝐦𝐫*`;
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;