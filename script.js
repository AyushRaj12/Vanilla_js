const left=document.querySelector(".left")
const right=document.querySelector(".right")
const b1=document.querySelector(".b1")
const b2=document.querySelector(".b2")

const fruitCount=10;
let secondBasketCount=0
let firstBasketCount=fruitCount-secondBasketCount;
b1.innerText=firstBasketCount
b2.innerText=secondBasketCount


right.addEventListener('click',()=>{
    if(firstBasketCount>0){
    firstBasketCount--;
    b1.innerHTML=firstBasketCount
    secondBasketCount++;
    b2.innerHTML=secondBasketCount
    }
})

left.addEventListener('click',()=>{
    if(secondBasketCount>0){
    firstBasketCount++;
    b1.innerHTML=firstBasketCount
    secondBasketCount--;
    b2.innerHTML=secondBasketCount
    }
})