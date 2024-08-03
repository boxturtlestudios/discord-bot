const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  category: 'helpful',
  data: new SlashCommandBuilder()
    .setName('unity-doc')
    .setDescription('Lookup Unity documentation')
    .addStringOption(option =>
      option.setName('query')
        .setDescription('Search query')
        .setRequired(true)),
  async execute(interaction) {
    const query = interaction.options.getString('query');
    const docUrl = `https://docs.unity3d.com/ScriptReference/${query}.html`;

    try {
      const response = await axios.head(docUrl);

      if (response.status === 200) {
        // The documentation page exists, so send the URL.
        await interaction.reply(`Here's the Unity documentation page for "${query}":\n${docUrl}`);
      }
    } catch (error) {
      // The documentation page doesn't exist; send a search link.
      const searchUrl = `https://docs.unity3d.com/ScriptReference/30_search.html?q=${query}`;
      await interaction.reply(`I couldn't find direct documentation for "${query}". Here's a link to the search results:\n${searchUrl}`);
    }
  },
};
