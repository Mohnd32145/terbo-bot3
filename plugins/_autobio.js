let handler = m => m;

handler.all = async function(m) {
    let setting = global.db.data.settings[this.user.jid];
    if (setting.autoBio) {
        // Collect available features
        let features = Object.values(plugins).filter(v => v.help).map(v => v.help).flat(1);
        
        // Calculate uptime
        let _uptime = process.uptime() * 1000;
        let uptime = formatTime(_uptime);
        
        // Update bio
        let bio = `🔮 نشط لمدة ${uptime}\n❲ 🖥️الوضع: ${global.opts['self'] ? '🔐خاص' : setting.self ? '🗝️خاص' : global.opts['gconly'] ? '📮للمجموعات فقط' : '🌐عام'} ❳ ❲ ${features.length} ميزة ❳━❲ 👑المالك: ${global.nameown} ❳`;
        this.updateProfileStatus(bio).catch(_ => _);
    }
};

export default handler;

// Function to format uptime into a readable string
function formatTime(ms) {
    let days = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
    let hours = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
    let minutes = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    return [days, ' يوم ', hours, ' ساعة ', minutes, ' دقيقة '].map(v => v.toString().padStart(2, 0)).join('');
}