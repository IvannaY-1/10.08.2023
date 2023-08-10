function Challenge1() 
{
  for (let i = 1; i <= 30; i++) {
    if(i % 3 == 0 ) {
        console.log ("Fizz")
    }
    else {
               console.log (i)
    }
}
}


function Challenge2() {
  let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let updatedArr = []
for (let i = 0; i < numberList.length; i++) {  
    updatedArr.push(numberList[i] * 5)  
    }  
      console.log (updatedArr)
}


function Challenge3() {
let introduction = ["cat", "window", "bottle", "car", "JavaScript"]
for  (let i = 0; i < introduction.length; i++)
if (introduction [i].length < 4){
     console.log ("Long word alert!")
    }
    else {
             console.log (introduction[i])
    }
}


const myParagraphElement=document.getElementById("myParagraph");

function Challenge4() {
for  (let i = 0; i < 5; i++)
console.log (myParagraphElement.textContent+(i));
}


function Challenge5() {
for  (let i = 0; i < 20; i++)
if (i % 2 == 0)   
console.log (i)
    }
    