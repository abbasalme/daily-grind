/*

    Here are the items we believe we'll need to produce for each days coffee

    pic - img src 
    alt - the alt tag for the img
    color - color to match image
    desc - description of coffee 
    name -  name of the coffee 
    day - the day of the week

*/



let myDate = new Date();

let today = myDate.getDay();

//today = 3;

switch(today){

   case 2:
         today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
   break;
 
   default:
     today = "Not sure what day it is!";
}


coffee = {
    name: "Bubble Tea",
    color: "pink",
    pic: "images/bubble-tea.jpg",
    alt: "A picture of Bubble Tea ",
    day: "Wednesday",
    desc: `I like me some bubble tea! `
}

//alert(today);
console.log(coffee);