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
    const lenValue = slider.value;
    const checkBoxChecked = $("input:checkbox:checked").length;
    
    if (lenValue >= 1 && lenValue < 5){
      $("#stren1").addClass("stren");
      $("#stren2").removeClass("stren");
      $("#stren3").removeClass("stren");
      $("#stren4").removeClass("stren");
      $(".secu").html("EASY");
    } else if(lenValue >= 5  && lenValue < 10){
      $("#stren1").addClass("stren");
      $("#stren2").addClass("stren");
      $("#stren3").removeClass("stren");
      $("#stren4").removeClass("stren");
      $(".secu").html("NORMAL");
    }else if(lenValue >= 10 && lenValue < 15){
      $("#stren1").addClass("stren");
      $("#stren2").addClass("stren");
      $("#stren3").addClass("stren");
      $("#stren4").removeClass("stren");
      $(".secu").html("MEDIUM");
    }else if(lenValue >= 15){
      $("#stren1").addClass("stren");
      $("#stren2").addClass("stren");
      $("#stren3").addClass("stren");
      $("#stren4").addClass("stren");
      $(".secu").html("HARD");
    }

  password = [];
   if ($("#check-1").is(":checked") && $("#check-2").prop("checked") == false && $("#check-3").prop("checked") == false && $("#check-4").is(":checked")){
    
    const lenValue = slider.value;
    let i = 0;
    while(i < lenValue){ 
    const randomSymbols = Math.floor(Math.random() * (16 - 0) + 0);
    const randomUpperNumber = Math.floor(Math.random() * (26 - 0) + 0);
    
    password.push(symbols[randomSymbols]);
    password.push(uppercase[randomUpperNumber]);
    i++;
  }
   }

   if ($("#check-1").is(":checked") && $("#check-2").prop("checked") == false && $("#check-3").is(":checked") && $("#check-4").prop("checked") == false){
    
    const lenValue = slider.value;
    let i = 0;
    while(i < lenValue){ 
    
    const randomUpperNumber = Math.floor(Math.random() * (26 - 0) + 0);
    const randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
    
    password.push(uppercase[randomUpperNumber]);
    password.push(numbers[randomNumber]);
    i++;
  }
   } if($("#check-1").prop("checked") == false && $("#check-2").is(":checked") && $("#check-3").prop("checked") == false && $("#check-4").is(":checked")){
              
    const lenValue = slider.value;
    let i = 0;
    while(i < lenValue){ 
    const randomLowerNumber = Math.floor(Math.random() * (26 - 0) + 0);
    const randomSymbols = Math.floor(Math.random() * (16 - 0) + 0);
    password.push(lowercase[randomLowerNumber]);
    password.push(symbols[randomSymbols]);
    i++;
  }

}  if($("#check-1").is(":checked") && $("#check-2").prop("checked") == false && $("#check-3").is(":checked") && $("#check-4").is(":checked")){
              
  const lenValue = slider.value;
  let i = 0;
  while(i < lenValue){ 
  const randomUpperNumber = Math.floor(Math.random() * (26 - 0) + 0);
  const randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
  const randomSymbols = Math.floor(Math.random() * (16 - 0) + 0);
  password.push(uppercase[randomUpperNumber]);
  password.push(numbers[randomNumber]);
  password.push(symbols[randomSymbols]);
  i++;
}

} if($("#check-1").is(":checked") && $("#check-2").is(":checked") && $("#check-3").prop("checked") == false && $("#check-4").is(":checked")){
              
  const lenValue = slider.value;
  let i = 0;
  while(i < lenValue){ 
  const randomUpperNumber = Math.floor(Math.random() * (26 - 0) + 0);
  const randomLowerNumber = Math.floor(Math.random() * (26 - 0) + 0);
  const randomSymbols = Math.floor(Math.random() * (16 - 0) + 0);
  password.push(uppercase[randomUpperNumber]);
  password.push(lowercase[randomLowerNumber]);
  password.push(symbols[randomSymbols]);
  i++;
}

}


    if($("#check-1").is(":checked")){
      if($("#check-1").is(":checked") && $("#check-2").is(":checked")){
          if($("#check-1").is(":checked") && $("#check-2").is(":checked") && $("#check-3").is(":checked")){
            if($("#check-1").is(":checked") && $("#check-2").is(":checked") && $("#check-3").is(":checked") && $("#check-4").is(":checked")){
              
          
      
          const lenValue = slider.value;
          let i = 0;
          while(i < lenValue){ 
          const randomUpperNumber = Math.floor(Math.random() * (26 - 0) + 0);
          const randomLowerNumber = Math.floor(Math.random() * (26 - 0) + 0);
          const randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
          const randomSymbols = Math.floor(Math.random() * (16 - 0) + 0);
          password.push(uppercase[randomUpperNumber]);
          password.push(lowercase[randomLowerNumber]);
          password.push(numbers[randomNumber]);
          password.push(symbols[randomSymbols]);
          i++;
      
         
        }
      
      }
      
        const lenValue = slider.value;
        let i = 0;
        while(i < lenValue){ 
        const randomUpperNumber = Math.floor(Math.random() * (26 - 0) + 0);
        const randomLowerNumber = Math.floor(Math.random() * (26 - 0) + 0);
        const randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
        password.push(uppercase[randomUpperNumber]);
        password.push(lowercase[randomLowerNumber]);
        password.push(numbers[randomNumber]);
        i++;
      }
    
    }
    


   
      const lenValue = slider.value;
      
      let i = 0;
      while(i < lenValue){ 
      const randomUpperNumber = Math.floor(Math.random() * (26 - 0) + 0);
      const randomLowerNumber = Math.floor(Math.random() * (26 - 0) + 0);
      password.push(uppercase[randomUpperNumber]);
      password.push(lowercase[randomLowerNumber]);
      i++;
    }
    
  }
  
    
      const lenValue = slider.value;
      let i = 0;
      while(i < lenValue){
      const randomUpperNumber = Math.floor(Math.random() * (26 - 0) + 0);
      password.push(uppercase[randomUpperNumber]);
      i++;
      }
       
      
    }   
    else if($("#check-2").is(":checked")){
      if($("#check-2").is(":checked") && $("#check-3").is(":checked")){
        if($("#check-2").is(":checked") && $("#check-3").is(":checked") && $("#check-4").is(":checked")){
          
      
          const lenValue = slider.value;
          let i = 0;
          while(i < lenValue){ 
          const randomLowerNumber = Math.floor(Math.random() * (26 - 0) + 0);
          const randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
          const randomSymbols = Math.floor(Math.random() * (16 - 0) + 0);
          
          password.push(lowercase[randomLowerNumber]);
          password.push(numbers[randomNumber]);
          password.push(symbols[randomSymbols]);
          i++;
      
         
        }
      
      }
          
      
        const lenValue = slider.value;
        let i = 0;
        while(i < lenValue){ 
          
          const randomLowerNumber = Math.floor(Math.random() * (26 - 0) + 0);
          const randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
          password.push(lowercase[randomLowerNumber]);
          password.push(numbers[randomNumber]);
        i++;
    
       
      }
    
    }
      const lenValue = slider.value;
      let i = 0;
      while(i < lenValue){
        const randomLowerNumber = Math.floor(Math.random() * (26 - 0) + 0);
        password.push(lowercase[randomLowerNumber]);
        i++;
    }
    } else if($("#check-3").is(":checked")){
        if($("#check-3").is(":checked") && $("#check-4").is(":checked")){

      
        const lenValue = slider.value;
        let i = 0;
        while(i < lenValue){ 
        const randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
        const randomSymbols = Math.floor(Math.random() * (16 - 0) + 0);
        password.push(numbers[randomNumber]);
        password.push(symbols[randomSymbols]);
        i++;
    
       
      }
    
    }
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
      $("#password").html(join);
      $("#password").addClass("password");
    })
})


function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $("#copiied").removeClass("copied");
  setTimeout(() => {
    $("#copiied").addClass("copied");
  }, 1000);
}


