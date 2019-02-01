var men = [
    { name : 'socrates', mortal: true},
    { name : 'einstein', mortal: true},
    { name: 'newton', mortal: true}
];

const whoIsMortal  = (men, name) => {
    let menAreMortal = false;
    let menAreNotMortal = false;
    let nameIsInMen = false;

    if( men.length && typeof(name) === "string"){
        men.forEach((man) => {
            if( man.name.toLowerCase() === name.toLowerCase()){
                nameIsInMen = true;
            }
            if(man.mortal){
                menAreMortal = true;
            } else {
                menAreNotMortal = true;
            }
        }); 
        if(menAreMortal && !menAreNotMortal && nameIsInMen){
            return true;
        } else {
            return false;
        }
    }
}

whoIsMortal(men,'socrates');

var cakes = [
    { name : 'black forest', isChoclate: true, isVanilla: false},
    { name : 'vanilla cake', isChoclate: false, isVanilla: true},
    { name: 'pineapple cake', isChoclate: false, isVanilla: false}
];

const flavourOfTheCake = (cake) => {
    if(!cake.isChoclate && cake.isVanilla){
        return "It is a vanilla cake";
    } else if(cake.isChoclate && !cake.isVanilla){
        return "It is a choclate cake";
    } else if(!cake.isChoclate && !cake.isVanilla) {
        return "Cake is neither vanilla or choclate";
    } else if(cake.isChoclate && cake.isVanilla) {
        return "Cake is both vanilla or choclate";
    }
}
cakes.map((cake) => {
    console.log(flavourOfTheCake(cake));
})
