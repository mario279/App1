//an anonimous function which is immediately invoked function wrapped in parenthesis... iffe
//the variable and the function cannot be accessed from the outside
var budgetController = (function() {

  }

)();


var UIController = (function() {

 var DOMStrings = {

    inputTyp : '.add__type',
    descType : '.add__description',
    valueInput : '.add__value',
    inputButton : '.add__btn'

 }

  return {
    getInput: function() {
      return {

        type: document.querySelector(DOMStrings.inputTyp).value, // will select in the future inc or exp
        description: document.querySelector(DOMStrings.descType).value,
        value: document.querySelector(DOMStrings.valueInput).value

      }
      getDOMStrings = function(){
           return DOMStrings;
      }

    }




  } //end return of the object


/* Act on the event */
// weather info
// async function getWeather(){
// fetch('https://crossorigin.me/https://www.metaweather.com/api/location/2487956')
//
// //not added
//   .then(result =>{
//     console.log(result);
//     return result.jason();
//   })
//   .then(data =>{
//     const today = data.consolidated_weather[0];
//     console.log('temperaature in ${data.title} stay between ${today.min_temp}.')
//   })
//   .catch(error =>console.log(error));
//
// }
//
// getWeather();
///  end weather info
function checkTime(i) {
  if (i < 0) {
    i = '0' + i;
  }
  return i;
}

startTime();

function startTime() {

  var todayObj = new Date();
  var dates = todayObj.getMonth() + '-' + todayObj.getDate() + '-' + todayObj.getFullYear();

  var minutes = todayObj.getMinutes();
  var hours = todayObj.getHours();
  var seconds = todayObj.getSeconds();


  minutes = checkTime(minutes);
  hours = checkTime(hours);
  seconds = checkTime(seconds);

  var time = hours + ":" + minutes + ":" + seconds;
  // var fieldNameElement2 = document.querySelector(".current__time--text");
  //  fieldNameElement2.textContent = hours + minutes + seconds;
  // t = setTimeout(function(){ startTime()}, 500);
  // startTime();

  function changeDate(datesVar, timeVar) {

    var fieldNameElement = document.querySelector(".current__date--text");
    fieldNameElement.textContent = datesVar;
    var fieldNameElement2 = document.querySelector(".current__time--text");
    fieldNameElement2.textContent = timeVar;
    t = setTimeout(function() {
      startTime()
    }, 500);

  } // finish startTime
  changeDate(dates, time);

} //end startTime

})(); //end UI controller


var controller = (function(budgetCtrl, UICtrl)
{

    var setupEventListeners = function()
    {

        var StringsDOM = UIController.getDOMStrings();
        document.querySelector(input.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event)
        {
          if (event.keycode === 13 || event.which === 13)
          {
            ctrlAddItem();
          }
        })

    } // end setupEvetListeners

  var ctrlAddItem = function()
    {
      var input = UIController.getInput();
      console.log(input);

    }

  var input = UIController.getInput();
  console.log(input);

  return{

    init: function(){

      console.log('application started');
      setupEventListeners();
    }
  };

} ) (budgetController, UIController);


controller.init();
      // we will add a listener only to the button, whiich shoudl listen to the click event
        // since we need the dom to listen to the event and not necessarily the box, we need to ad the addEventListener to the dom
        //  document.addEventListener('keypress', function(event) {

   // end controller
      // get input data

      //add the item to the budget budgetController

      //change the ui to reflect the change(

      // do the math on the budget

      // change the ui to reflect the new budget
