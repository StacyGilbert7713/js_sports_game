//let shootsTaken = document.querySelector('#teamone-numshots');
//let goals = document.querySelector('#teamone-numgoals');
//let goals = document.querySelector('#goals')

//shootsTaken.addEventListener("click", function(){
//    console.log("+button clicked");
//    let shootsTaken= Number(counter.innerHTML) + 1;
//}) 


let reset = document.querySelector ("#reset-button");
let shoot1 = document.querySelector ("#teamone-shoot-button");
let shoot2 = document.querySelector ("#teamtwo-shoot-button");

reset.addEventListener ("click", function() {
    console.log ("#reset-button");
    
})

shoot1.addEventListener ("click", function() {
    console.log ("#teamone-shoot-button");

    let shoot1 = 1
    while (shoot1 <= 10) {
        console.log(shoot1)
        shoot1 += 1
    }


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
})

shoot2.addEventListener ("click", function() {
    console.log ("#teamtwo-shoot-button");
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
})