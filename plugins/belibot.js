let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *5 Hari* :      *Gratis
╠➥ *7 Hari* : *Rp 1500*
╠➥ *Permanen* :   *Rp 7000*
╠➥ *Sc Bot* :       *Rp 80000*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Gopay, Dana, Dan Pulsa
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 
╠═ Scrip original by Null Bot
╠═〘 ${namabot} 〙 ═`.trim(), footer, 'Dana', '#viadana', 'OVO', '#viaovo', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler
