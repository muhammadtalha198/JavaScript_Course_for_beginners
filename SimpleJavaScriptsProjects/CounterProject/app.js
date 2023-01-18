
//Simple Counter methods in Js. 

/* this will be our counter variable which we will increment , decrement and reset 
through these those three buttons fron the wesite. */ 
let counterNumber = 0;

//In this method increment the counterNumber variable
const incrementInNumber = () => { 
    
    counterNumber++;

    //this line of code is to show the incremented number on the website.
    document.getElementById("counter").innerHTML = counterNumber;
}

//In this method decrement the counterNumber variable
const decrementInNumber = () => {
    
    counterNumber--;
    
    //this line of code is to show the decremented number on the website.
    document.getElementById("counter").innerHTML = counterNumber;
}


//In this method reset the counterNumber variable
const resetTheNumber = () => {
   
    counterNumber = 0;
   
    //this line of code is to show the reset number on the website.
    document.getElementById("counter").innerHTML = counterNumber;
}

/*
    incrementButton is defined in index.html page and we assign an idName "increment"
    to it and here we are acessing it by "document.getElementById("increment");"
    and in second line of code we are performing an event on that button to perform
    some task by calling the function incrementInNumber() on that button click and 
    whenevr we click that button it will automatically increment by 1 in countNumber;
*/

const incrementButton = document.getElementById("increment");
incrementButton.addEventListener("click", incrementInNumber);


/*
    decrementButton is defined in index.html page and we assign an idName "decrement"
    to it and here we are acessing it by "document.getElementById("decrement");"
    and in second line of code we are performing an event on that button to perform
    some task by calling the function decrementInNumber() on that button click and 
    whenevr we click that button it will automatically decrement by 1 in countNumber;
*/
const decrementButton = document.getElementById("decrement");
decrementButton.addEventListener("click", decrementInNumber);

/*
    resetButton is defined in index.html page and we assign an idName "reset"
    to it and here we are acessing it by "document.getElementById("reset");"
    and in second line of code we are performing an event on that button to perform
    some task by calling the function resetTheNumber() on that button click and 
    whenevr we click that button it will automatically reset the countNumber to zero;
*/
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetTheNumber);



//extra simple code to check the working of increment,decrement or reset methods
//uncomment to test if these functions working fine.

// Simple Function
// function IncrementInNumber(){
//     counterNumber++;
// }
// function decrementInNumber(){
//     counterNumber--;
// }
// function resetTheNumber(){
//     counterNumber = 0;
// }

// console.log("The counter number is: ",counterNumber);
 
// IncrementInNumber();
// IncrementInNumber();
// IncrementInNumber();
// IncrementInNumber();
// IncrementInNumber();

// console.log("The counter number is: ",counterNumber);

// decrementInNumber();
// decrementInNumber();
// decrementInNumber();

// console.log("The counter number is: ",counterNumber);

// resetTheNumber();

// console.log("The counter number is: ",counterNumber);
