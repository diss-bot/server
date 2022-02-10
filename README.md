# diss-bot

diss-bot is a Discord bot that is deployed on Heroku with a MongoDB database.

![data Flow](/UML.jpg)

## Installation

to install run `git@github.com:diss-bot/server.git`

run `npm install`

## Usage



## Routes



## Features

- **Create**
  - **$diss signup**
  - After entering the command in Discord, diss-bot will collect the udername and id from Discord and store it in MongoDB.

- **Register**
  - **$diss register `<game name>` `<in-game name>`**
  - When ready to be dissed, enter the command with a game and your gamertag. diss-bot will use that info and get your puuid and store that to your account in MongoDB.

- **Roast**
  - **$diss roast `<game name>` @`<opponents nickname>`**
  - After a game, make your diss public! Enter the command, game, and up to three friends nicknames who are register in diss-bot. diss-bot will pull the last games data even if you didn't play in the same match and compare it. diss-bot will roast the loser (and maybe the winner) as well as save those stats to the players accounts.

- **Leaderboard**
  - **$diss leaderboard**
  - After a few game or a lot of games, use this command to see who's 

- **Help**
  - **$diss help**
  - After entering the command in Discord, diss-bot will collect the udername and id from Discord and store it in MongoDB.

## Created by:

- **Daniel Jackson:** https://github.com/daniel-jacks

- **Micheal Metcalf:** https://github.com/Metty82

- **Steve Ngo** https://github.com/alsosteve

- **Dario Vitorte** https://github.com/dar5o
