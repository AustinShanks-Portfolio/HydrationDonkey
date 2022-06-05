const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('conduit')
		.setDescription('Shows the correct Conduits Mian should be using for each Spec'),
	async execute(interaction) {
        //await interaction.reply('Test');
		await interaction.reply('<@124686534346539012>!! This your reminder to check your damn Conduits!\nProt: <https://tinyurl.com/mf6yfkzn>\nFury (ST): <https://tinyurl.com/2p9b5y9v>\nFury (AoE): <https://tinyurl.com/45dbmhce>\nArms: <https://tinyurl.com/2v48b9rc> \nI\'ve taken the Brainwork out of this for you.');
	},
};
