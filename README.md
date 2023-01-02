# WFRP 4 ED Multipurpose Bot

[![Dependencies](https://img.shields.io/npm/v/discord.js?color=lightblue&label=discord.js)](https://www.npmjs.com/package/discord.js)

## About

The idea for this bot was to make online RPG sessions a lot easier and as a consequence, enjoy them more. For now there are only available commands to roll the dice, calculate SL and compare two tests.

## Features/Goals
### Features:
#### Commands:
- `/roll [dices]` e.g. `/roll 3d6` - this command will roll 3, 6-sided dice  
  
   Modifiers:  
      
    - `hide: [true/false]` e.g `/roll 2d10 hide: true` - this command will roll 2, 10-sided dice, the result is only visible for you
- `/test [skill_level]` e.g. `/test 56` - this command will roll 1k100 dice, compare roll with your input, and show the result (success/fail)  
  
  Modifiers:  
    
    - `hide: [true/false]` - same as /roll
    - `difficulty: [number]` - e.g. `/test 56 10` - this command will add '10' to your skill_level
    - `sl: [true/false]` - e.g. `/test 56 sl: true` - this command will calculate the SL difference between your roll and skill level  
    You can mix these modifiers as you want, for example: `/test 54 difficulty: -20 sl: true`  
    and example output: `Roll: 79, SL: (-4), Impressive Failure`
- `/opposed [skill_level]` - this command requires two players to execute this command and then it will calculate the SL difference between their test
  
  Modifiers:
  
   - `hide: [true/false]` - same as /roll

#### Other:
- If you create chat channel named 'roll-archive' then every deleted message will go there
### Planned Features:
- Add cheatsheet for GM/Players for statuses like "exhaustion" and other
- Add Music bot that allows to stream local music to make better immersion (like from [Tabletop Audio](https://tabletopaudio.com/))
- Add Crit Hit Table and Normal Hit Table  
- Add Polish translation  
  

## Installation

### Configuring Bot:

1. Go to  [Discord Developer Portal](https://discord.com/developers/applications)
2. Click __New Application__
3. Name it any way you want
4. Copy `APPLICATION ID`
5. Click __Bot__ from menu list
6. Click __Add Bot__
7. Click __Reset Token__ and Copy your `TOKEN` (Careful! Don't show anyone your token)
8. Scroll down and check `MESSAGE CONTENT INTENT`
9. Then go to `OAuth2` -> `URL Generator`
10. In `SCOPES` click __bot__ then in `BOT PERMISSIONS` click __Administrator__
11. Scroll down, copy your `GENERATED URL` and invite bot to your discord server.

### Configuring Application:  

1. Make sure that you have installed [Node.js](https://nodejs.org/en/)
2. Clone this repository
3. Rename `config-example.json` to `config.json`
4. Paste your __TOKEN__ and __APPLICATION ID__ that you previously saved
5. Run command line, proceed to the directory with this repository then run `npm i`
6. Run `node deploy.js`
7. After every step run `node index.js`
8. Have fun!

If you have any problems or suggestions feel free to create new issue or contact me on Discord: <b>Arashayo#4858</b>
