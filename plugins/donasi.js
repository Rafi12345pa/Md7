let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
┏──「 Donasi • Dana 」─⬣
│ • Pulsa : 081252313064
│ • Dana : 081252313064
╰────────⬣
┏──「 *NOTE* 」─⬣
│ > Ingin donasi? wa.me/6283857620332
│ _Hasil donasi akan digunakan buat beli kuota_
┗────────⬣
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
