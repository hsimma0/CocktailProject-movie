
const $input = $('input[type="text"]');
const URL =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`

//ELEMENT REFRENCE
const $strDrink = $("#strDrink");
const $strCategory = $('#strCategory');
const $strInstructions = $("#strInstructions")
const $form = $('form');


//EVENT LISTENERS
$form.on('submit',handleGetData)

//FUNCTIONS
function handleGetData(event){
    event.preventDefault()
    const userInput= $input.val();

$.ajax(URL + userInput).then(function(data){
    type: "GET",
    console.log(data)
    $strDrink.text(data.drinks[0].strDrink)
    $strCategory.text(data.drinks[0].strCategory)
    $strInstructions.text(data.drinks[0].strInstructions)
},function(error){
    console.log("It isnt Working")
    console.log(error)
})
}


