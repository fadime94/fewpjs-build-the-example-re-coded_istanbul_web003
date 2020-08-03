// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal= document.getElementById("modal");
const allHearts= document.getElementsByClassName("like-glyph");
console.log(allHearts)
modal.setAttribute('class', 'hidden');
let full= false;

document.addEventListener('DOMContentLoaded', () => {
  
 
  for (const heart of allHearts){
    heart.addEventListener('click', ()=> {
      mimicServerCall()
      .then((resp) => {console.log(resp)
        
        full= !full;
       if (full) {
          heart.setAttribute('class', 'activated-heart');
          heart.innerText=FULL_HEART; 
                    
       }else {          
          heart.removeAttribute('class', 'activated-heart')
          heart.innerText=EMPTY_HEART; 
          
       }
        
      })
      .catch((err) => {
        console.log(err)
       modal.removeAttribute('class', 'hidden');
       setTimeout(()=> modal.classList.add( 'hidden'), 5000);
      })
    })
  }
  


});






//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
