const Data = require('../Extra/DataHandler.js');
let { nice } = require('../Data/Nice.json');

module.exports = {
	name: 'messageCreate',
	execute(message) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes('69')) {
            if (nice === 69) {
                message.reply(`Oh, that's _REALLY_ Nice. x${nice}`);
            } else {
                message.reply(`Nice x${nice}`);
            }
            nice += 1
            Data.Save("Nice", {"nice": nice});
        }
	},
};