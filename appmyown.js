//an anonimous function which is immediately invoked function wrapped in parenthesis... iffe
//the variable and the function cannot be accessed from the outside
var budgetController = (function(){

}

)();

var UIController = (function(){

// weather info
var geocoder;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}

//Get the latitude and the longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    codeLatLng(lat, lng);
}

function errorFunction(){
    alert("Geocoder failed");
}

  function initialize() {
    geocoder = new google.maps.Geocoder();
}

  function codeLatLng(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocoder({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      console.log(results)
        if (results[1]) {

         //formatted address
         alert(results[0].formatted_address)

        //find country name
            for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    city= results[0].address_components[i];
                    break;
                }
            }
        }
        //city data
        alert(city.short_name + " " + city.long_name)


        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }



///  end weather info




function checkTime(i){
 if(i<0){
     i = '0' +i;
  }
  return i;}
startTime();
 function startTime(){

     var todayObj = new Date();
     var dates = todayObj.getMonth()+'-'+ todayObj.getDate()+'-'+todayObj.getFullYear();

     var minutes = todayObj.getMinutes();
     var hours= todayObj.getHours();
     var seconds = todayObj.getSeconds();


     minutes = checkTime(minutes);
     hours = checkTime(hours);
     seconds = checkTime(seconds);

     var time = hours + ":" + minutes + ":" + seconds;



    // var fieldNameElement2 = document.querySelector(".current__time--text");
    //  fieldNameElement2.textContent = hours + minutes + seconds;
    // t = setTimeout(function(){ startTime()}, 500);
    // startTime();

   function changeDate(datesVar, timeVar){

     var fieldNameElement = document.querySelector(".current__date--text");
     fieldNameElement.textContent = datesVar;
     var fieldNameElement2 = document.querySelector(".current__time--text");
     fieldNameElement2.textContent = timeVar;
     t = setTimeout(function(){ startTime()}, 500);

   } // finish startTime
    changeDate(dates,time);

  }





})    ();  //end startTime


var controller = (function(budgetCtrl, UICtrl){


// we will add a listener only to the button, whiich shoudl listen to the click event



// since we need the dom to listen to the event and not necessarily the box, we need to ad the addEventListener to the dom
//  document.addEventListener('keypress', function(event) {

//     if (event.keycode ===13|| event.which ==13)
  //   {
//       console.log('enter was pressed');
//     }
//     else

  })(budgetController, UIController);
  // get input data

  //add the item to the budget budgetController

  //change the ui to reflect the change(

 // do the math on the budget

 // change the ui to reflect the new budget
