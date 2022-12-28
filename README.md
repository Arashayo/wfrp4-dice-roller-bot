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
  
If you have any suggestions feel free to contact me here or on Discord: <b>Arashayo#4858</b>

## Instalation

WIP
