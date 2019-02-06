console.log('Here are the rectanle IDs');
console.log("=========== via querySelectorAll===============");
let qdivs = document.querySelectorAll('.rectangle');
for( element of qdivs){
    console.log(element['id']);
}
console.log("=========== via getElementsByClassName===============");
let cndivs = document.getElementsByClassName('rectangle');
for( element of cndivs){
    console.log(element['id']);
}
console.log("=========== via getElementsByTagName===============");
let tndivs = document.getElementsByTagName('div');
for( element of tndivs){
    if(element['id'] && element['id'].length)
    console.log(element['id']);
}