
// function to get data from other pages
// function for the submit button
// function for all the other buttons 
// function for styling if need be

var searchInputEl = $('#partyname');
var descriptionEl = $('#description');
var partyDateEl = $('#partydate');
var guestNumEl = $('#guest-numb'); 
var deleteBtn = $('#deletebtn')
var submitBtn = $('#submitbtn')

function deleteForm(){
    // take them back to the dashboard
    console.log('delete....')
    location.href = '../views/dashboard.html'; //fix
}

// saves the party info to local storage
function searchInputHandler(event){
    event.preventDefault();
    var searchVal = searchInputEl.val();
    var descriptVal = descriptionEl.val();
    var dateVal =  partyDateEl.val();
    var guestVal = guestNumEl.val();
    var parties = [searchVal, descriptVal, dateVal, guestVal];
    saveForm(parties);

function saveForm() {
    var parties = [searchVal, descriptVal, dateVal, guestVal]
        console.log(parties);
        localStorage.setItem("partyInfo", JSON.stringify(parties));
};
}

var saveBtn3 = $('#saveBtnNo3');
function saveForm(event) {
    console.log('HElllooooooo')
    event.preventDefault();
    
}

deleteBtn.on('click',deleteForm);
submitBtn.on('click',searchInputHandler);
saveBtn3.on('click', saveForm);




