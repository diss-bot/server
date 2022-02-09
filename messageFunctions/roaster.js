'use strict';

const axios = require('axios');

module.exports = async (message) => {
  let roast = await axios.get('https://insult.mattbas.org/api/insult.txt?template=You+are+as+%3Cadjective%3E+as+%3Carticle+target%3Dadj1%3E+%3Cadjective+min%3D1+max%3D3+id%3Dadj1%3E+%3Camount%3E+of+%3Cadjective+min%3D1+max%3D3%3E+%3Canimal%3E+%3Canimal_part%3E&who=Daniel');
  await message.reply(`${roast.data}`);
};