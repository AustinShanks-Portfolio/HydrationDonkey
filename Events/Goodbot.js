const Thanks = [
    "Thanks",       //English
    "Merci",		//French
    "Gracias",		//Spanish
    "Danke",		//German
    "Grazie",		//Italian
    "Obrigado",		//Portuguese
    "Mam\’noon",	//Farsi/Persian
    "Dhanyavaad",	//Hindi/Indian
    "Xièxiè",		//Chinese
    "Shukraan",		//Arabic
    "Arigato",		//Japanese
    "Khàawp-khun",	//Thai
    "Ngiyabonga",	//Zulu
    "Ahéhee\’",		//Navajo
    "Mālō",			//Tongan
    "Dankon",		//Esperanto
];

const Data = require('../Extra/DataHandler.js');
let { thanks } = require('../Data/Bot.json');

module.exports = {
	name: 'messageCreate',
	execute(message) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes("good donkey") || message.content.toLowerCase().includes("good bot") || message.content.toLowerCase().includes("good burro") || message.content.toLowerCase().includes("good burra")) {
            message.reply(`${Thanks[Math.floor(Math.random() * Thanks.length)]}, I've been Thanked a total of ${thanks} times.\nI\'m a good Hydronkey.`);
            thanks += 1
            Data.Save("Bot", {"thanks": thanks});
        }
	},
};