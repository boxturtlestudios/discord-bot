const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'helpful',
	data: new SlashCommandBuilder()
		.setName('links')
		.setDescription('Lists important Box Turtle Studios links.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        const replyMessage = "[Box Turtle Studios] :computer: https://boxturtlestudios.com/\n" +
				"[Jacob Wigent] :youtube: https://www.youtube.com/channel/UCAYNmNpyCUFQOGz35It_Wzg\n" +
				"[Box Turtle Studios] :twitter: https://twitter.com/BoxTurtleStudio\n" +
				"[Mycelia] :twitter: https://twitter.com/Mycelia_Game\n" +
				"[Mycelia] :instagram: https://www.instagram.com/mycelia_game/\n" +
				"[Mycelia] :tiktok: https://www.tiktok.com/@mycelia_game\n" +
				"———————\n" +
				"If you would like to invite someone else to the server, use this link:\n" +
				":discord: https://discord.gg/nztYGYasMB";
		await interaction.reply(replyMessage);
	},
};