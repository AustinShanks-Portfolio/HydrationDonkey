module.exports = {
	name: 'messageCreate',
	execute(message) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('javelin') && message.author.id === '142089698343387138') {
            message.reply('Trhow the Spear or Get trhown on the Bench \n-Prince Epheriam of Fire Emblem: Sacred Stones \nOct 7 2004 Avaliable on GBA and Wii U and Nintendo 3DS.');
        }
	},
};