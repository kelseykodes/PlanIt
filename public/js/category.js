// control the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible.expandable');
  M.Collapsible.init(elems, {accordion: false});
});

//DELETE BUTTON
const deleteButton = document.getElementsByClassName("deleteBtn");


function deleteParty(e){
  e.preventDefault();
  console.log(e.target.id);
  fetch(`/api/parties/${e.target.id}`, {
    method: 'DELETE'
  })
  window.location.reload();
}
for (i = 0; i<deleteButton.length; i++){
  deleteButton[i].addEventListener('click', deleteParty)
}
 

// //EDIT BUTTON
// const editButton = document.getElementsByClassName("editBtn");

// function editParty(e){
//   e.preventDefault();
//   console.log(e.target.id);
//   fetch(`/api/parties/${e.target.id}`, {
//     method: 'PUT'
//   })
// }
// for (i = 0; i<deleteButton.length; i++){
//   deleteButton[i].addEventListener('click', editParty)
// }


// Decoration: 
// control decoration-add-all button
const checksOfDecoration = document.getElementsByClassName('checkbox-decoration');
const currentDecorationList = document.getElementById("current-decoration-list");
const addAllDecoration = document.getElementById("addDecorationBtn")
let decorationAnswer = [];

function getDecorationValue(e){
e.preventDefault();
currentDecorationList.innerHTML = " ";
for(i=0;i<checksOfDecoration.length; i++){
  if(checksOfDecoration[i].checked == true){
      decorationAnswer.push(checksOfDecoration[i].value);  
    }
}
for(j=0;j<decorationAnswer.length; j++){
  let li = document.createElement("li");
  li.innerHTML = decorationAnswer[j];
  currentDecorationList.appendChild(li);
}  
console.log(decorationAnswer);
storeTheSelection = decorationAnswer;
decorationAnswer = [];
}  

addAllDecoration.addEventListener('click', getDecorationValue);

// control clear-all-decoration button
const clearAll = document.getElementById("clear-all-decoration");

function clearDecorationValue(e){
  e.preventDefault();
  for(i=0;i<checksOfDecoration.length; i++){
    if(checksOfDecoration[i].checked == true){
      checksOfDecoration[i].checked = false;
      // change decorationAnswer[]
    }
    currentDecorationList.innerHTML = " ";
  }
}

clearAll.addEventListener('click', clearDecorationValue);

// save decoration button: NEED ACTION LATER!!!

const saveBtnNo1 = document.getElementById("saveBtnNo1");
let finalDecorationAnswer = [];

const generateDecorationAnswer = (e) =>{
e.preventDefault();
// console.log(currentDecorationList.children[0].innerHTML);
for (i=0; i<currentDecorationList.childElementCount; i++){
  finalDecorationAnswer.push(currentDecorationList.children[i].innerHTML);
}
console.log(finalDecorationAnswer);
return finalDecorationAnswer;
// back to the front page
// window location changed
}

saveBtnNo1.addEventListener('click', generateDecorationAnswer);


// Music:

const checksOfMusic = document.getElementsByClassName('checkbox-music');
const currentMusicList = document.getElementById("current-music-list");
const addAllMusic = document.getElementById("addMusicBtn")
let musicAnswer = [];

function getMusicValue(e){
e.preventDefault();
currentMusicList.innerHTML = " ";
for(i=0;i<checksOfMusic.length; i++){
  if(checksOfMusic[i].checked == true){
      musicAnswer.push(checksOfMusic[i].value);  
    }
}
for(j=0;j<musicAnswer.length; j++){
  let li = document.createElement("li");
  li.innerHTML = musicAnswer[j];
  currentMusicList.appendChild(li);
}  
console.log(musicAnswer);
storeTheSelection = musicAnswer;
musicAnswer = [];
}  

addAllMusic.addEventListener('click', getMusicValue);

// control clear-all-Music button
const clearAllMusic = document.getElementById("clear-all-music");

function clearMusicValue(e){
  e.preventDefault();
  for(i=0;i<checksOfMusic.length; i++){
    if(checksOfMusic[i].checked == true){
      checksOfMusic[i].checked = false;
      // change musicAnswer[]
    }
    currentMusicList.innerHTML = " ";
  }
}

clearAllMusic.addEventListener('click', clearMusicValue);

// save Music button: NEED ACTION LATER!!!

const saveBtnNo2 = document.getElementById("saveBtnNo2");
let finalMusicAnswer = [];

