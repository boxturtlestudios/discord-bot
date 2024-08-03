const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  category: 'helpful',
  data: new SlashCommandBuilder()
    .setName('godot-doc')
    .setDescription('Lookup Godot Engine documentation')
    .addStringOption(option =>
      option.setName('query')
        .setDescription('Search query')
        .setRequired(true)),
  async execute(interaction) {
    const query = interaction.options.getString('query').toLowerCase();
    const docUrl = `https://docs.godotengine.org/en/4.0/classes/class_${query}.html`;

    try {
      const response = await axios.head(docUrl);

      if (response.status === 200) {
        // The documentation page exists, so send the URL.
        await interaction.reply(`Here's the Godot Engine documentation page for "${query}":\n${docUrl}`);
      }
    } catch (error) {
      // The documentation page doesn't exist; send a search link.
      const searchUrl = `https://docs.godotengine.org/en/4.0/search.html?q=${query}&check_keywords=yes&area=default`;
      await interaction.reply(`I couldn't find direct documentation for "${query}". Here's a link to the search results:\n${searchUrl}`);
    }
  },
};
