let handler = async (m, { command, text }) => m.reply(`*╔═╼─╾─╾═【🕸️】═╼─╾╾─╾═╗*
*رد تــلــقــائــي🧑🏻‍💻*
*╔⟐━───━┓🕸️┏━───━⟐╗*
*❆🎭┊الــلــقـب*
*〘〙*
*❆♟️┊مــن أنمي* 
*〘〙*
*❆♋┊لـقـب احـتـيـاطـي*
*〘〙*
*❆⁉️┊بـنـت او ولـد*
*〘〙*
*❆🧭┊مـن طـرف* 
*〘〙*
*❆📊┊افـضل ثلاث اعمال شاهدتها*
*🥇〘〙*
*🥈〘〙*
*🥉〘〙*
*╚⟐━───━┛🕸️┗━───━⟐╝*
*❈↲لملئ الإستمارة يرجى النسخ وملء الفراغات*
*❈↲بعد ملئ الاستمارة منشن احد المشرفين*
*❈↲يرجى ارفاق صورة للقب*
*✦━━━━━━[ *SASA* ]━━━━━━✦`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(الاستماره|1|استماره\استمارة)$/i

export default handler