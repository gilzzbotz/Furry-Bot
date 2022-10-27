let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Tri [PC ATMIN]
│ • Gopay  [085730794089]
│ • Dana  [081241056195]
│ • Saweria  [https://saweria.co/gilzzbotz]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285730794089
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
