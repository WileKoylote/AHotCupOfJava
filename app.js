    //Name Prompt + String Method - "After confirming name prompt, outputs the number of characters entered"
    let name = prompt("what is your name?");
    console.log({name});
    console.log(name.length);

    //Object + Method + String Variable - "Method outputs combined objects as a word."
    const cupOfjoe = {m:"M", o:"O", c:"C", h:"H", a:"A",
          orderUp: function() {console.log(`${this.m} ${this.o} ${this.c} ${this.h} ${this.a}`)}};
          cupOfjoe.orderUp();

    //Array + + Method + For Loop "Repeats until all items have been outputed"
    var menu = ["Latte", "Cappachino", "Espresso"];
    let choice = menu.indexOf("Latte");
    console.log(menu[choice]);
    for (var i=0; i < menu.length; i++) {console.log("Try a" + " " +menu[i])};

    //Function + Parameters
    const coffeeTopping = "Add Cream";

    function makeCream(ing1, ing2){
        console.log(coffeeTopping);
        console.log("Mix" + " " + ing1 +  " " + "with" + " " + ing2)};

    makeCream("milk", "cream");
    
    //Boolean - "Both variables pull either 0 or 1 and outputs based on which is greater"
    var rabbit = Math.floor((Math.random() * 2) + 0);
    var turtle = Math.floor((Math.random() * 2) + 0);

    if (rabbit > turtle){console.log("Rabbit Wins!");}
    else if (turtle >= rabbit){console.log("Turtle Wins!");};

    //Number Method - "Outputs generated numbers for each random variable"
    console.log(rabbit.valueOf());
    console.log(turtle.valueOf());

    //Switch + While Loop - "Rolls a six sided dice and outputs the response based on the variables number. 
    //If it rolls less than 6, it will reroll until 6."
    let roll = Math.floor((Math.random() * 6) + 1);
    
    switch (roll) {
        case 1: console.log ("You rolled a 1!");

        break;

        case 2: console.log ("You rolled a 2!");

        break;

        case 3: console.log ("You rolled a 3!");

        break;

        case 4: console.log ("You rolled a 4!");

        break;

        case 5: console.log ("You rolled a 5!");

        break;

        case 6: console.log ("You rolled a 6!");

        break;

        default: console.log (`${roll}? This isn't a DnD campaign you nerd.`);
    };

    while (roll < 6) {console.log("Reroll!"); roll++;};
    if (roll === 6) {console.log("You Rerolled a 6!");};
    
