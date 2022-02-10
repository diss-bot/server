'use strict';

const numGen = require('../server/util/numGen.js');

module.exports = function (kindOfRoast, arrayOfPlayers) {

  let winner, secondPlace, thirdPlace, fourthPlace, user1, user2, user3, user4;
  if (arrayOfPlayers) [user1, user2, user3, user4] = arrayOfPlayers;
  if (user1) winner = user1.name;
  if (user2) secondPlace = user2.name;
  if (user3) thirdPlace = user3.name;
  if (user4) fourthPlace = user4.name;

  let leagueRoasts = [
    
      "You are so bad at League of Legends that you make the game look bad. You are the worst player I have ever seen and you should probably just give up.",
      "You are terrible at League of Legends. You can't even last hit a minion. You're so bad, you make Jinx look like a world-class player.",
      "I would roast you but you'd probably think it had something to do with pizzas.",
      "You're so bad at this game, you might as well uninstall it and go back to playing Farmville. Your K/D ratio is embarrassing, and you can't even last more than 10 minutes in a game without getting killed. You're definitely the worst player on our team, and everyone else is putting up with you because they feel sorry for you.",
      "If you ordered pizza and had to pick it up because you had it delivered to the wrong place, your team probably would have won.",
      "You have as much impact on lane as that scuttle crab over there. Also Your voice is annoying.",
      "I wish you turned into a ward every time you died. Also wards last 90 seconds, so you would probably hit the three ward limit often...",
      "Your brain has 2 parts, left and right. But your right brain has nothing left and your left brain has nothing right.",
      "If you could throw baseballs half as fast as you threw this game, you could be a pitcher in the MLB.",
      "I know you're doing your best but please stop, I want to win the game."
    
  ]

  let teamLoss = [
    
      "Noah couldn't even carry these animals.",
      "Your team has less map awareness than Christopher Columbus.",
      "The enemy team probably thought the tutorial was a harder challenge.",
      "Your team fed so hard, you guys could have solved world hunger.",
      "Can your team even beat the first level of super mario?",
      "Can you guys come to my funeral so you can let me down one last time.",
      "Your team was clearly out of their league. Maybe you should have stuck to playing with bots.",
      "I would trade your team for 3 siege minions. Yes 3, 4 would be too generous.",
      "Are you guys actually real players? Oh, I thought we were playing against bots.",
      "I wish this team had Amumu on it. At least his tears are usefull."

  ]

  let genericRoasts = [

      "Do you even have fingers?",
      "You're a disgrace to the game.",
      "(1) Preheat the oven to 375 degrees Fahrenheit. (2) Cut the 'user' into small, even pieces. (3) Spread the 'user' onto a baking sheet and roast for 10-12 minutes, or until the 'user' is golden brown and slightly crispy. (4) Enjoy!",
      "How are you so bad at a kids game?",
      "It's not letting me press E to take over this BOT!",
      "I think you should try picking up a new hobby.",
      "If underperforming was a job you'd be a millionare!",
      "You're the best player besides every other player I've ever met.",
      " Do you want a participation trophy?"

  ]

  let compare2Players = [
    
    `${winner} did better than ${secondPlace}. What a try hard.`,
    `${winner} crushed it in game. ${secondPlace}, you might want to stick to candy crush.`,
    `${winner} you did subpar. ${secondPlace} , if you spent as much time in game as you do your looks, You still wouldn't get very far.`,
    `${winner}, Hey look, you won against ${secondPlace}. that's probably not that hard of a feat though.`,
    `${winner}, you only won because ${secondPlace} didn't perform as usual. ${secondPlace}  is probably just a 3 year old kid.`,
    `${winner}, How did you manage to beat ${secondPlace} at the game? You're both terrible.`,
    `${winner}, Nice job! ${secondPlace} , I think getting a second job would be a better use of your free time.`,
    `${winner}, you did ok i guess... Hey, ${secondPlace}, you doin' alright? ${secondPlace}, what's it like finding something else you're bad at?`,
    `${winner}, you should start tutoring ${secondPlace} because they just got schooled.`,
    `${winner} [insert nice response to winner] ${secondPlace} [insert mean roast to loser]`

  ]

  let compare3Players = [

    
    `${winner} crushed it in game. ${secondPlace} and ${thirdPlace}, you might want to stick to tic-tac-toe.`,
    `${winner} you did subpar. ${secondPlace} , if you spent as much time in game as you do your looks, you still wouldn't get very far. As for ${thirdPlace}, you should just go...`,
    `Hey look, ${winner} won against ${secondPlace} and ${thirdPlace}. That's probably not that hard of a feat though.`,
    `${winner}, How did you manage to beat ${secondPlace} and ${thirdPlace} at this game? You're the worst of you three idiots.`,
    `${winner}, you did ok i guess... Hey, ${secondPlace}, you doin' alright? ${thirdPlace}, what's it like finding something else you're bad at?`,
    `Bro, ${winner} did ${secondPlace} and ${thirdPlace} so dirty they need to hose off on the side of the house!`, 
    `${secondPlace} and ${thirdPlace}, you guys are the biggest losers I know. You can't even win a game. ${winner}, on the other hand, is a total winner.`,
    `${winner}: ${secondPlace} and ${thirdPlace}, you guys are the laughing stock of the gaming community. You guys can't even win a game against a noob like me.`,
    `${winner} is a champion, while ${secondPlace} and ${thirdPlace} have fallen to the wayside.`
    // `${winner} [insert nice response to winner] ${secondPlace} [insert mean roast for losing to ${winner}] ${thirdPlace} [insert mean roast for losing to both of those halfwits]`

  ]

  let compare4Players = [
    
    `${winner} crushed it in game. ${secondPlace} and ${thirdPlace}, you might want to stick to tic-tac-toe. ${fourthPlace}, you should just stop`,
    `${winner} you did subpar. ${secondPlace} , if you spent as much time in game as you do your looks, you still wouldn't get very far. As for ${thirdPlace} and ${fourthPlace}, you should just go...`,
    `Hey look, ${winner} won against ${secondPlace}, ${thirdPlace}, and ${fourthPlace}. That's probably not that hard of a feat though.`,
    `${winner}, How did you manage to beat ${secondPlace}, ${thirdPlace}, and ${fourthPlace} at this game? You're the worst of you four simpletons.`,
    `${winner}, you did ok i guess... Hey, ${secondPlace}, you doin' alright? ${thirdPlace}, what's it like finding something else you're bad at? ${fourthPlace} just go cry in the corner like normal`,
    `Bro, ${winner} did ${thirdPlace}, ${fourthPlace} so dirty they need ${secondPlace} to hose off on the side of the house!`, 
    `${secondPlace}, ${thirdPlace}, and ${fourthPlace}, you guys are the biggest losers I know. You can't even win a game. ${winner}, on the other hand, is a total winner.`,
    `${winner}: ${secondPlace}, ${thirdPlace}, and ${fourthPlace}, you guys are the laughing stock of the gaming community. You guys can't even win a game against a noob like me.`,
    `${winner} [insert nice response to winner] ${secondPlace} [insert mean roast for losing to ${winner}] ${thirdPlace} [insert mean roast for losing to both of those halfwits] ${fourthPlace} [.... this is getting embarrassing]`
    // `(1) Preheat the oven to 375 degrees Fahrenheit. (2) Cut ${secondPlace} into small, even pieces. (3) Spread ${thirdPlace} onto a baking sheet and roast for 10-12 minutes, or until ${fourthPlace} is golden brown and slightly crispy. (4) Enjoy ${winner}!`,

  ]

  let wins = [
    
      "You're the best player in the lobby! Great job!",
      "You played an excellent game and deserved the win.",
      "[insert positive feedback]",
      "Even though you only won because the other team was terrible, I still think you're a good player :).",
      "Although you may have won your game, you didn't play very well.",
      "Good job! I didn't think you had it in you to win.",
      "That victory was impressive, for a newbie.",
      "You nearly lost but thankfully you outskilled a bunch of bots.",
      "How does it feel to beat a bunch of little kids?",
      "Nice job on the win. You showed those bots <3."
    
  ]

  if (kindOfRoast === 'leagueRoasts') {
    return leagueRoasts[numGen()];
  }

  else if (kindOfRoast === 'teamLoss') {
    return teamLoss[numGen()];
  }

  else if (kindOfRoast === 'genericRoasts') {
    return genericRoasts[numGen()];
  }

  else if (kindOfRoast === 'compare2Players') {
    return compare2Players[numGen()];
  }

  else if (kindOfRoast === 'compare3Players') {
    return compare3Players[numGen()];
  }

  else if (kindOfRoast === 'compare4Players') {
    return compare4Players[numGen()];
  }

  else if (kindOfRoast === 'wins') {
    return wins[numGen()];
  }

}
