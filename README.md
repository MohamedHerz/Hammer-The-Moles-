
# Hammer the Mole
#### Date 07-OCT-25
#### By: Mohamed Hassan

***
#### [GitHub](https://github.com/MohamedHerz/Hammer-The-Moles-) | [Surge](https://sordid-quince.surge.sh/gamePage.html)


***
[image](https://www.alamy.com/stock-photo-a-whacking-game-at-carnival-82403126.html?imageid=A97C2ED6-B580-4298-8AF1-0C9B9B2C9922&pn=1&searchId=a563ffd7502e5c332b90a809e98fa87d&searchtype=0)
#### Hammer The Moles is a famous game in carnivals, the player is handed a hammer and he will attempt to hit
#### the moles, the moles only surface out of their holes for a short time, if the player hit the mole
#### successfully he will gather points in the scoreboard. This project will digitalize this game into
#### a browser game where the player is handed out a pixelated hammer instead of a physical one.

***

### ***Description***
#### This project is made for GA software eng course in GA for unit1. the game is about hitting moles that pop up randomly, with each hit the player gains scores.


***
### ***Methods used***
* SetInterval
*  HOF
  * forEach
* if statement
***
### **Getting started**
#### Home page will load first it present a short description about the game along with a hyperlink to the github repo of the project, once user clicks on Game button it will load the game page. at the game page user should click on start game to start the timer once started moles will start poping up, with each correct hit player will gain scores until the timer is up after 40 seconds.

***


### ***QA***
- [x] if the mole leaves a hole it will no longer give score to the player
- [x] if the time is up score will remain unchanged
- [ ] ~~user doesn't have to refresh page to start a new game~~
***
### initial sudo code, *changes have been made through out coding the game.*
#### The game initiate with a 2d array grid of 5x5.
#### the each cell in the array is represented as an empty hole in html.
#### every 3-2 seconds a random cell in the grid becomes active, once active a picture of mole shows up on the cell in the browser, if the player clicked over that active cell, he will gain points in the scoreboard.
#### The game keeps running for 1 minute, once done the score of the player is added into an object.
#### The timer wont start unless the player hits start button
#### The game shows the player any score total from his last attempts.
#### If the player hit a cell that isn't active then no points will be gathered.

***
### **Credits**
#### SetInterval guide: GA instructor: Saad Iqbal
#### Back-ground Image: [google search](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcartoon-dirt-background&psig=AOvVaw1fXRD8QGLJE98SlRYSJ61H&ust=1759164348314000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCPjR0on0-48DFQAAAAAdAAAAABAl)
#### handeling event listeners: [StackOverFlow](https://stackoverflow.com/questions/28610365/how-can-i-add-an-event-for-a-one-time-click-to-a-function)





