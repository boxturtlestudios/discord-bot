const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  category: 'helpful',
  data: new SlashCommandBuilder()
    .setName('unreal-doc')
    .setDescription('Lookup Unreal Engine documentation')
    .addStringOption(option =>
      option.setName('query')
        .setDescription('Search query')
        .setRequired(true)),
  async execute(interaction) {
    const query = interaction.options.getString('query');

      const searchUrl = `https://www.unrealengine.com/en-US/bing-search?x=0&y=0&filter=Documentation&keyword=${query}`;
      await interaction.reply(`Here's a link to the search results for ${query}:\n${searchUrl}`);
  },
};
