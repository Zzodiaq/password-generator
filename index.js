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





geneBtn.on("click", function(){
  

  generator();
  $(".password").html();
  

})



function generator(){
  
  password = [];
    if($("#check-1").is(":checked")){
      const lenValue = slider.value;
      let i = 0;
      while(i < lenValue){
        const randomUpperNumber = Math.floor(Math.random() * (26 - 0) + 0);
        password.push(uppercase[randomUpperNumber]);
        i++;
        }
        
        
      } else if($("#check-1").not(":checked")){
  
        return false;
      }
      
      
      else if($("#check-2").is(":checked")){
        const lenValue = slider.value;
        while(i < lenValue){
          const randomLowerNumber = Math.floor(Math.random() * (26 - 0) + 0);
          password.push(lowercase[randomLowerNumber]);
          i++;
      }
      }
      const join = password.join("");
      
      console.log(join);

      
  
}