const generateMusicAnswer = (e) =>{
e.preventDefault();
for (i=0; i<currentMusicList.childElementCount; i++){
  finalMusicAnswer.push(currentMusicList.children[i].innerHTML);
}
console.log(finalMusicAnswer);
return finalMusicAnswer;

}

saveBtnNo2.addEventListener('click', generateMusicAnswer);

// Food & Drinks

const checksOfFd = document.getElementsByClassName('checkbox-fd');
const currentFdList = document.getElementById("current-fd-list");
const addAllFd = document.getElementById("addFdBtn")
let fdAnswer = [];

function getFdValue(e){
e.preventDefault();
currentFdList.innerHTML = " ";
for(i=0;i<checksOfFd.length; i++){
  if(checksOfFd[i].checked == true){
      fdAnswer.push(checksOfFd[i].value);  
    }
}
for(j=0;j<fdAnswer.length; j++){
  let li = document.createElement("li");
  li.innerHTML = fdAnswer[j];
  currentFdList.appendChild(li);
}  
console.log(fdAnswer);
storeTheSelection = fdAnswer;
fdAnswer = [];
}  

addAllFd.addEventListener('click', getFdValue);

// control clear-all-food and dreak button
const clearAllFd = document.getElementById("clear-all-fd");

function clearFdValue(e){
  e.preventDefault();
  for(i=0;i<checksOfFd.length; i++){
    if(checksOfFd[i].checked == true){
      checksOfFd[i].checked = false;
      // change fdAnswer[]
    }
    currentFdList.innerHTML = " ";
  }
}

clearAllFd.addEventListener('click', clearFdValue);

// save F&D button: NEED ACTION LATER!!!

const saveBtnNo3 = document.getElementById("saveBtnNo3");
let finalFdAnswer = [];

const generateFdAnswer = (e) =>{
e.preventDefault();
for (i=0; i<currentFdList.childElementCount; i++){
  finalFdAnswer.push(currentFdList.children[i].innerHTML);
}
console.log(finalFdAnswer);
return finalFdAnswer;
}

saveBtnNo3.addEventListener('click', generateFdAnswer);


// Activities
const checksOfActivity = document.getElementsByClassName('checkbox-activity');
const currentActivityList = document.getElementById("current-activity-list");
const addAllActivities = document.getElementById("addActivityBtn")
let activityAnswer = [];

function getActivityValue(e){
e.preventDefault();
currentActivityList.innerHTML = " ";
for(i=0;i<checksOfActivity.length; i++){
  if(checksOfActivity[i].checked == true){
      activityAnswer.push(checksOfActivity[i].value);  
    }
}
for(j=0;j<activityAnswer.length; j++){
  let li = document.createElement("li");
  li.innerHTML = activityAnswer[j];
  currentActivityList.appendChild(li);
}  
console.log(activityAnswer);
storeTheSelection = activityAnswer;
activityAnswer = [];
}  

addAllActivities.addEventListener('click', getActivityValue);

// control clear-all-Activities button
const clearAllActivities = document.getElementById("clear-all-activities");

function clearActivityValue(e){
  e.preventDefault();
  for(i=0;i<checksOfActivity.length; i++){
    if(checksOfActivity[i].checked == true){
      checksOfActivity[i].checked = false;
      // change activityAnswer[]
    }
    currentActivityList.innerHTML = " ";
  }
}

clearAllActivities.addEventListener('click', clearActivityValue);

// save Activites button: NEED ACTION LATER!!!

const saveBtnNo4 = document.getElementById("saveBtnNo4");
let finalActivitesAnswer = [];

const generateActivityAnswer = (e) =>{
e.preventDefault();
for (i=0; i<currentActivityList.childElementCount; i++){
  finalActivitesAnswer.push(currentActivityList.children[i].innerHTML);
}
console.log(finalActivitesAnswer);
return finalActivitesAnswer;
}

saveBtnNo4.addEventListener('click', generateActivityAnswer);

// Add party details to the dashboard

const submitFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#party-name').value.trim();
  // const partydate = document.querySelector('#party-date').value;
  const description = document.querySelector('#party-description').value.trim();

  if (name && description) {
    const response = await fetch(`/api/parties`, {
      method: 'POST',
      body: JSON.stringify({name, description}),
      
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.ok);
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create project');
    }
  }
};
const submitBtn = document.querySelector('#submit-party');
submitBtn.addEventListener('click', submitFormHandler);




// TEST BUTTON
// const testPage = async (event) => {
//   event.preventDefault();
//       document.location.replace('/party-form');
//       console.log('is it working');
  
// };

// const addBtn = document.getElementById('#test');
// addBtn.addEventListener('click', testPage);