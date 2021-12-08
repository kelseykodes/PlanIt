// control the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible.expandable');
  M.Collapsible.init(elems, {accordion: false});
});

// control add-all button

const checks = document.getElementsByClassName('checkbox-music');
const currentList = document.getElementById("current-music-list");
const addAll = document.getElementById("addMusicBtn")
let answer = [];

function getValue(e){
e.preventDefault();
currentList.innerHTML = " ";
for(i=0;i<checks.length; i++){
  if(checks[i].checked == true){
      answer.push(checks[i].value);  
    }
}
for(j=0;j<answer.length; j++){
  let li = document.createElement("li");
  li.innerHTML = answer[j];
  currentList.appendChild(li);
}  
console.log(answer);
storeTheSelection = answer;
answer = [];
}  

addAll.addEventListener('click', getValue);

// control clear-all button
const clearAll = document.getElementById("clear-all-music");

function clearValue(e){
  e.preventDefault();
  for(i=0;i<checks.length; i++){
    if(checks[i].checked == true){
      checks[i].checked = false;
      // change answer[]
    }
    currentList.innerHTML = " ";
  }
}

clearAll.addEventListener('click', clearValue);

// save button

const saveBtn = document.getElementById("saveBtn");
let finalAnswer = [];

const generateAnswer = (e) =>{
e.preventDefault();
// console.log(currentList.children[0].innerHTML);
for (i=0; i<currentList.childElementCount; i++){
  finalAnswer.push(currentList.children[i].innerHTML);
}
console.log(finalAnswer);
return finalAnswer;
// back to the front page
// window location changed
}

saveBtn.addEventListener('click', generateAnswer);


exports.finalAnswer = finalAnswer;
