# <img src="public/icons/icon_48.png" width="45" align="left"> Thunkio

Helps users read more effectively by bolding the first few letters of each letter in the body of a webpage.

## Example
|Before| After |
-------|----
|It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.|<span><b>I</b><span>t</span> <b>w</b><span>as</span> <b>t</b><span>he</span> <b>be</b><span>st</span> <b>o</b><span>f</span> <b>ti</b><span>mes,</span> <b>i</b><span>t</span> <b>w</b><span>as</span> <b>t</b><span>he</span> <b>wo</b><span>rst</span> <b>o</b><span>f</span> <b>ti</b><span>mes,</span> <b>i</b><span>t</span> <b>w</b><span>as</span> <b>t</b><span>he</span> <b>a</b><span>ge</span> <b>o</b><span>f</span>      <b>wis</b><span>dom,</span> <b>i</b><span>t</span> <b>w</b><span>as</span> <b>t</b><span>he</span> <b>a</b><span>ge</span> <b>o</b><span>f</span> <b>fool</b><span>ishness,</span> <b>i</b><span>t</span> <b>w</b><span>as</span> <b>t</b><span>he</span> <b>ep</b><span>och</span> <b>o</b><span>f</span> <b>be</b><span>lief,</span> <b>i</b><span>t</span> <b>wa</b><span>s</span>      <b>t</b><span>he</span> <b>ep</b><span>och</span> <b>o</b><span>f</span> <b>in</b><span>credulity,</span> <b>i</b><span>t</span> <b>w</b><span>as</span> <b>t</b><span>he</span> <b>sea</b><span>son</span> <b>o</b><span>f</span> <b>Li</b><span>ght,</span> <b>i</b><span>t</span> <b>w</b><span>as</span> <b>t</b><span>he</span> <b>sea</b><span>son</span>      <b>o</b><span>f</span> <b>Dark</b><span>ness,</span> <b>i</b><span>t</span> <b>w</b><span>as</span> <b>t</b><span>he</span> <b>sp</b><span>ring</span> <b>o</b><span>f</span> <b>ho</b><span>pe,</span> <b>i</b><span>t</span> <b>w</b><span>as</span> <b>t</b><span>he</span> <b>win</b><span>ter</span> <b>o</b><span>f</span> <b>de</b><span>spair,</span> <b>w</b><span>e</span>      <b>h</b><span>ad</span> <b>every</b><span>thing</span> <b>be</b><span>fore</span> <b>u</b><span>s,</span> <b>w</b><span>e</span> <b>h</b><span>ad</span> <b>noth</b><span>ing</span> <b>be</b><span>fore</span> <b>u</b><span>s,</span> <b>w</b><span>e</span> <b>we</b><span>re</span> <b>a</b><span>ll</span> <b>go</b><span>ing</span>      <b>di</b><span>rect</span> <b>t</b><span>o</span> <b>Heav</b><span>en,</span> <b>w</b><span>e</span> <b>we</b><span>re</span> <b>a</b><span>ll</span> <b>go</b><span>ing</span> <b>di</b><span>rect</span> <b>t</b><span>he</span> <b>oth</b><span>er</span> <b>wa</b><span>y—in</span> <b>sho</b><span>rt,</span>      <b>t</b><span>he</span> <b>pe</b><span>riod</span> <b>w</b><span>as</span> <b>s</b><span>o</span> <b>f</b><span>ar</span> <b>li</b><span>ke</span> <b>t</b><span>he</span> <b>pre</b><span>sent</span> <b>pe</b><span>riod,</span> <b>th</b><span>at</span> <b>so</b><span>me</span> <b>o</b><span>f</span> <b>i</b><span>ts</span> <b>nois</b><span>iest</span>      <b>author</b><span>ities</span> <b>in</b><span>sisted</span> <b>o</b><span>n</span> <b>i</b><span>ts</span> <b>be</b><span>ing</span> <b>re</b><span>ceived,</span> <b>f</b><span>or</span> <b>go</b><span>od</span> <b>o</b><span>r</span> <b>f</b><span>or</span> <b>ev</b><span>il,</span> <b>i</b><span>n</span> <b>th</b><span>e</span>      <b>su</b><span>perlative</span> <b>de</b><span>gree</span> <b>o</b><span>f</span> <b>compar</b><span>ison</span> <b>on</b><span>ly.</span>    </span>

## Formatting Rules

See [`_boldifyWord(word)`](src/boldify.js) for specifics. 

General idea is that we take N/2 syllables and bold those. If the word has only 1 syllable then we bold 33% of the characters. 

TODO: Eventually, handle compound words better.
Currently: Highlighted -> <b>High</b>lighted
Expected: Highlighted -> <b>Highli</b>ghted


## Install

[**Chrome** extension](https://github.com/chitalian/Thunkio/raw/main/build.zip) 

## Contribution

Suggestions and pull requests are welcomed!.
