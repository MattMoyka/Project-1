# Project Luna
# Project Overview

## Project Name

Project Luna

## Project Description

a personal assistant/homepage. Something like jarvis, alexa, cortana, siri. customizable widgets.

## API and Data Sample

1. Rick and Morty
https://rickandmortyapi.com/api/character?name=rick
2. weather api
http://api.weatherapi.com/v1/forecast.json?key=2d30ac272187439b8e1183146213008&q=11713&days=1&aqi=no&alerts=no
3. NewsApi 
https://newsapi.org/v2/everything?q=bitcoin&apiKey=1941ec12d2054d399f9949a853bd47b6

## Wireframes

https://www.figma.com/file/h5HvFS7mEqRq2X963ulnhJ/Web-interface?node-id=6%3A2

### MVP/PostMVP

#### MVP 

- Find and use external api 
- Render data on page 
- Allow user to search topics of news
- use zip code to find weather data
- Write down to do lists
- use a timer

#### PostMVP  

- Add more widgets options
- Use local storage to save user to do list and location
- favorites page for news
- kanban style to do list
- rick and morty game
- styling buttons and widgets to look elevated

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Aug 27-29| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Aug 30| Project Approval | Complete
|Aug 30-31| Core Application Structure (HTML, CSS, etc.) | Complete
|Sept 1| Pseudocode / actual code | Complete
|Sept 1| Initial Clickable Model  | Complete
|Sept 1| MVP | Complete
|Sept 2| Presentations | Incomplete

## Priority Matrix

https://www.figma.com/file/h5HvFS7mEqRq2X963ulnhJ/Web-interface?node-id=9%3A2

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| html set up | H | 3hrs| 3hrs | 3hrs |
| Pulling in API data | H | 3hrs| 3hrs | 3hrs |
| Creating search functions for API | H | 3hrs| 3hrs | 3hrs|
| Todo list with input/records input to display it| H | 3hrs| 5hrs | 5hrs |
| Build a timer that can be set to any time | H | 3hrs|3hrs |3hrs |
|news article favorites page| M | 5hrs | 0hrs |  |
| New article display with js media query | M | 3hrs |4hrs |4hrs|
| CSS positioning elements and designing widgets| M | 6hrs| 6hrs | 6hrs |
| Fill in empty widget with duckhunt | M | 3hrs| 2hrs | 2hrs |
| Media Query - mobile first application | H | 2hrs | 3hrs | 3hrs ||
| Rick and Morty pop up | L | 6hrs | 8hrs | 8hrs |
| Total | H | 40hrs| 38hrs | 38hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function listChar(selections, divSelection) {
  console.log(selections);
  selections.forEach((element, index) => {

    let charDiv = document.createElement('button');
    charDiv.classList.add('charCard');
    charDiv.setAttribute('id', index);
    let charName = document.createElement('div');
    charName.classList.add('charName');
    let charImg = document.createElement('img');
    charImg.classList.add('charImg');

    charDiv.addEventListener('click', (index) => {
      console.log(index.target.id);
      charDiv.classList.add(j);
      let characterSelect = index.target;
      battle.appendChild(characterSelect);
      j = "two";
    });


    charName.innerText = element.name;
    charImg.src = element.image;
    charDiv.appendChild(charName);
    charDiv.appendChild(charImg);
    divSelection.appendChild(charDiv);
  })

}
```
This block of code takes input of an html div which is selected by clicking on the div of the rick and morty character you want, then appends it to a new div. The two selected characters are set on either side of the screen.

## Change Log
Change: Swapped the position of the news and the todo list
Reason: After building it I felt the news needed a lot more space to display the articles effectively

Change: I added in the rick and morty api
Reason: I felt that the website needed something fun

