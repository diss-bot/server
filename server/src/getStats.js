'use strict';

require('dotenv').config();
const axios = require('axios');



async function getStats() {
  
  try {
    let userPuuid = 'X1K646iFAmUySLSr39-eeZcnGVtiJpXN3bMcGb8CXiYV18uSXpR0YsxTkhTzd60yZNc9FJtgMCQppA';
    let matchId = 'NA1_4093854064';
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_API}`;
    const Data = await axios.get(url);
  
    const allData = Data.data.info.participants;
    //console.log(allData);
    const userStats = allData.find( ({ puuid }) => puuid === userPuuid);
    const { kills, deaths, win } = userStats;
    console.log(kills, deaths, win);

  }
  catch (error) {
    console.log(error);
  }
}

getStats();

// function parseStats(statsData) {
//   try {
//     const statsSummaries = statsData.map(userPuuid => {
//       return new Game(userPuuid);
//     });
//     return Promise.resolve(statsSummaries);
//   } catch (error) {
//     return Promise.reject(error);
//   }
  
// }
// class Game {
//   constructor(data) {
//     this.kills = data.kills;
//     this.deaths = data.deaths;
//     this.win = data.win;
//   }
// }


module.exports = { getStats };





// https://americas.api.riotgames.com/lol/match/v5/matches/NA1_4093854064?api_key=RGAPI-7d2165fc-c70d-4f58-ba88-386ece758370

// {
//   "metadata": {
//       "dataVersion": "2",
//       "matchId": "NA1_4093854064",
//       "participants": [
//           "v0PW2KAGgW83JNLkYDZNy2Xft40jbfMhNeXdRx3OHQDJx7arApoi3pmw8o-YLrKd2VMEdQ9LOXb_gA",
//           "UMFCXChl-gbEkCP-eUGzQgCcssFyp78ayMaWoqBkiTkeEdLmh7X6agmPq-7maXBc976mx3zBbw0XiA",
//           "tFPdBDn4PcrtbzvJKhAf4Mdb7GR5qWMlaD2kPS47Sdg8pOcLODWGPc0xf6rrm-wtIAcx6bPIklrbaQ",
//           "bzyq7k3EjOMiI4ndKEZortg5YOLI3t1szGV66t0MGksU9ZOmybEvGnD-AvSzHUtsOfn-K1KlCZyZcg",
//           "eMqxR_stSCZ6RUOEuB2CFVrhfaMaK3LGDjj_SgNA4vTFhTsL3_qZzyUTLdCk7jHnxlbmQanA6D4_Yw",
//           "lyUIuuMqq-Ea-zg30DfPH18D8PHbB4k1dJ1vKIS-n0zzzFNqhU63VwgwyTsF7lRR5zaQIsIQyap-nw",
//           "Ye0vt2keOpRBdcdCUgbjBsaeyfVK3j_nzZO8zuPyh10-MIvSgUNkpuN_AjJS_QX4rfyLh-nF53l4AQ",
//           "qeSkyJz2EfNgP8fniWMT8EU1gWt-pNwA64BmAeHKRz7-5DAiBpymTDK-lhsenMkWNNUKmKuzq16vGg",
//           "X1K646iFAmUySLSr39-eeZcnGVtiJpXN3bMcGb8CXiYV18uSXpR0YsxTkhTzd60yZNc9FJtgMCQppA",
//           "zWAneDd8T8WmlBwAFvHG387I9dTX32miKGskpTRWx8HwoYSNK8XbkmBqxuQ18Bd1A2lw4iSv-5yfvg"
//       ]
//   },
//   "info": {
//       "gameCreation": 1636232643000,
//       "gameDuration": 691,
//       "gameEndTimestamp": 1636233367985,
//       "gameId": 4093854064,
//       "gameMode": "URF",
//       "gameName": "teambuilder-match-4093854064",
//       "gameStartTimestamp": 1636232676333,
//       "gameType": "MATCHED_GAME",
//       "gameVersion": "11.22.406.3587",
//       "mapId": 11,
//       "participants": [
//           {
//               "assists": 2,
//               "baronKills": 0,
//               "bountyLevel": 0,
//               "champExperience": 11444,
//               "champLevel": 14,
//               "championId": 23,
//               "championName": "Tryndamere",
//               "championTransform": 0,
//               "consumablesPurchased": 0,
//               "damageDealtToBuildings": 11081,
//               "damageDealtToObjectives": 11081,
//               "damageDealtToTurrets": 11081,
//               "damageSelfMitigated": 13674,
//               "deaths": 5,
//               "detectorWardsPlaced": 0,
//               "doubleKills": 0,
//               "dragonKills": 0,
//               "firstBloodAssist": false,
//               "firstBloodKill": false,
//               "firstTowerAssist": false,
//               "firstTowerKill": false,
//               "gameEndedInEarlySurrender": false,
//               "gameEndedInSurrender": true,
//               "goldEarned": 11752,
//               "goldSpent": 10650,
//               "individualPosition": "Invalid",
//               "inhibitorKills": 1,
//               "inhibitorTakedowns": 1,
//               "inhibitorsLost": 0,
//               "item0": 6692,
//               "item1": 6676,
//               "item2": 1036,
//               "item3": 3031,
//               "item4": 3057,
//               "item5": 0,
//               "item6": 3340,
//               "itemsPurchased": 18,
//               "killingSprees": 1,
//               "kills": 10,
//               "lane": "NONE",
//               "largestCriticalStrike": 707,
//               "largestKillingSpree": 8,
//               "largestMultiKill": 1,
//               "longestTimeSpentLiving": 270,
//               "magicDamageDealt": 520,
//               "magicDamageDealtToChampions": 0,
//               "magicDamageTaken": 1606,
//               "neutralMinionsKilled": 12,
//               "nexusKills": 0,
//               "nexusLost": 0,
//               "nexusTakedowns": 0,
//               "objectivesStolen": 0,
//               "objectivesStolenAssists": 0,
//               "participantId": 1,
//               "pentaKills": 0,
//               "perks": {
//                   "statPerks": {
//                       "defense": 5002,
//                       "flex": 5008,
//                       "offense": 5005
//                   },
//                   "styles": [
//                       {
//                           "description": "primaryStyle",
//                           "selections": [
//                               {
//                                   "perk": 9923,
//                                   "var1": 36,
//                                   "var2": 85,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8143,
//                                   "var1": 572,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8138,
//                                   "var1": 18,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8135,
//                                   "var1": 2151,
//                                   "var2": 4,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8100
//                       },
//                       {
//                           "description": "subStyle",
//                           "selections": [
//                               {
//                                   "perk": 8299,
//                                   "var1": 704,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 9104,
//                                   "var1": 7,
//                                   "var2": 50,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8000
//                       }
//                   ]
//               },
//               "physicalDamageDealt": 84871,
//               "physicalDamageDealtToChampions": 14780,
//               "physicalDamageTaken": 15167,
//               "profileIcon": 5145,
//               "puuid": "v0PW2KAGgW83JNLkYDZNy2Xft40jbfMhNeXdRx3OHQDJx7arApoi3pmw8o-YLrKd2VMEdQ9LOXb_gA",
//               "quadraKills": 0,
//               "riotIdName": "",
//               "riotIdTagline": "",
//               "role": "SUPPORT",
//               "sightWardsBoughtInGame": 0,
//               "spell1Casts": 4,
//               "spell2Casts": 14,
//               "spell3Casts": 89,
//               "spell4Casts": 7,
//               "summoner1Casts": 6,
//               "summoner1Id": 6,
//               "summoner2Casts": 4,
//               "summoner2Id": 4,
//               "summonerId": "aCBYEg7_tLbAFb5zmHjYaZ0vLnhCP6jSFk4btbPF9hIxuBE",
//               "summonerLevel": 105,
//               "summonerName": "566school",
//               "teamEarlySurrendered": false,
//               "teamId": 100,
//               "teamPosition": "",
//               "timeCCingOthers": 4,
//               "timePlayed": 691,
//               "totalDamageDealt": 85785,
//               "totalDamageDealtToChampions": 14918,
//               "totalDamageShieldedOnTeammates": 0,
//               "totalDamageTaken": 18072,
//               "totalHeal": 2239,
//               "totalHealsOnTeammates": 0,
//               "totalMinionsKilled": 72,
//               "totalTimeCCDealt": 38,
//               "totalTimeSpentDead": 71,
//               "totalUnitsHealed": 1,
//               "tripleKills": 0,
//               "trueDamageDealt": 394,
//               "trueDamageDealtToChampions": 138,
//               "trueDamageTaken": 1298,
//               "turretKills": 3,
//               "turretTakedowns": 5,
//               "turretsLost": 1,
//               "unrealKills": 0,
//               "visionScore": 7,
//               "visionWardsBoughtInGame": 0,
//               "wardsKilled": 0,
//               "wardsPlaced": 4,
//               "win": true
//           },
//           {
//               "assists": 4,
//               "baronKills": 0,
//               "bountyLevel": 4,
//               "champExperience": 10529,
//               "champLevel": 13,
//               "championId": 36,
//               "championName": "DrMundo",
//               "championTransform": 0,
//               "consumablesPurchased": 1,
//               "damageDealtToBuildings": 7428,
//               "damageDealtToObjectives": 14672,
//               "damageDealtToTurrets": 7428,
//               "damageSelfMitigated": 5466,
//               "deaths": 4,
//               "detectorWardsPlaced": 0,
//               "doubleKills": 2,
//               "dragonKills": 1,
//               "firstBloodAssist": false,
//               "firstBloodKill": false,
//               "firstTowerAssist": false,
//               "firstTowerKill": true,
//               "gameEndedInEarlySurrender": false,
//               "gameEndedInSurrender": true,
//               "goldEarned": 9390,
//               "goldSpent": 6800,
//               "individualPosition": "Invalid",
//               "inhibitorKills": 0,
//               "inhibitorTakedowns": 1,
//               "inhibitorsLost": 0,
//               "item0": 1055,
//               "item1": 6632,
//               "item2": 3020,
//               "item3": 1031,
//               "item4": 3133,
//               "item5": 0,
//               "item6": 3340,
//               "itemsPurchased": 12,
//               "killingSprees": 2,
//               "kills": 8,
//               "lane": "NONE",
//               "largestCriticalStrike": 0,
//               "largestKillingSpree": 4,
//               "largestMultiKill": 2,
//               "longestTimeSpentLiving": 206,
//               "magicDamageDealt": 17690,
//               "magicDamageDealtToChampions": 5071,
//               "magicDamageTaken": 2453,
//               "neutralMinionsKilled": 8,
//               "nexusKills": 0,
//               "nexusLost": 0,
//               "nexusTakedowns": 0,
//               "objectivesStolen": 0,
//               "objectivesStolenAssists": 0,
//               "participantId": 2,
//               "pentaKills": 0,
//               "perks": {
//                   "statPerks": {
//                       "defense": 5001,
//                       "flex": 5008,
//                       "offense": 5008
//                   },
//                   "styles": [
//                       {
//                           "description": "primaryStyle",
//                           "selections": [
//                               {
//                                   "perk": 8010,
//                                   "var1": 19,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 9111,
//                                   "var1": 462,
//                                   "var2": 240,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 9105,
//                                   "var1": 9,
//                                   "var2": 40,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8299,
//                                   "var1": 280,
//                                   "var2": 0,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8000
//                       },
//                       {
//                           "description": "subStyle",
//                           "selections": [
//                               {
//                                   "perk": 8135,
//                                   "var1": 1338,
//                                   "var2": 5,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8120,
//                                   "var1": 3,
//                                   "var2": 18,
//                                   "var3": 8
//                               }
//                           ],
//                           "style": 8100
//                       }
//                   ]
//               },
//               "physicalDamageDealt": 29486,
//               "physicalDamageDealtToChampions": 2897,
//               "physicalDamageTaken": 9771,
//               "profileIcon": 5076,
//               "puuid": "UMFCXChl-gbEkCP-eUGzQgCcssFyp78ayMaWoqBkiTkeEdLmh7X6agmPq-7maXBc976mx3zBbw0XiA",
//               "quadraKills": 0,
//               "riotIdName": "",
//               "riotIdTagline": "",
//               "role": "SUPPORT",
//               "sightWardsBoughtInGame": 0,
//               "spell1Casts": 159,
//               "spell2Casts": 20,
//               "spell3Casts": 58,
//               "spell4Casts": 9,
//               "summoner1Casts": 6,
//               "summoner1Id": 4,
//               "summoner2Casts": 7,
//               "summoner2Id": 6,
//               "summonerId": "M4pzU3pF0DdURGi7PiomQUJgt9t6ZgDXfn8A1Sn_PwFk2RU",
//               "summonerLevel": 422,
//               "summonerName": "BadLikeBuu",
//               "teamEarlySurrendered": false,
//               "teamId": 100,
//               "teamPosition": "",
//               "timeCCingOthers": 11,
//               "timePlayed": 691,
//               "totalDamageDealt": 47177,
//               "totalDamageDealtToChampions": 7968,
//               "totalDamageShieldedOnTeammates": 0,
//               "totalDamageTaken": 12827,
//               "totalHeal": 3384,
//               "totalHealsOnTeammates": 0,
//               "totalMinionsKilled": 33,
//               "totalTimeCCDealt": 148,
//               "totalTimeSpentDead": 78,
//               "totalUnitsHealed": 1,
//               "tripleKills": 0,
//               "trueDamageDealt": 0,
//               "trueDamageDealtToChampions": 0,
//               "trueDamageTaken": 601,
//               "turretKills": 2,
//               "turretTakedowns": 4,
//               "turretsLost": 1,
//               "unrealKills": 0,
//               "visionScore": 13,
//               "visionWardsBoughtInGame": 0,
//               "wardsKilled": 0,
//               "wardsPlaced": 10,
//               "win": true
//           },
//           {
//               "assists": 4,
//               "baronKills": 0,
//               "bountyLevel": 0,
//               "champExperience": 10560,
//               "champLevel": 13,
//               "championId": 143,
//               "championName": "Zyra",
//               "championTransform": 0,
//               "consumablesPurchased": 0,
//               "damageDealtToBuildings": 3510,
//               "damageDealtToObjectives": 3510,
//               "damageDealtToTurrets": 3510,
//               "damageSelfMitigated": 3842,
//               "deaths": 6,
//               "detectorWardsPlaced": 0,
//               "doubleKills": 2,
//               "dragonKills": 0,
//               "firstBloodAssist": false,
//               "firstBloodKill": false,
//               "firstTowerAssist": false,
//               "firstTowerKill": false,
//               "gameEndedInEarlySurrender": false,
//               "gameEndedInSurrender": true,
//               "goldEarned": 9083,
//               "goldSpent": 6900,
//               "individualPosition": "Invalid",
//               "inhibitorKills": 0,
//               "inhibitorTakedowns": 1,
//               "inhibitorsLost": 0,
//               "item0": 6655,
//               "item1": 3020,
//               "item2": 0,
//               "item3": 0,
//               "item4": 0,
//               "item5": 3157,
//               "item6": 3340,
//               "itemsPurchased": 12,
//               "killingSprees": 2,
//               "kills": 6,
//               "lane": "NONE",
//               "largestCriticalStrike": 0,
//               "largestKillingSpree": 3,
//               "largestMultiKill": 2,
//               "longestTimeSpentLiving": 201,
//               "magicDamageDealt": 42145,
//               "magicDamageDealtToChampions": 12109,
//               "magicDamageTaken": 2885,
//               "neutralMinionsKilled": 0,
//               "nexusKills": 0,
//               "nexusLost": 0,
//               "nexusTakedowns": 0,
//               "objectivesStolen": 0,
//               "objectivesStolenAssists": 0,
//               "participantId": 3,
//               "pentaKills": 0,
//               "perks": {
//                   "statPerks": {
//                       "defense": 5001,
//                       "flex": 5008,
//                       "offense": 5005
//                   },
//                   "styles": [
//                       {
//                           "description": "primaryStyle",
//                           "selections": [
//                               {
//                                   "perk": 8229,
//                                   "var1": 953,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8224,
//                                   "var1": 121,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8210,
//                                   "var1": 0,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8237,
//                                   "var1": 343,
//                                   "var2": 0,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8200
//                       },
//                       {
//                           "description": "subStyle",
//                           "selections": [
//                               {
//                                   "perk": 8139,
//                                   "var1": 854,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8105,
//                                   "var1": 13,
//                                   "var2": 5,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8100
//                       }
//                   ]
//               },
//               "physicalDamageDealt": 2265,
//               "physicalDamageDealtToChampions": 673,
//               "physicalDamageTaken": 5877,
//               "profileIcon": 4838,
//               "puuid": "tFPdBDn4PcrtbzvJKhAf4Mdb7GR5qWMlaD2kPS47Sdg8pOcLODWGPc0xf6rrm-wtIAcx6bPIklrbaQ",
//               "quadraKills": 0,
//               "riotIdName": "",
//               "riotIdTagline": "",
//               "role": "SUPPORT",
//               "sightWardsBoughtInGame": 0,
//               "spell1Casts": 55,
//               "spell2Casts": 99,
//               "spell3Casts": 93,
//               "spell4Casts": 10,
//               "summoner1Casts": 5,
//               "summoner1Id": 6,
//               "summoner2Casts": 7,
//               "summoner2Id": 4,
//               "summonerId": "Rtu5IYnbVrI6KLm2nRqoTpD_TtNwHk8EQ6wguMF6GZrhtp8",
//               "summonerLevel": 282,
//               "summonerName": "Sony Reki",
//               "teamEarlySurrendered": false,
//               "teamId": 100,
//               "teamPosition": "",
//               "timeCCingOthers": 37,
//               "timePlayed": 691,
//               "totalDamageDealt": 44410,
//               "totalDamageDealtToChampions": 12783,
//               "totalDamageShieldedOnTeammates": 0,
//               "totalDamageTaken": 9535,
//               "totalHeal": 877,
//               "totalHealsOnTeammates": 0,
//               "totalMinionsKilled": 41,
//               "totalTimeCCDealt": 226,
//               "totalTimeSpentDead": 119,
//               "totalUnitsHealed": 1,
//               "tripleKills": 0,
//               "trueDamageDealt": 0,
//               "trueDamageDealtToChampions": 0,
//               "trueDamageTaken": 773,
//               "turretKills": 1,
//               "turretTakedowns": 5,
//               "turretsLost": 1,
//               "unrealKills": 0,
//               "visionScore": 6,
//               "visionWardsBoughtInGame": 0,
//               "wardsKilled": 0,
//               "wardsPlaced": 5,
//               "win": true
//           },
//           {
//               "assists": 10,
//               "baronKills": 0,
//               "bountyLevel": 1,
//               "champExperience": 11363,
//               "champLevel": 13,
//               "championId": 27,
//               "championName": "Singed",
//               "championTransform": 0,
//               "consumablesPurchased": 2,
//               "damageDealtToBuildings": 1473,
//               "damageDealtToObjectives": 7108,
//               "damageDealtToTurrets": 1473,
//               "damageSelfMitigated": 10104,
//               "deaths": 4,
//               "detectorWardsPlaced": 0,
//               "doubleKills": 0,
//               "dragonKills": 1,
//               "firstBloodAssist": false,
//               "firstBloodKill": false,
//               "firstTowerAssist": false,
//               "firstTowerKill": false,
//               "gameEndedInEarlySurrender": false,
//               "gameEndedInSurrender": true,
//               "goldEarned": 9374,
//               "goldSpent": 6985,
//               "individualPosition": "Invalid",
//               "inhibitorKills": 0,
//               "inhibitorTakedowns": 0,
//               "inhibitorsLost": 0,
//               "item0": 6655,
//               "item1": 1026,
//               "item2": 3020,
//               "item3": 1011,
//               "item4": 1052,
//               "item5": 0,
//               "item6": 3340,
//               "itemsPurchased": 14,
//               "killingSprees": 1,
//               "kills": 5,
//               "lane": "NONE",
//               "largestCriticalStrike": 0,
//               "largestKillingSpree": 2,
//               "largestMultiKill": 1,
//               "longestTimeSpentLiving": 204,
//               "magicDamageDealt": 46148,
//               "magicDamageDealtToChampions": 13096,
//               "magicDamageTaken": 5041,
//               "neutralMinionsKilled": 12,
//               "nexusKills": 0,
//               "nexusLost": 0,
//               "nexusTakedowns": 0,
//               "objectivesStolen": 0,
//               "objectivesStolenAssists": 0,
//               "participantId": 4,
//               "pentaKills": 0,
//               "perks": {
//                   "statPerks": {
//                       "defense": 5002,
//                       "flex": 5008,
//                       "offense": 5008
//                   },
//                   "styles": [
//                       {
//                           "description": "primaryStyle",
//                           "selections": [
//                               {
//                                   "perk": 8124,
//                                   "var1": 728,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8139,
//                                   "var1": 760,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8138,
//                                   "var1": 30,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8135,
//                                   "var1": 1050,
//                                   "var2": 5,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8100
//                       },
//                       {
//                           "description": "subStyle",
//                           "selections": [
//                               {
//                                   "perk": 8275,
//                                   "var1": 14,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8234,
//                                   "var1": 7834,
//                                   "var2": 0,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8200
//                       }
//                   ]
//               },
//               "physicalDamageDealt": 1461,
//               "physicalDamageDealtToChampions": 182,
//               "physicalDamageTaken": 9455,
//               "profileIcon": 4404,
//               "puuid": "bzyq7k3EjOMiI4ndKEZortg5YOLI3t1szGV66t0MGksU9ZOmybEvGnD-AvSzHUtsOfn-K1KlCZyZcg",
//               "quadraKills": 0,
//               "riotIdName": "",
//               "riotIdTagline": "",
//               "role": "SUPPORT",
//               "sightWardsBoughtInGame": 0,
//               "spell1Casts": 9,
//               "spell2Casts": 27,
//               "spell3Casts": 41,
//               "spell4Casts": 11,
//               "summoner1Casts": 8,
//               "summoner1Id": 6,
//               "summoner2Casts": 6,
//               "summoner2Id": 4,
//               "summonerId": "A0tvmSQe04xI9C4whkjRRyR5Skkt1EfiNfA9dbZyIgJsUCk",
//               "summonerLevel": 183,
//               "summonerName": "Hellgah",
//               "teamEarlySurrendered": false,
//               "teamId": 100,
//               "teamPosition": "",
//               "timeCCingOthers": 24,
//               "timePlayed": 691,
//               "totalDamageDealt": 47609,
//               "totalDamageDealtToChampions": 13279,
//               "totalDamageShieldedOnTeammates": 0,
//               "totalDamageTaken": 15057,
//               "totalHeal": 1061,
//               "totalHealsOnTeammates": 0,
//               "totalMinionsKilled": 48,
//               "totalTimeCCDealt": 109,
//               "totalTimeSpentDead": 89,
//               "totalUnitsHealed": 1,
//               "tripleKills": 0,
//               "trueDamageDealt": 0,
//               "trueDamageDealtToChampions": 0,
//               "trueDamageTaken": 560,
//               "turretKills": 0,
//               "turretTakedowns": 3,
//               "turretsLost": 1,
//               "unrealKills": 0,
//               "visionScore": 14,
//               "visionWardsBoughtInGame": 0,
//               "wardsKilled": 0,
//               "wardsPlaced": 10,
//               "win": true
//           },
//           {
//               "assists": 4,
//               "baronKills": 0,
//               "bountyLevel": 0,
//               "champExperience": 8587,
//               "champLevel": 12,
//               "championId": 202,
//               "championName": "Jhin",
//               "championTransform": 0,
//               "consumablesPurchased": 0,
//               "damageDealtToBuildings": 2461,
//               "damageDealtToObjectives": 2461,
//               "damageDealtToTurrets": 2461,
//               "damageSelfMitigated": 2934,
//               "deaths": 7,
//               "detectorWardsPlaced": 0,
//               "doubleKills": 0,
//               "dragonKills": 0,
//               "firstBloodAssist": false,
//               "firstBloodKill": false,
//               "firstTowerAssist": false,
//               "firstTowerKill": false,
//               "gameEndedInEarlySurrender": false,
//               "gameEndedInSurrender": true,
//               "goldEarned": 7275,
//               "goldSpent": 6050,
//               "individualPosition": "Invalid",
//               "inhibitorKills": 0,
//               "inhibitorTakedowns": 0,
//               "inhibitorsLost": 0,
//               "item0": 3086,
//               "item1": 3009,
//               "item2": 6671,
//               "item3": 2015,
//               "item4": 0,
//               "item5": 0,
//               "item6": 3340,
//               "itemsPurchased": 12,
//               "killingSprees": 0,
//               "kills": 1,
//               "lane": "NONE",
//               "largestCriticalStrike": 516,
//               "largestKillingSpree": 0,
//               "largestMultiKill": 1,
//               "longestTimeSpentLiving": 151,
//               "magicDamageDealt": 2144,
//               "magicDamageDealtToChampions": 0,
//               "magicDamageTaken": 3920,
//               "neutralMinionsKilled": 0,
//               "nexusKills": 0,
//               "nexusLost": 0,
//               "nexusTakedowns": 0,
//               "objectivesStolen": 0,
//               "objectivesStolenAssists": 0,
//               "participantId": 5,
//               "pentaKills": 0,
//               "perks": {
//                   "statPerks": {
//                       "defense": 5003,
//                       "flex": 5008,
//                       "offense": 5008
//                   },
//                   "styles": [
//                       {
//                           "description": "primaryStyle",
//                           "selections": [
//                               {
//                                   "perk": 8128,
//                                   "var1": 188,
//                                   "var2": 7,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8139,
//                                   "var1": 557,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8138,
//                                   "var1": 6,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8135,
//                                   "var1": 407,
//                                   "var2": 3,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8100
//                       },
//                       {
//                           "description": "subStyle",
//                           "selections": [
//                               {
//                                   "perk": 9111,
//                                   "var1": 197,
//                                   "var2": 100,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8014,
//                                   "var1": 100,
//                                   "var2": 0,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8000
//                       }
//                   ]
//               },
//               "physicalDamageDealt": 39089,
//               "physicalDamageDealtToChampions": 4590,
//               "physicalDamageTaken": 4782,
//               "profileIcon": 4569,
//               "puuid": "eMqxR_stSCZ6RUOEuB2CFVrhfaMaK3LGDjj_SgNA4vTFhTsL3_qZzyUTLdCk7jHnxlbmQanA6D4_Yw",
//               "quadraKills": 0,
//               "riotIdName": "",
//               "riotIdTagline": "",
//               "role": "SUPPORT",
//               "sightWardsBoughtInGame": 0,
//               "spell1Casts": 49,
//               "spell2Casts": 62,
//               "spell3Casts": 9,
//               "spell4Casts": 23,
//               "summoner1Casts": 6,
//               "summoner1Id": 6,
//               "summoner2Casts": 4,
//               "summoner2Id": 4,
//               "summonerId": "2IH8Hfqq8eizvhTkE2RMEgq3j6npRJz6t3cTC-tbQdKFnFg",
//               "summonerLevel": 190,
//               "summonerName": "Fushu",
//               "teamEarlySurrendered": false,
//               "teamId": 100,
//               "teamPosition": "",
//               "timeCCingOthers": 5,
//               "timePlayed": 691,
//               "totalDamageDealt": 41234,
//               "totalDamageDealtToChampions": 4590,
//               "totalDamageShieldedOnTeammates": 0,
//               "totalDamageTaken": 9153,
//               "totalHeal": 935,
//               "totalHealsOnTeammates": 0,
//               "totalMinionsKilled": 52,
//               "totalTimeCCDealt": 39,
//               "totalTimeSpentDead": 130,
//               "totalUnitsHealed": 1,
//               "tripleKills": 0,
//               "trueDamageDealt": 0,
//               "trueDamageDealtToChampions": 0,
//               "trueDamageTaken": 450,
//               "turretKills": 1,
//               "turretTakedowns": 1,
//               "turretsLost": 1,
//               "unrealKills": 0,
//               "visionScore": 1,
//               "visionWardsBoughtInGame": 0,
//               "wardsKilled": 0,
//               "wardsPlaced": 1,
//               "win": true
//           },
//           {
//               "assists": 3,
//               "baronKills": 0,
//               "bountyLevel": 0,
//               "champExperience": 9377,
//               "champLevel": 12,
//               "championId": 41,
//               "championName": "Gangplank",
//               "championTransform": 0,
//               "consumablesPurchased": 0,
//               "damageDealtToBuildings": 2521,
//               "damageDealtToObjectives": 2521,
//               "damageDealtToTurrets": 2521,
//               "damageSelfMitigated": 4393,
//               "deaths": 5,
//               "detectorWardsPlaced": 0,
//               "doubleKills": 0,
//               "dragonKills": 0,
//               "firstBloodAssist": false,
//               "firstBloodKill": true,
//               "firstTowerAssist": false,
//               "firstTowerKill": false,
//               "gameEndedInEarlySurrender": false,
//               "gameEndedInSurrender": true,
//               "goldEarned": 11140,
//               "goldSpent": 10358,
//               "individualPosition": "Invalid",
//               "inhibitorKills": 0,
//               "inhibitorTakedowns": 0,
//               "inhibitorsLost": 1,
//               "item0": 3078,
//               "item1": 6676,
//               "item2": 1038,
//               "item3": 3111,
//               "item4": 1037,
//               "item5": 1018,
//               "item6": 3340,
//               "itemsPurchased": 18,
//               "killingSprees": 3,
//               "kills": 8,
//               "lane": "NONE",
//               "largestCriticalStrike": 968,
//               "largestKillingSpree": 3,
//               "largestMultiKill": 1,
//               "longestTimeSpentLiving": 198,
//               "magicDamageDealt": 2611,
//               "magicDamageDealtToChampions": 899,
//               "magicDamageTaken": 2492,
//               "neutralMinionsKilled": 0,
//               "nexusKills": 0,
//               "nexusLost": 0,
//               "nexusTakedowns": 0,
//               "objectivesStolen": 0,
//               "objectivesStolenAssists": 0,
//               "participantId": 6,
//               "pentaKills": 0,
//               "perks": {
//                   "statPerks": {
//                       "defense": 5002,
//                       "flex": 5008,
//                       "offense": 5008
//                   },
//                   "styles": [
//                       {
//                           "description": "primaryStyle",
//                           "selections": [
//                               {
//                                   "perk": 8437,
//                                   "var1": 317,
//                                   "var2": 218,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8463,
//                                   "var1": 99,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8473,
//                                   "var1": 455,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8451,
//                                   "var1": 36,
//                                   "var2": 0,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8400
//                       },
//                       {
//                           "description": "subStyle",
//                           "selections": [
//                               {
//                                   "perk": 8105,
//                                   "var1": 10,
//                                   "var2": 4,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8126,
//                                   "var1": 223,
//                                   "var2": 0,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8100
//                       }
//                   ]
//               },
//               "physicalDamageDealt": 58173,
//               "physicalDamageDealtToChampions": 9800,
//               "physicalDamageTaken": 7930,
//               "profileIcon": 4779,
//               "puuid": "lyUIuuMqq-Ea-zg30DfPH18D8PHbB4k1dJ1vKIS-n0zzzFNqhU63VwgwyTsF7lRR5zaQIsIQyap-nw",
//               "quadraKills": 0,
//               "riotIdName": "",
//               "riotIdTagline": "",
//               "role": "SUPPORT",
//               "sightWardsBoughtInGame": 0,
//               "spell1Casts": 83,
//               "spell2Casts": 7,
//               "spell3Casts": 55,
//               "spell4Casts": 4,
//               "summoner1Casts": 5,
//               "summoner1Id": 14,
//               "summoner2Casts": 4,
//               "summoner2Id": 4,
//               "summonerId": "lVXqgsw4mwLcA9mNcnNsPn4tU4DebuhjoSB1x8Aw3MYOTOU",
//               "summonerLevel": 141,
//               "summonerName": "Touchmybanana56",
//               "teamEarlySurrendered": false,
//               "teamId": 200,
//               "teamPosition": "",
//               "timeCCingOthers": 3,
//               "timePlayed": 691,
//               "totalDamageDealt": 63344,
//               "totalDamageDealtToChampions": 12357,
//               "totalDamageShieldedOnTeammates": 0,
//               "totalDamageTaken": 10422,
//               "totalHeal": 825,
//               "totalHealsOnTeammates": 50,
//               "totalMinionsKilled": 71,
//               "totalTimeCCDealt": 137,
//               "totalTimeSpentDead": 131,
//               "totalUnitsHealed": 3,
//               "tripleKills": 0,
//               "trueDamageDealt": 2559,
//               "trueDamageDealtToChampions": 1656,
//               "trueDamageTaken": 0,
//               "turretKills": 0,
//               "turretTakedowns": 0,
//               "turretsLost": 7,
//               "unrealKills": 0,
//               "visionScore": 6,
//               "visionWardsBoughtInGame": 0,
//               "wardsKilled": 0,
//               "wardsPlaced": 5,
//               "win": false
//           },
//           {
//               "assists": 3,
//               "baronKills": 0,
//               "bountyLevel": 0,
//               "champExperience": 9327,
//               "champLevel": 12,
//               "championId": 18,
//               "championName": "Tristana",
//               "championTransform": 0,
//               "consumablesPurchased": 0,
//               "damageDealtToBuildings": 2049,
//               "damageDealtToObjectives": 2049,
//               "damageDealtToTurrets": 2049,
//               "damageSelfMitigated": 3598,
//               "deaths": 6,
//               "detectorWardsPlaced": 0,
//               "doubleKills": 2,
//               "dragonKills": 0,
//               "firstBloodAssist": true,
//               "firstBloodKill": false,
//               "firstTowerAssist": false,
//               "firstTowerKill": false,
//               "gameEndedInEarlySurrender": false,
//               "gameEndedInSurrender": true,
//               "goldEarned": 10113,
//               "goldSpent": 9250,
//               "individualPosition": "Invalid",
//               "inhibitorKills": 0,
//               "inhibitorTakedowns": 0,
//               "inhibitorsLost": 1,
//               "item0": 6672,
//               "item1": 3095,
//               "item2": 2031,
//               "item3": 3047,
//               "item4": 1038,
//               "item5": 1018,
//               "item6": 3340,
//               "itemsPurchased": 13,
//               "killingSprees": 2,
//               "kills": 9,
//               "lane": "NONE",
//               "largestCriticalStrike": 432,
//               "largestKillingSpree": 4,
//               "largestMultiKill": 2,
//               "longestTimeSpentLiving": 280,
//               "magicDamageDealt": 5982,
//               "magicDamageDealtToChampions": 1209,
//               "magicDamageTaken": 6549,
//               "neutralMinionsKilled": 12,
//               "nexusKills": 0,
//               "nexusLost": 0,
//               "nexusTakedowns": 0,
//               "objectivesStolen": 0,
//               "objectivesStolenAssists": 0,
//               "participantId": 7,
//               "pentaKills": 0,
//               "perks": {
//                   "statPerks": {
//                       "defense": 5002,
//                       "flex": 5008,
//                       "offense": 5005
//                   },
//                   "styles": [
//                       {
//                           "description": "primaryStyle",
//                           "selections": [
//                               {
//                                   "perk": 9923,
//                                   "var1": 37,
//                                   "var2": 88,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8143,
//                                   "var1": 203,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8138,
//                                   "var1": 18,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8135,
//                                   "var1": 977,
//                                   "var2": 5,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8100
//                       },
//                       {
//                           "description": "subStyle",
//                           "selections": [
//                               {
//                                   "perk": 9104,
//                                   "var1": 8,
//                                   "var2": 10,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8014,
//                                   "var1": 494,
//                                   "var2": 0,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8000
//                       }
//                   ]
//               },
//               "physicalDamageDealt": 36275,
//               "physicalDamageDealtToChampions": 12231,
//               "physicalDamageTaken": 5209,
//               "profileIcon": 3838,
//               "puuid": "Ye0vt2keOpRBdcdCUgbjBsaeyfVK3j_nzZO8zuPyh10-MIvSgUNkpuN_AjJS_QX4rfyLh-nF53l4AQ",
//               "quadraKills": 0,
//               "riotIdName": "",
//               "riotIdTagline": "",
//               "role": "SUPPORT",
//               "sightWardsBoughtInGame": 0,
//               "spell1Casts": 24,
//               "spell2Casts": 24,
//               "spell3Casts": 31,
//               "spell4Casts": 4,
//               "summoner1Casts": 5,
//               "summoner1Id": 3,
//               "summoner2Casts": 4,
//               "summoner2Id": 4,
//               "summonerId": "mUdpl89Dr8TZObFbxpwxrQraJphZOPxQkz1SCr8ttwepXS8",
//               "summonerLevel": 263,
//               "summonerName": "Eitanm",
//               "teamEarlySurrendered": false,
//               "teamId": 200,
//               "teamPosition": "",
//               "timeCCingOthers": 5,
//               "timePlayed": 691,
//               "totalDamageDealt": 45060,
//               "totalDamageDealtToChampions": 14827,
//               "totalDamageShieldedOnTeammates": 0,
//               "totalDamageTaken": 11787,
//               "totalHeal": 318,
//               "totalHealsOnTeammates": 0,
//               "totalMinionsKilled": 39,
//               "totalTimeCCDealt": 50,
//               "totalTimeSpentDead": 118,
//               "totalUnitsHealed": 1,
//               "tripleKills": 0,
//               "trueDamageDealt": 2802,
//               "trueDamageDealtToChampions": 1386,
//               "trueDamageTaken": 28,
//               "turretKills": 0,
//               "turretTakedowns": 0,
//               "turretsLost": 7,
//               "unrealKills": 0,
//               "visionScore": 16,
//               "visionWardsBoughtInGame": 0,
//               "wardsKilled": 0,
//               "wardsPlaced": 10,
//               "win": false
//           },
//           {
//               "assists": 5,
//               "baronKills": 0,
//               "bountyLevel": 0,
//               "champExperience": 9081,
//               "champLevel": 12,
//               "championId": 35,
//               "championName": "Shaco",
//               "championTransform": 0,
//               "consumablesPurchased": 5,
//               "damageDealtToBuildings": 2003,
//               "damageDealtToObjectives": 2003,
//               "damageDealtToTurrets": 2003,
//               "damageSelfMitigated": 1954,
//               "deaths": 1,
//               "detectorWardsPlaced": 0,
//               "doubleKills": 0,
//               "dragonKills": 0,
//               "firstBloodAssist": true,
//               "firstBloodKill": false,
//               "firstTowerAssist": false,
//               "firstTowerKill": false,
//               "gameEndedInEarlySurrender": false,
//               "gameEndedInSurrender": true,
//               "goldEarned": 6151,
//               "goldSpent": 4800,
//               "individualPosition": "Invalid",
//               "inhibitorKills": 0,
//               "inhibitorTakedowns": 0,
//               "inhibitorsLost": 1,
//               "item0": 1056,
//               "item1": 6691,
//               "item2": 3117,
//               "item3": 0,
//               "item4": 0,
//               "item5": 0,
//               "item6": 3340,
//               "itemsPurchased": 15,
//               "killingSprees": 0,
//               "kills": 1,
//               "lane": "NONE",
//               "largestCriticalStrike": 0,
//               "largestKillingSpree": 0,
//               "largestMultiKill": 1,
//               "longestTimeSpentLiving": 581,
//               "magicDamageDealt": 15144,
//               "magicDamageDealtToChampions": 4902,
//               "magicDamageTaken": 5520,
//               "neutralMinionsKilled": 0,
//               "nexusKills": 0,
//               "nexusLost": 0,
//               "nexusTakedowns": 0,
//               "objectivesStolen": 0,
//               "objectivesStolenAssists": 0,
//               "participantId": 8,
//               "pentaKills": 0,
//               "perks": {
//                   "statPerks": {
//                       "defense": 5002,
//                       "flex": 5008,
//                       "offense": 5005
//                   },
//                   "styles": [
//                       {
//                           "description": "primaryStyle",
//                           "selections": [
//                               {
//                                   "perk": 9923,
//                                   "var1": 5,
//                                   "var2": 41,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8143,
//                                   "var1": 198,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8138,
//                                   "var1": 7,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8105,
//                                   "var1": 10,
//                                   "var2": 4,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8100
//                       },
//                       {
//                           "description": "subStyle",
//                           "selections": [
//                               {
//                                   "perk": 8234,
//                                   "var1": 5325,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8236,
//                                   "var1": 4,
//                                   "var2": 0,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8200
//                       }
//                   ]
//               },
//               "physicalDamageDealt": 7149,
//               "physicalDamageDealtToChampions": 1311,
//               "physicalDamageTaken": 1527,
//               "profileIcon": 23,
//               "puuid": "qeSkyJz2EfNgP8fniWMT8EU1gWt-pNwA64BmAeHKRz7-5DAiBpymTDK-lhsenMkWNNUKmKuzq16vGg",
//               "quadraKills": 0,
//               "riotIdName": "",
//               "riotIdTagline": "",
//               "role": "SUPPORT",
//               "sightWardsBoughtInGame": 0,
//               "spell1Casts": 36,
//               "spell2Casts": 55,
//               "spell3Casts": 43,
//               "spell4Casts": 6,
//               "summoner1Casts": 4,
//               "summoner1Id": 6,
//               "summoner2Casts": 5,
//               "summoner2Id": 4,
//               "summonerId": "c-etCr3t-fEuAPSYm9ecG4M8b9pwaL-fGE-wLxA3AMxnJiE",
//               "summonerLevel": 153,
//               "summonerName": "BrickHouse Dives",
//               "teamEarlySurrendered": false,
//               "teamId": 200,
//               "teamPosition": "",
//               "timeCCingOthers": 14,
//               "timePlayed": 691,
//               "totalDamageDealt": 22293,
//               "totalDamageDealtToChampions": 6214,
//               "totalDamageShieldedOnTeammates": 0,
//               "totalDamageTaken": 7132,
//               "totalHeal": 687,
//               "totalHealsOnTeammates": 0,
//               "totalMinionsKilled": 31,
//               "totalTimeCCDealt": 288,
//               "totalTimeSpentDead": 28,
//               "totalUnitsHealed": 1,
//               "tripleKills": 0,
//               "trueDamageDealt": 0,
//               "trueDamageDealtToChampions": 0,
//               "trueDamageTaken": 84,
//               "turretKills": 0,
//               "turretTakedowns": 0,
//               "turretsLost": 7,
//               "unrealKills": 0,
//               "visionScore": 1,
//               "visionWardsBoughtInGame": 0,
//               "wardsKilled": 1,
//               "wardsPlaced": 0,
//               "win": false
//           },
//           {
//               "assists": 1,
//               "baronKills": 0,
//               "bountyLevel": 0,
//               "champExperience": 7824,
//               "champLevel": 11,
//               "championId": 222,
//               "championName": "Jinx",
//               "championTransform": 0,
//               "consumablesPurchased": 0,
//               "damageDealtToBuildings": 1044,
//               "damageDealtToObjectives": 1044,
//               "damageDealtToTurrets": 1044,
//               "damageSelfMitigated": 2795,
//               "deaths": 9,
//               "detectorWardsPlaced": 0,
//               "doubleKills": 2,
//               "dragonKills": 0,
//               "firstBloodAssist": false,
//               "firstBloodKill": false,
//               "firstTowerAssist": false,
//               "firstTowerKill": false,
//               "gameEndedInEarlySurrender": false,
//               "gameEndedInSurrender": true,
//               "goldEarned": 6986,
//               "goldSpent": 6400,
//               "individualPosition": "Invalid",
//               "inhibitorKills": 0,
//               "inhibitorTakedowns": 0,
//               "inhibitorsLost": 1,
//               "item0": 6672,
//               "item1": 2031,
//               "item2": 3006,
//               "item3": 2015,
//               "item4": 3086,
//               "item5": 0,
//               "item6": 3340,
//               "itemsPurchased": 12,
//               "killingSprees": 2,
//               "kills": 4,
//               "lane": "NONE",
//               "largestCriticalStrike": 351,
//               "largestKillingSpree": 2,
//               "largestMultiKill": 2,
//               "longestTimeSpentLiving": 142,
//               "magicDamageDealt": 2638,
//               "magicDamageDealtToChampions": 378,
//               "magicDamageTaken": 6064,
//               "neutralMinionsKilled": 0,
//               "nexusKills": 0,
//               "nexusLost": 0,
//               "nexusTakedowns": 0,
//               "objectivesStolen": 0,
//               "objectivesStolenAssists": 0,
//               "participantId": 9,
//               "pentaKills": 0,
//               "perks": {
//                   "statPerks": {
//                       "defense": 5002,
//                       "flex": 5008,
//                       "offense": 5005
//                   },
//                   "styles": [
//                       {
//                           "description": "primaryStyle",
//                           "selections": [
//                               {
//                                   "perk": 8008,
//                                   "var1": 1,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 9111,
//                                   "var1": 237,
//                                   "var2": 100,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 9103,
//                                   "var1": 0,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8014,
//                                   "var1": 103,
//                                   "var2": 0,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8000
//                       },
//                       {
//                           "description": "subStyle",
//                           "selections": [
//                               {
//                                   "perk": 8139,
//                                   "var1": 405,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8138,
//                                   "var1": 6,
//                                   "var2": 0,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8100
//                       }
//                   ]
//               },
//               "physicalDamageDealt": 30291,
//               "physicalDamageDealtToChampions": 5384,
//               "physicalDamageTaken": 5991,
//               "profileIcon": 4854,
//               "puuid": "X1K646iFAmUySLSr39-eeZcnGVtiJpXN3bMcGb8CXiYV18uSXpR0YsxTkhTzd60yZNc9FJtgMCQppA",
//               "quadraKills": 0,
//               "riotIdName": "",
//               "riotIdTagline": "",
//               "role": "SUPPORT",
//               "sightWardsBoughtInGame": 0,
//               "spell1Casts": 3,
//               "spell2Casts": 62,
//               "spell3Casts": 21,
//               "spell4Casts": 3,
//               "summoner1Casts": 7,
//               "summoner1Id": 6,
//               "summoner2Casts": 5,
//               "summoner2Id": 4,
//               "summonerId": "YZadCDNhEEXqSVxKqP386CCU127mcG7HuWOSJ4hYQo1EOXubokCJu4_QiQ",
//               "summonerLevel": 152,
//               "summonerName": "CaptimusPRIM3",
//               "teamEarlySurrendered": false,
//               "teamId": 200,
//               "teamPosition": "",
//               "timeCCingOthers": 14,
//               "timePlayed": 691,
//               "totalDamageDealt": 33496,
//               "totalDamageDealtToChampions": 5857,
//               "totalDamageShieldedOnTeammates": 0,
//               "totalDamageTaken": 12082,
//               "totalHeal": 522,
//               "totalHealsOnTeammates": 0,
//               "totalMinionsKilled": 46,
//               "totalTimeCCDealt": 57,
//               "totalTimeSpentDead": 196,
//               "totalUnitsHealed": 1,
//               "tripleKills": 0,
//               "trueDamageDealt": 565,
//               "trueDamageDealtToChampions": 94,
//               "trueDamageTaken": 26,
//               "turretKills": 0,
//               "turretTakedowns": 0,
//               "turretsLost": 7,
//               "unrealKills": 0,
//               "visionScore": 8,
//               "visionWardsBoughtInGame": 0,
//               "wardsKilled": 0,
//               "wardsPlaced": 5,
//               "win": false
//           },
//           {
//               "assists": 4,
//               "baronKills": 0,
//               "bountyLevel": 0,
//               "champExperience": 9160,
//               "champLevel": 12,
//               "championId": 82,
//               "championName": "Mordekaiser",
//               "championTransform": 0,
//               "consumablesPurchased": 0,
//               "damageDealtToBuildings": 2089,
//               "damageDealtToObjectives": 2089,
//               "damageDealtToTurrets": 2089,
//               "damageSelfMitigated": 12792,
//               "deaths": 9,
//               "detectorWardsPlaced": 0,
//               "doubleKills": 0,
//               "dragonKills": 0,
//               "firstBloodAssist": false,
//               "firstBloodKill": false,
//               "firstTowerAssist": false,
//               "firstTowerKill": false,
//               "gameEndedInEarlySurrender": false,
//               "gameEndedInSurrender": true,
//               "goldEarned": 7714,
//               "goldSpent": 7200,
//               "individualPosition": "Invalid",
//               "inhibitorKills": 0,
//               "inhibitorTakedowns": 0,
//               "inhibitorsLost": 1,
//               "item0": 4633,
//               "item1": 3047,
//               "item2": 3065,
//               "item3": 0,
//               "item4": 0,
//               "item5": 0,
//               "item6": 3340,
//               "itemsPurchased": 11,
//               "killingSprees": 1,
//               "kills": 4,
//               "lane": "NONE",
//               "largestCriticalStrike": 0,
//               "largestKillingSpree": 2,
//               "largestMultiKill": 1,
//               "longestTimeSpentLiving": 119,
//               "magicDamageDealt": 39305,
//               "magicDamageDealtToChampions": 8429,
//               "magicDamageTaken": 9650,
//               "neutralMinionsKilled": 0,
//               "nexusKills": 0,
//               "nexusLost": 0,
//               "nexusTakedowns": 0,
//               "objectivesStolen": 0,
//               "objectivesStolenAssists": 0,
//               "participantId": 10,
//               "pentaKills": 0,
//               "perks": {
//                   "statPerks": {
//                       "defense": 5002,
//                       "flex": 5008,
//                       "offense": 5005
//                   },
//                   "styles": [
//                       {
//                           "description": "primaryStyle",
//                           "selections": [
//                               {
//                                   "perk": 8010,
//                                   "var1": 36,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 9111,
//                                   "var1": 423,
//                                   "var2": 160,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 9105,
//                                   "var1": 10,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8014,
//                                   "var1": 168,
//                                   "var2": 0,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8000
//                       },
//                       {
//                           "description": "subStyle",
//                           "selections": [
//                               {
//                                   "perk": 8126,
//                                   "var1": 107,
//                                   "var2": 0,
//                                   "var3": 0
//                               },
//                               {
//                                   "perk": 8135,
//                                   "var1": 349,
//                                   "var2": 2,
//                                   "var3": 0
//                               }
//                           ],
//                           "style": 8100
//                       }
//                   ]
//               },
//               "physicalDamageDealt": 2435,
//               "physicalDamageDealtToChampions": 735,
//               "physicalDamageTaken": 6712,
//               "profileIcon": 977,
//               "puuid": "zWAneDd8T8WmlBwAFvHG387I9dTX32miKGskpTRWx8HwoYSNK8XbkmBqxuQ18Bd1A2lw4iSv-5yfvg",
//               "quadraKills": 0,
//               "riotIdName": "",
//               "riotIdTagline": "",
//               "role": "SUPPORT",
//               "sightWardsBoughtInGame": 0,
//               "spell1Casts": 70,
//               "spell2Casts": 24,
//               "spell3Casts": 43,
//               "spell4Casts": 7,
//               "summoner1Casts": 4,
//               "summoner1Id": 4,
//               "summoner2Casts": 3,
//               "summoner2Id": 6,
//               "summonerId": "bdEZgxhq4-7yhJ2zXVRyXG5IyTkMK9JBgclQ8N8yUx95_LI",
//               "summonerLevel": 181,
//               "summonerName": "BrickHouse Ganks",
//               "teamEarlySurrendered": false,
//               "teamId": 200,
//               "teamPosition": "",
//               "timeCCingOthers": 6,
//               "timePlayed": 691,
//               "totalDamageDealt": 44913,
//               "totalDamageDealtToChampions": 9713,
//               "totalDamageShieldedOnTeammates": 0,
//               "totalDamageTaken": 16362,
//               "totalHeal": 1083,
//               "totalHealsOnTeammates": 0,
//               "totalMinionsKilled": 51,
//               "totalTimeCCDealt": 21,
//               "totalTimeSpentDead": 176,
//               "totalUnitsHealed": 1,
//               "tripleKills": 0,
//               "trueDamageDealt": 3172,
//               "trueDamageDealtToChampions": 547,
//               "trueDamageTaken": 0,
//               "turretKills": 1,
//               "turretTakedowns": 1,
//               "turretsLost": 7,
//               "unrealKills": 0,
//               "visionScore": 0,
//               "visionWardsBoughtInGame": 0,
//               "wardsKilled": 0,
//               "wardsPlaced": 0,
//               "win": false
//           }
//       ],
//       "platformId": "NA1",
//       "queueId": 900,
//       "teams": [
//           {
//               "bans": [
//                   {
//                       "championId": 236,
//                       "pickTurn": 1
//                   },
//                   {
//                       "championId": 11,
//                       "pickTurn": 2
//                   },
//                   {
//                       "championId": 64,
//                       "pickTurn": 3
//                   },
//                   {
//                       "championId": 63,
//                       "pickTurn": 4
//                   },
//                   {
//                       "championId": -1,
//                       "pickTurn": 5
//                   }
//               ],
//               "objectives": {
//                   "baron": {
//                       "first": false,
//                       "kills": 0
//                   },
//                   "champion": {
//                       "first": false,
//                       "kills": 30
//                   },
//                   "dragon": {
//                       "first": true,
//                       "kills": 2
//                   },
//                   "inhibitor": {
//                       "first": true,
//                       "kills": 1
//                   },
//                   "riftHerald": {
//                       "first": false,
//                       "kills": 0
//                   },
//                   "tower": {
//                       "first": true,
//                       "kills": 7
//                   }
//               },
//               "teamId": 100,
//               "win": true
//           },
//           {
//               "bans": [
//                   {
//                       "championId": 238,
//                       "pickTurn": 6
//                   },
//                   {
//                       "championId": 25,
//                       "pickTurn": 7
//                   },
//                   {
//                       "championId": 11,
//                       "pickTurn": 8
//                   },
//                   {
//                       "championId": 63,
//                       "pickTurn": 9
//                   },
//                   {
//                       "championId": 350,
//                       "pickTurn": 10
//                   }
//               ],
//               "objectives": {
//                   "baron": {
//                       "first": false,
//                       "kills": 0
//                   },
//                   "champion": {
//                       "first": true,
//                       "kills": 26
//                   },
//                   "dragon": {
//                       "first": false,
//                       "kills": 0
//                   },
//                   "inhibitor": {
//                       "first": false,
//                       "kills": 0
//                   },
//                   "riftHerald": {
//                       "first": false,
//                       "kills": 0
//                   },
//                   "tower": {
//                       "first": false,
//                       "kills": 1
//                   }
//               },
//               "teamId": 200,
//               "win": false
//           }
//       ],
//       "tournamentCode": ""
//   }
// }