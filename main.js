"use strict";


// 11111111111111

document.querySelector(".control-buttons span") .onclick= function (){
    timer();
    let yourName=prompt("whats your Name? ");
    console.log(yourName);
    if (yourName == null ||yourName == ""){
        document.querySelector('.name span').innerHTML='unknown';
        // name is not empty 
    }else{
        // set name to your name
        document.querySelector('.name span').innerHTML = yourName;
  
    }


    // ################## timer ###########
    
    function timer(){
let counter =20;
setInterval(() => {
    counter--;
    if(counter >= 0){
        let span=document.getElementById("countdown");
        span.innerHTML=counter +"seconds remaining";
    }
    if(counter === 0){
        alert(`Game Over ${yourName}`  );
        clearInterval(counter)
    }
}, 1000);
    }

    // remove splash screen
    document.querySelector(".control-buttons ").remove();
}


// 2222222222222222222222222222
// Effect Duration 
let duration=1000;
// select blocks container
let blocksContainer =document.querySelector(".memory-game-blocks");
// Create Array from Game blocks 
let blocks = Array.from(blocksContainer.children);
console.log(blocks);

// create Range of Keys 
// let orderRange =[...Array(blocks.length).keys()];
// two way for order rang 
let orderRange =Array.from(Array(blocks.length).keys());
console.log(orderRange);

shuffle(orderRange);
console.log(orderRange);


// Add order css property to game blocks 
blocks.forEach((block,index) => {
    console.log((block,index))

    block.style.order =orderRange [index];
// Add Click event
   block. addEventListener('click',function(){
    //  Trigger the flip block 
    flipBlock(block);
    
   });
});

// 444444444444444444444444444444444

// flip Block function 
function flipBlock(selectedBlock){

// Add  class is-flipped 
    selectedBlock.classList.add('is-flipped');

    // collect two selected Blocks 
     let allFlippedBlocks=blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
   
    // if there  two selected Blocks 

     if ( allFlippedBlocks.length ===2){
        console.log('two flipped Blocks selected' );

        // stop Clicking fn 
        stopClicking();
        // Check matched block fn 
        checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1])
     }
     
}
 // stop Clicking fn 
function stopClicking() {
    // Add class No Clicking on main container
    blocksContainer.classList.add('no-clicking');

    
    setTimeout(() => {
         // Remove class no clicking After the duration
        blocksContainer.classList.remove('no-clicking');
    }, duration);
}

// Check matched block fn 
function checkMatchedBlocks(firstBlock,secondBlock){

    let triesElement = document.querySelector('.tries span');
    if(firstBlock.dataset.anything === secondBlock.dataset.anything){

    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');

    document.getElementById('success').play();
}else{

    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    console.log("helllo",triesElement);  
setTimeout(() => {
    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped'); 
}, duration);
 document.getElementById('fail').play();
}
}


// 3333333333333333333333333333333
// shuffle function
function shuffle(array){

    // setting var 
    let current = array.length;
    let temp ;
    let random;
    while(current > 0){
        random = Math.floor(Math.random()*current);

        // Decrease length by One 
        current--;
        //1) save current element in stash 
        temp = array[current];
        // 2) current element =random element 
        array[current]=array[random];
        // 3)random element =Get element from stash 
        array[random]=temp;

    }
    return array;
} ;



