const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('threat')
		.setDescription('Monitoring trends to evaluate existential risk or vibe. Powered by donkey. Patents applied for.'),
	async execute(interaction) {
        //await interaction.reply('Test');
		//await interaction.reply('<@124686534346539012>!! This your reminder to check your damn Conduits!\nProt: <https://tinyurl.com/mf6yfkzn>\nFury (ST): <https://tinyurl.com/2p9b5y9v>\nFury (AoE): <https://tinyurl.com/45dbmhce>\nArms: <https://tinyurl.com/2v48b9rc> \nI\'ve taken the Brainwork out of this for you.');
	},
};

const GuildEmojis = [
	'Amaranth', //Frank
	'Vermillion', //AsianCatSalad
	'Coquelicot', //BeegCat
	'Gamboge', //UtsuBeatings
	'Burlywood', //UtsuDrip
	'Aureolin', //UtsuPickle
	'Celadon', //UtsuShopSmart
	'Glaucous', //UtsuZelix
	'Skobeloff', //VYBUR
	'Viridian', //meatshield
    'Feldgrau',
    "Mountbatten Pink",
    "Phlox",
    "Carrot",
    "Shiny",
    "Zaffre",
    "Australien",
    "Drunk-Tank Pink",
    "Falu",
    "Drake's Neck Green",
    "Razzmatazz",
    "Caput Mortuum",
    "Goose Turd Green",
    "Lusty Gallant",
    "Milk and Water",
    "Puke Brown",
    "Gingerline",

];