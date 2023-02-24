function polite(){
    let time = new Date()
    let currenthour = time.getHours()
    if (currenthour < 12) {
        alert("Good Morning!");


    } else if (currenthour > 12 && currenthour < 18) {
        alert("Good Afternoon!");

    } else (currenthour > 18 && currenthour < 0);
}

function greeting() {
    let myname = ("102 Coffee"); {
        alert("Welcome to" + myname);
        document.write("Welcome to 102 Coffee");
    }
}




function answerRoast() {

    let roastChoice = prompt("what is your favorite roast? Blonde, Medium, or Dark?");
    console.log(roastChoice);

    if (roastChoice === "Blonde") {
        document.write("We love a light-bodied Blonde drink!")
        console.log("We love a light-bodied Blonde drink!");

    } else if (roastChoice === "Medium") {
        document.write("You love your coffee smooth and rich!")
        console.log("You love your coffee smooth and rich!");

    } else if (roastChoice === "Dark") {
        document.write("You prefer a dark drink with a full body and bold flavors!")
        console.log("You prefer a dark drink with a full body and bold flavors!");
    } else {
        console.log("Wrong,Never heard of her")
        let neverHeardOfHer = prompt("Wrong,Never heard of her");

        document.write("That's our favorite too! Heres our roasts at a glance.")
        document.write("Feel free to browse our ethically sourced coffee!")


    }
}

polite();
greeting();
answerRoast();













