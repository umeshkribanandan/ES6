var men = [
    { name : 'socrates', mortal: true},
    { name : 'einstein', mortal: true},
    { name: 'newton', mortal: true}
];

function whoIsMortal (men, name){
    let menAreMortal = false;
    let menAreNotMortal = false;
    let nameIsInMen = false;

    if( men.length ){
        men.forEach(function(man){
            if( man.name.toLowerCase() === name.toLowerCase()){
                nameIsInMen = true;
            }
            if(man.mortal){
                menAreMortal = true;
            } else {
                menAreNotMortal = true;
            }
        }); 
        if(menAreMortal && !menAreNotMortal){
            console.log(name +" is Mortal");
        }
    } else {
        console.log("Who is "+ name + " ???");
    }
}

whoIsMortal(men,'socrates');

var cake = "vanilla";
function flavourOfTheCake(cake){
    let isChoclate = true;
    if(cake === "vanilla" || cake == "choclate"){
        console.log("Cake is either vanilla or choclate");
        if(cake !== "choclate"){
            isChoclate = false;
            console.log("Cake is not choclate");
        }
        if(!isChoclate){
            console.log("Cake is vanilla since it is not choclate");
        }
    }
}

flavourOfTheCake(cake);