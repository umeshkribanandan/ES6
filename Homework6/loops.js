
const isDivisbleByOther = (j) => {
    let isDivisbleByOther = [];
    [2,3,4,5,6,7,8,9].forEach((k) =>  {
        if(j % k === 0 && j != k ){
            isDivisbleByOther.push(k);
        }
    });
    return isDivisbleByOther.length;
}
const printNumber = () => {
    for(let i = 1; i <= 100; i++){
        if( i % 1 ===0 && i % i === 0 && !isDivisbleByOther(i)) {
            console.log('prime');
        } else if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        } else if(i % 3 === 0){
            console.log('Fizz');
        } else if(i % 5 === 0){
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
printNumber();