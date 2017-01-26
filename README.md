
# Angular-Card-Manager
This is used to generate card UI using angular components

The main code for the angular component is inside the dist folder.

To use the code download or clone this repository.

<h3>Pre-requisites</h3>
* Angular.js
* Bootstrap

<h3>How To Use</h3>

To use this module you need to include the js and css file for the card manager.
include the js file as shown below

`<script src="dist/javascript/cardManager.js"></script>`


Include the css file as shown below

`<link rel="stylesheet" href="dist/css/cardManager.css">`

Then just inlude the module as a dependency ino your application

`var myApp=angular.module("myApp",['cardManager']);`

Now your ready to go, just insert the below tag anywhere in your code to get started

`<card-manager url="/data" onopen="cntrl.open" ondelete="cntrl.delete" onprint="cntrl.print"></card-manager>`

<h3>Options</h3>
* `url`-The module comes in built with an ajax service that will populate the page with data. you need to provide the end point of api which needs to be in called in your environment
and the module with automaticallly fetch the data.
* `mydata`- Data can also be passed on to module via this attribute
* `onopen`- This attribute takes a user defined function as a parameter.The function will be invoked when user clicks Open button on the card
* `ondelete`- This attribute takes a user defined function as a parameter.The function will be invoked when user clicks Delete button on the card
* `onprint`- This attribute takes a user defined function as a parameter.The function will be invoked when user clicks Print button on the card


<h3>Data Format</h3>

The module expects JSON data in the below format
`[{
    "title":"cardamon tea",
    "description":"This is the best tea in the world to drink,this is considered the best tea to drink at anytime of the day or week,this is the best tea in the world to drink,this is considered the best teat to drink at anytime of the day or week",
    "background_image":"/images/1.jpg",
    "icon":"/images/icon1.png"
},
{
"title":"honey tea",
    "description":"This is the best tea in the world to drink,this is considered the best tea to drink at anytime of the day or week",
    "background_image":"/images/2.jpg",
    "font_color":"rgb(6, 6, 6)",
    "icon":"/images/icon2.png"
}]`

The different attributes to be passed are

* `title`- This will display text in the header of the card
* `description`-short description for the card
* `background_image`- Each card has a background image
* `font_color`-Incase you do not want the default font color which is rgb(255, 255, 255)
* `icon`-Assigns an icon to the card.If no icon provided it takes default


<h3>Example App</h3>

I have uploaded the component with an example so you can look at it and structure you code accordingly.

To Run the sample app

* run `npm install`
* run `npm start`

Go to `http://localhost:3000`

You should see a list of 7 cards on your screen
![Alt text](/screenshot.png?raw=true "Optional Title")
