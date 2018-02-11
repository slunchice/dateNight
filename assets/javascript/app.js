
// yelp api_____
// bcs2fOhux1UxgJZYOjtqrLNWDZ6vNIgGrG_ESgiA64aFLubG3z7uL5vFvTMqn5onZA8hqGZse6UiSqlB0oLm5UIjzjXUfqCsqLI63vCJhjJSQW84sTBBy-v9A8lzWnYx


// eventful api_____
// Key: xzCLvXpkc5JmtDcX

$(document).ready(function(){
  // yelp ajax api call
  function yelp() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + city + "&term=" + foodType + "&price=" + queryPrice + "&limit=5",
      "method": "GET",
      "headers": {
        "Authorization": "Bearer wN3yn1ihiVGsnXVjsnGISEGW6rhZ7AJfqW2u8ObXlcjpbZrXAWYts0tT0aRiJklporL0o9-AUPNVf7NQa4lylBavnTyuR3fQYfuGXRdSM9TdQzVglhCcH1-Blgx5WnYx",
        "Cache-Control": "no-cache",
        "Postman-Token": "dea27224-bbed-d7e2-3a99-17578a84c0a1"
      }
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      // added a loop to select specific targets within the object
      for(var i = 0; i < response.businesses.length; i++){
      // name of restaurant stored in var restaurantName
      var restaurantName = response.businesses[i].name;
      console.log(response.businesses[i].name);

      var restaurantImage = response.businesses[i].image_url;
      console.log(response.businesses[i].image_url);

      var restaurantRating = response.businesses[i].rating;
      console.log("Rating: " + response.businesses[i].rating);

      var restaurantUrl = response.businesses[i].url;
      console.log(response.businesses[i].url);
      
      // console log the price to make sure switch statement works
      console.log(response.businesses[i].price);
      }
    });
  }
  // only run the yelp api function when food and food&fun button is clicked, not fun only button
  $(document).on("click", "#dinner-btn,#dinner-movie-btn", yelp);


  // eventful ajax api call
  function eventful() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?category=" + eventChoice + "&when=" + when + "&location=" + city + "&page_size=5" + "&app_key=xzCLvXpkc5JmtDcX",
      "method": "GET",
      "headers": {
        "Cache-Control": "no-cache",
        "Postman-Token": "12218584-7ad2-68b9-0012-85aeef066241"
      }
    }

    $.ajax(settings).done(function (response) {
      // turning string into object and storing in variable res
      var res = JSON.parse(response);
      console.log(res.events.event);

      // looping through the array and return the events within the object
      for(var i = 0; i < res.events.event.length; i++){

        var eventTitle = res.events.event[i].title;
        console.log(res.events.event[i].title);
      
        var eventVenueName = res.events.event[i].venue_name;
        console.log(res.events.event[i].venue_name);

        var eventVenueAddress = res.events.event[i].venue_address;
        console.log(res.events.event[i].venue_address);

        var eventUrl = res.events.event[i].url;
        console.log(res.events.event[i].url);

        var eventTime = res.events.event[i].start_time;
        console.log(res.events.event[i].start_time);

        var eventImage = "";
        if (res.events.event[i].image==null) {
          eventImage = "//t4.ftcdn.net/jpg/01/11/95/65/240_F_111956526_iqKGrrQH05N6j8QVqh7uSzbil4hbjbjI.jpg";
          console.log(eventImage);
        } else {
          eventImage = res.events.event[i].image.medium.url;
          console.log(eventImage);     
        }
      
        $(".img-class").append();
        $(".info-title-class").append(eventTitle);
        $(".info-class").append(eventVenueName,eventVenueAddress,eventUrl);


      }
    });
  }
  // only run the eventful api function when fun and food&fun button is clicked, not food only button
  $(document).on("click", "#movie-btn,#dinner-movie-btn", eventful);


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDOkboNY8hDQINOTs70VB20lyrQccaemY0",
    authDomain: "datenight-60047.firebaseapp.com",
    databaseURL: "https://datenight-60047.firebaseio.com",
    projectId: "datenight-60047",
    storageBucket: "datenight-60047.appspot.com",
    messagingSenderId: "445418868030"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var city = "";
  var state = "";
  // var zip = "";
  var foodType = "";
  var eventChoice = "";
  var when = "";
  var price = "";
  var queryPrice = "";

  $("#dinner-btn,#movie-btn,#dinner-movie-btn").on("click", function(event) {

    event.preventDefault();

    // store the values of the form inputs into the global variables above
    city = $("#city-input").val().trim();
    state = $("#state-input").val().trim();
    // zip = $("#zip-input").val().trim();
    foodType = $("#food-type-input").val();
    price = $("#price-input").val();
    eventChoice = $("#event-input").val();
    when = $("#when-input").val();

    // switch statement to change value of selected price from "$,$$,$$$,$$$$" to "1,2,3,4" to be used as a parameter in the query url.
    switch (price) {
      case "$":
        queryPrice = "1";
          break;
      case "$$":
        queryPrice = "2";
          break;
      case "$$$":
        queryPrice = "3";
          break;
      case "$$$$":
        queryPrice = "4";
          break;
    }

    // empty all inputs after submit is clicked
    // $("#city-input").val('');
    // $("#state-input").val('');
    // $("#zip-input").val('');
    
    
    // pushing the value inputs of the variables to the firebase database
    database.ref().push({
      city: city,
      state: state,
      // zip: zip,
      foodType: foodType,
      price: price,
      eventChoice: eventChoice,
      when: when,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  });

});
