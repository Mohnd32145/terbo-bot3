import { createHash } from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import { canLevelUp, xpRange } from '../lib/levelling.js';
import fetch from 'node-fetch';
import { promises as fs } from 'fs'; // Using fs.promises directly
import { join } from 'path';
import moment from 'moment-timezone';

const time = moment.tz('Egypt').format('HH');
const wib = moment.tz('Egypt').format('HH:mm:ss');

// Handler function
let handler = async (m, { conn, usedPrefix, command }) => {
    let d = new Date(new Date + 3600000);
    let locale = 'en';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;

    if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات الخاصة بي`;

    let videoUrl = 'https://telegra.ph/file/73ef7488ba7f7f3e613ee.mp4';
    let user = global.db.data.users[who];
    let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = user;
    let { min, xp, max } = xpRange(user.level, global.multiplier);
    let username = conn.getName(who);
    let math = max - xp;
    let prem = global.prems.includes(who.split`@`[0]);
    let sn = createHash('md5').update(who).digest('hex');
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    let more = String.fromCharCode(8206);
    m.react('📂');
    let readMore = more.repeat(850); 
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

    let str = `
┏━━⊜ *◡̈⃝˼‏📁˹ ━━|قسم الاوامر│━━˼📁˹◡̈⃝*
┇≡ *◡̈⃝🧸📌 ⁩ تفضل القائمة يا*  : *${taguser}*
┇≡ *◡̈⃝📝📌قبل كتابة اي امر حط (.)*
┇≡ *◡̈⃝⌚📌وقـت الـتـشـغـيـل ${uptime}
┇≡ *◡̈⃝⏳📌الـتـوقـيـت ${date}
┇≡ *◡̈⃝🕊📌عـدد الـمـسـتـخـدمـيـن ${rtotalreg}
┇≡ *◡̈⃝🧚🏻‍♀️📌 اسـم الـبوت : 𝐓𝐄𝐑𝐁𝐎🤺🔥*
┇≡ *◡̈⃝⚙️📌 الـمنـصه  replit *
┗━━━━━━━━━━⬣
┏━━⊜
*◡̈⃝˼‏👤˹ ━━|قسم الجروب│━━˼👤˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق1


*◡̈⃝˼‏♻️˹ ━━|قسم التحويل━━˼🔄˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق2


*◡̈⃝˼‏🦦˹ ━━|قسم الاعضاء│━━˼🦦˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق3


*◡̈⃝˼‏🕊˹ ━━|قسم الدين│━━˼🤍˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق4


*◡̈⃝˼‏🎰˹ ━━|قسم الترفيه│━━˼🎰˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق5


*◡̈⃝˼‏👨🏻‍💻˹ ━━|قسم المطور│━━˼👨🏻‍💻˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق6

*◡̈⃝⚙️˹ ━━|قسم الادوات│━━˼⚙️˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق7


*◡̈⃝˼‏📢˹ ━━|قسم الصوات│━━˼📢˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق8


*◡̈⃝˼‏📥˹ ━━|قسم التحميل│━━˼📥˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق9


*◡̈⃝˼‏🏛˹ ━━|قسم البنك│━━˼🏛˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق10


*◡̈⃝˼‏🖨💫˹ ━━|قسم الالقاب│━━˼💫˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق11


*◡̈⃝˼‏🦾˹ ━━|قسم الذكاء الاصطناعي│━🦾˹◡̈⃝*


❐╎◡̈⃝👾❯ .ق12
┗━━━━━━━━━━⬣

`.trim()

    conn.sendMessage(m.chat, {
        video: { url: 'https://telegra.ph/file/9d33ae0a2830d03c820c2.mp4' },
        caption: str,
        mentions: [m.sender, global.conn.user.jid],
        gifPlayback: true,
        gifAttribution: 0
    }, { quoted: m });
};

// Function to format uptime
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

// Improved function to handle greetings based on time of day
function ucapan() {
    const time = moment.tz('Egypt').format('HH');
    let res = "بداية يوم سعيده ☀️";

    if (time >= 4 && time < 10) {
        res = "صباح الخير 🌄";
    } else if (time >= 10 && time < 15) {
        res = "مساء الخير ☀️";
    } else if (time >= 15 && time < 18) {
        res = "مساء الخير 🌇";
    } else if (time >= 18) {
        res = "مساء الخير 🌙";
    }
    return res;
}

handler.help = ['main'];
handler.command = ['الاوامر','اوامر','menu'];

export default handler;