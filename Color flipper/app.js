const colors = ["orange", "green", "red", "rgba(133,122,200", "#f15025"];

const btn = document.getElementById("btn");

// console.log(btn);    

const color = document.querySelector(".color");

btn.addEventListener("click", function() {  

    // document.body.style.backgroundColor = "red";    

    const randomNumber = getRandom();   
    console.log(randomNumber);    
    document.body.style.backgroundColor = colors[randomNumber]; 
    color.textContent = colors[randomNumber];       
});

function getRandom() {  
    return Math.floor(Math.random() * colors.length);          
}