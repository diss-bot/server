'use strict';

const userModel = (sequelize, DataTypes)=> sequelize.define('User', {
  username: { type: DataTypes.STRING, required: true},
  puuid: { type: SataTypes.STRING},
  games: {
    LeagueOfLegends: {
      kills : { type: DataTypes.INTEGER },
      deaths: { type: DataTypes.INTEGER },
      assists: { type: DataTypes.INTEGER},
      KDA: {type: DataTypes.INTEGER},
      win: { type: DataTypes.INTEGER },
    }
  }
});

module.exports = userModel