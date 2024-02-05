    let name = prompt("what is your name?");
    console.log('story {name} story');

    //Global
    var me = "human";

    /*
    var myString = "I'm" + "" + "Alive";
    */

    //Math Block
    {
        let x = 100;
        let y = 1;
        let z = x - y;
    }

    //Object
    const cupOfjoe = {m:"M", o:"O", c:"C", h:"H", a:"A",
          orderUp: function() {console.log(this.m + this.o + this.c + this.h + this.a)}};
          
          cupOfjoe.orderUp();

    //Function
    const coffeeTopping = "Add Cream";

    function makeCream(ing1, ing2){
    console.log(coffeeTopping);
    console.log("Mix" + ing1 + "with" + ing2)};

    makeCream("milk", "cream");
    

    