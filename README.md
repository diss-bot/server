# diss-bot

diss-bot is a Discord bot that is deployed on Heroku with a MongoDB database.

![data Flow](/UML.jpg)

## Installation

to install run `git@github.com:diss-bot/server.git`

run `npm install`

## Usage

Click the link below and add it to any discord channel you have permissions to.
https://discord.com/api/oauth2/authorize?client_id=939245133881278504&permissions=83968&scope=bot

## Routes


## Features

- **Create**
  - **$diss signup**
  - After entering the command in Discord, diss-bot will collect the udername and id from Discord and store it in MongoDB.

- **Register**
  - **$diss register `<game name>` `<in-game name>`**
  - When ready to be dissed, enter the command with a game and your gamertag. diss-bot will use that info and get your puuid and store that to your account in MongoDB.

- **VS**
  - **$diss vs `<game name>` @`<discord nickname>`**
  - After a game, make your diss public! Enter the command, game, and up to three friends nicknames who are register in diss-bot. diss-bot will pull the last games data even if you didn't play in the same match and compare it. diss-bot will roast the loser (and maybe the winner) as well as save those stats to the players accounts.

- **Roast**
  - **$diss roast `<game name>` @`<discord nickname>`**
  - If you ever want to check how you or one of your bonehead buds, enter this command to check their stats and see what diss-bot thinks of their recent proformance. diss-bot will pull the most recent match from the Riot API, analyze that data, and present it's verdict.

- **Help**
  - **$diss help**
  - If you are stuck and don't know what your doing, user this command.

## Created by:

- **Daniel Jackson:** https://github.com/daniel-jacks

- **Micheal Metcalf:** https://github.com/Metty82

- **Steve Ngo** https://github.com/alsosteve

- **Dario Vitorte** https://github.com/dar5o
