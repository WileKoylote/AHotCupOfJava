    //Name Prompt + String Method - "After confirming name prompt, outputs the number of characters entered"
    let name = prompt("what is your name?");
    console.log({name});
    console.log(name.length);

    //Object + String Variable - "I think this counts as a concatenated string variable?"
    const cupOfjoe = {m:"M", o:"O", c:"C", h:"H", a:"A",
          orderUp: function() {console.log(`${this.m} ${this.o} ${this.c} ${this.h} ${this.a}`)}};
          
          cupOfjoe.orderUp();

    //Function + Parameters
    const coffeeTopping = "Add Cream";

    function makeCream(ing1, ing2){
    console.log(coffeeTopping);
    console.log("Mix" + ing1 + "with" + ing2)};

    makeCream("milk", "cream");
    
    //Boolean - "Both variables pull a random number between 0 - 1 and outputs based on which is greater"
    var rabbit = Math.random();
    var turtle = Math.random();

    if (rabbit > turtle){console.log("Rabbit Wins!");}
    else if (turtle > rabbit){console.log("Turtle Wins!");}

    //Number Method - "Outputs generated numbers for each random variable"
    console.log(rabbit.valueOf());
    console.log(turtle.valueOf());

    //Switch - "Rolls a six sided dice and outputs the response based on the variables number"
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

        default: console.log (`${roll}? This isn't a DnD campaign you nerd.`)
    }

