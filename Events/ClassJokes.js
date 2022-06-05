let meme_threshold = 5

module.exports = {
	name: 'messageCreate',
	execute(msg) {
		if (msg.author.bot) return;
		if (ContainsWarriors(msg)) {
			WarriorMeme(msg)
		}
		if (ContainsWarlocks(msg)) {
			WarlockMeme(msg)
		}
	},
};

function ContainsWarriors(msg) {
	if (msg.content.toLowerCase().includes('warrior') || msg.content.toLowerCase().includes('warriors')) {
		return true
	}
	return false
}

function ContainsWarlocks(msg) {
	if (msg.content.toLowerCase().includes('warlock') || msg.content.toLowerCase().includes('warlocks') || msg.content.toLowerCase().includes('lock') || msg.content.toLowerCase().includes('locks')) {
		return true
	}
	return false
}

function WarriorMeme(msg) {
	if (msg.content.toLowerCase().includes("nerf")) {
		msg.reply('https://www.youtube.com/watch?v=EOmbpHBODS4');
	} else if (msg.content.toLowerCase().includes('arms') || msg.content.toLowerCase().includes('c tier')) {
		msg.reply('https://twitter.com/i/status/1416023219895689219');
	} else if (msg.content.toLowerCase().includes("going giga") || msg.content.toLowerCase().includes("popping off") || msg.content.toLowerCase().includes("super sayian")){
		msg.reply('https://www.youtube.com/watch?v=6hMqvb8QiUk');
	}
}

function WarlockMeme(msg) {
	if (msg.content.toLowerCase().includes('affliction') || msg.content.toLowerCase().includes('aff')) {
		msg.reply('https://i.redd.it/58o2kyu0vjlz.jpg');
	}
}