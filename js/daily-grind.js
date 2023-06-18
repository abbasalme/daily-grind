/*

    Here are the items we believe we'll need to produce for each days coffee

    pic - img src 
    alt - the alt tag for the img
    color - color to match image
    desc - description of coffee 
    name -  name of the coffee 
    day - the day of the week

*/

function coffeeTemplate(coffee){
    return `<p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
                <strong class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`
      ;
    }
    



let myDate = new Date();

let today = myDate.getDay();

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


//today = 3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }
 
 today = parseInt(today);

 //console.log(today);

switch(today){

    case 0:
        today = "Sunday";
        coffee = {
            name:"Caramel Latte",
            color: "pink",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Sunday",
            desc: `Life is better with caramel!`
         };

     break;


    case 1:
        today = "Monday";
        coffee = {
          name:"Bubble Tea",
          color: "pink",
          pic: "images/bubble-tea.jpg",
          alt: "A picture of a bubble tea",
          day: "Monday",
          desc: `I like me some bubble tea!`
       };
        
   break;
      
   case 2:
    today = "Tuesday";
    coffee = {
       name:"Drip",
       color: "black",
       pic: "images/drip.jpg",
       alt: "A picture of a drip coffee",
       day: "Tuesday",
       desc: `Give it to me straight!` 
    };
    break;

    case 3:
        today = "Wednesday";
        

     break;

     case 4:
        today = "Thursday";
        
     break;

     case 5:
        today = "Friday";
        
     break;

     case 6:
        today = "Saturday";
        
     break;

    
 
   default:
     today = "Not sure what day it is!";
}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color; 


//alert(today);
console.log(coffee);