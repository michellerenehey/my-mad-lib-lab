// import functions

// reference needed DOM elements
const initialPageEl = document.getElementById ('inital-page'); 
const nounInputEl = document.getElementById ('noun-input'); 
const verbInputEl = document.getElementById ('verb-input'); 
const adjInputEl = document.getElementById ('adj-input'); 

const nounOutputEl = document.getElementById ('noun-output'); 
const verbOutputEl = document.getElementById ('verb-output'); 
const adjOutputEl = document.getElementById ('adj-output'); 

const submitEl = document.getElementById ('submit'); 
const outputPageEl = document.getElementById ('output-page'); 


nounInputEl.addEventListener('input', () => {
  nounOutputEl.textContent = nounInputEl.value
}); 

verbInputEl.addEventListener('input', () => {
  verbOutputEl.textContent = verbInputEl.value
}); 

adjInputEl.addEventListener('input', () => {
  adjOutputEl.textContent = adjInputEl.value
}); 

submitEl.addEventListener('click', ()=> {
  outputPageEl.style.visibility = "visible";
  });


// set event listeners 


  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
