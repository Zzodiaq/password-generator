const slider = document.getElementById("myRange");
const charLen = document.getElementById("length");


charLen.innerHTML = slider.value;
 
slider.oninput = function(){
    charLen.innerHTML = this.value;
}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }

const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const symbols = ["&", "#", "{", "[" , "|", "'", "_", "-", "$", "*", "%", "§", "/", ":", "!", "?"];

let password = [];
const geneBtn = $(".btn-2");


$(".checked").on("change", function(){
  
  geneBtn.on("click", function(){
  password = [];
  if($("#check-1").is(":checked")){
    if($("#check-1").is(":checked") && $("#check-2").is(":checked")){
      
      const lenValue = slider.value;
      const lendiv = lenValue / 2;
      let i = 0;
      let j = 0;
      while(i < lendiv){
      const randomUpperNumber = Math.floor(Math.random() * (26 - 0) + 0);
      password.push(uppercase[randomUpperNumber]);
      console.log(password)
      i++;

      while(j < lendiv){
        const randomLowerNumber = Math.floor(Math.random() * (26 - 0) + 0);
        password.push(lowercase[randomLowerNumber]);
        console.log(password)
        j++;
        }
    }
 
  }
      const lenValue = slider.value;
      let i = 0;
      while(i < lenValue){
      const randomUpperNumber = Math.floor(Math.random() * (26 - 0) + 0);
      password.push(uppercase[randomUpperNumber]);
      i++;
      }
       
      
    }   else if($("#check-2").is(":checked")){
      const lenValue = slider.value;
      let i = 0;
      while(i < lenValue){
        const randomLowerNumber = Math.floor(Math.random() * (26 - 0) + 0);
        password.push(lowercase[randomLowerNumber]);
        i++;
    }
    }else if($("#check-3").is(":checked")){
      const lenValue = slider.value;
      let i = 0;
      while(i < lenValue){
        const randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
        password.push(numbers[randomNumber]);
        i++;
    }
    }else if($("#check-4").is(":checked")){
      const lenValue = slider.value;
      let i = 0;
      while(i < lenValue){
        const randomSymbols = Math.floor(Math.random() * (16 - 0) + 0);
        password.push(symbols[randomSymbols]);
        i++;
    }
    }
    
    else if($("#check-1").not(":checked")){

      return false;
    }
   const paslice = password.slice(0, slider.value);
    const join = paslice.join("");
      console.log(join);
      $("#password").html(join);
      $("#password").addClass("password");
    })
})



  
  
   
       
      
      
      

