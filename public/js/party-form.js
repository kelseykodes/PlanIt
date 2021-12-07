console.log("hey")
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

function searchInputHandler(event){
    event.preventDefault();
    var searchVal = searchInputEl.val();
    var descriptVal = descriptionEl.val();
    var dateVal =  partyDateEl.val();
    var guestVal = guestNumEl.val();
    console.log(searchVal);
    saveForm(searchVal);

    // create a loop to get all the data on the form

function saveForm(data) {
    console.log(data);
    var parties = data.results
    localStorage.setItem("partyInfo", JSON.stringify(parties));



    // if (response.ok) {
    //     response.json().then(function (data) {
    //       console.log(data);
    //       var parties = data.results
    //       localStorage.setItem("partyInfo", JSON.stringify(parties));
    //     //   displayRecipes(recipes);//Calls function to display recipes
    //     console.log(parties);
    //     });
}
};
}