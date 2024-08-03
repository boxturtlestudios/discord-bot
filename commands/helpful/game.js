const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  category: 'helpful',
  data: new SlashCommandBuilder()
    .setName('game')
    .setDescription('Lookup Box Turtle Studios games')
    .addStringOption(option =>
      option.setName('query')
        .setDescription('Search query')
        .setRequired(true)),
  async execute(interaction) {
    const query = interaction.options.getString('query');
    const docUrl = `https://boxturtlestudios.com/games/${query.toLowerCase()}`;

    try {
      const response = await axios.head(docUrl);

      if (response.status === 200) {
        // The documentation page exists, so send the URL.
        await interaction.reply(`Here's the link to the ${query} info page:\n${docUrl}`);
      }
    } catch (error) {
      // The documentation page doesn't exist; send a search link.
      const searchUrl = `https://boxturtlestudios.com/games/`;
      await interaction.reply(`I couldn't find info page for "${query}". Here's a link to the Box Turtle Studios game catalog:\n${searchUrl}`);
    }
  },
};
