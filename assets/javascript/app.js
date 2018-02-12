
// yelp api_____
// bcs2fOhux1UxgJZYOjtqrLNWDZ6vNIgGrG_ESgiA64aFLubG3z7uL5vFvTMqn5onZA8hqGZse6UiSqlB0oLm5UIjzjXUfqCsqLI63vCJhjJSQW84sTBBy-v9A8lzWnYx


// eventful api_____
// Key: xzCLvXpkc5JmtDcX

$(document).ready(function(){
  $("#carousel-container").hide();

  // yelp ajax api call
  // 
  function yelp() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + city + "," + state + "&term=" + foodType + "&price=" + queryPrice + "&limit=5",
      "method": "GET",
      "headers": {
        "Authorization": "Bearer wN3yn1ihiVGsnXVjsnGISEGW6rhZ7AJfqW2u8ObXlcjpbZrXAWYts0tT0aRiJklporL0o9-AUPNVf7NQa4lylBavnTyuR3fQYfuGXRdSM9TdQzVglhCcH1-Blgx5WnYx",
        "Cache-Control": "no-cache",
        "Postman-Token": "dea27224-bbed-d7e2-3a99-17578a84c0a1"
      }
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);

      // var yelpCarousel = $("<div class='item active'>");

      // added a loop to select specific targets within the object
      for(var i = 0; i < response.businesses.length; i++){
      
      // storing value of 5 restaurant images in variables
      // var restaurantImage = response.businesses[i].image_url;
      var restaurantImage1 = response.businesses[0].image_url;
      var restaurantImage2 = response.businesses[1].image_url;
      var restaurantImage3 = response.businesses[2].image_url;
      var restaurantImage4 = response.businesses[3].image_url;
      var restaurantImage5 = response.businesses[4].image_url;
      
      // storing value of 5 restaurant names in variables
      // var restaurantName = response.businesses[i].name;
      var restaurantName1 = response.businesses[0].name;
      var restaurantName2 = response.businesses[1].name;
      var restaurantName3 = response.businesses[2].name;
      var restaurantName4 = response.businesses[3].name;
      var restaurantName5 = response.businesses[4].name;

      // storing value of 5 restaurant rating in variables
      // var restaurantRating = ("Rating: " + response.businesses[i].rating);
      var restaurantRating1 = ("Rating: " + response.businesses[0].rating + "/5");
      var restaurantRating2 = ("Rating: " + response.businesses[1].rating + "/5");
      var restaurantRating3 = ("Rating: " + response.businesses[2].rating + "/5");
      var restaurantRating4 = ("Rating: " + response.businesses[3].rating) + "/5";
      var restaurantRating5 = ("Rating: " + response.businesses[4].rating + "/5");

      // storing value of 5 restaurant addresses in variables
      // var restaurantAddress = response.businesses[i].location.address1;
      var restaurantAddress1 = response.businesses[0].location.address1;
      var restaurantAddress2 = response.businesses[1].location.address1;
      var restaurantAddress3 = response.businesses[2].location.address1;
      var restaurantAddress4 = response.businesses[3].location.address1;
      var restaurantAddress5 = response.businesses[4].location.address1;
      
      // storing value of 5 restaurant yelp page urls in variables
      // var restaurantUrl = response.businesses[i].url;
      var restaurantUrl1 = response.businesses[0].url;
      var restaurantUrl2 = response.businesses[1].url;
      var restaurantUrl3 = response.businesses[2].url;
      var restaurantUrl4 = response.businesses[3].url;
      var restaurantUrl5 = response.businesses[4].url;
      
      // selecting item in carousel html, and displaying the restaurant image and giving a class to select for text to display in html
      $("#yelp-item-1").html("<img src=" + restaurantImage1 + "><br><div class='carousel-caption-1'>"); 
        // selecting the dynamic div created above and displaying html for name, rating, and address in carousel
        $(".carousel-caption-1").html("<h3>" + restaurantName1 + "</h3><h3>" + restaurantRating1 + "</h3><h3>" + restaurantAddress1 + "</h3>");
        // when you click on the carousel for each restaurant option it will redirect you to the yelp page with map, directions and more pictures
        $('#yelp-item-1').on('click', function(){
          window.location = restaurantUrl1;
        });

      $("#yelp-item-2").html("<img src=" + restaurantImage2 + "><br><div class='carousel-caption-2'>");
        $(".carousel-caption-2").html("<h3>" + restaurantName2 + "</h3><h3>" + restaurantRating2 + "</h3><h3>" + restaurantAddress2 + "</h3>");
        $('#yelp-item-2').on('click', function(){
          window.location = restaurantUrl2;
        });

      $("#yelp-item-3").html("<img src=" + restaurantImage3 + "><br><div class='carousel-caption-3'>"); 
        $(".carousel-caption-3").html("<h3>" + restaurantName3 + "</h3><h3>" + restaurantRating3 + "</h3><h3>" + restaurantAddress3 + "</h3>");
        $('#yelp-item-3').on('click', function(){
          window.location = restaurantUrl3;
        });

      $("#yelp-item-4").html("<img src=" + restaurantImage4 + "><br><div class='carousel-caption-4'>"); 
        $(".carousel-caption-4").html("<h3>" + restaurantName4 + "</h3><h3>" + restaurantRating4 + "</h3><h3>" + restaurantAddress4 + "</h3>");
        $('#yelp-item-4').on('click', function(){
          window.location = restaurantUrl4;
        });

      $("#yelp-item-5").html("<img src=" + restaurantImage5 + "><br><div class='carousel-caption-5'>"); 
        $(".carousel-caption-5").html("<h3>" + restaurantName5 + "</h3><h3>" + restaurantRating5 + "</h3><h3>" + restaurantAddress5 + "</h3>");
        $('#yelp-item-5').on('click', function(){
          window.location = restaurantUrl5;
        });

      }
    }); 
  }
  // only run the yelp api function when food and food&fun button is clicked, not fun only button
  $(document).on("click", "#dinner-btn,#dinner-movie-btn", yelp);
  // when you click the food button it will hide the form and display the results
  $( "#dinner-btn,#dinner-movie-btn" ).click(function()  {
    $(".section-options").hide();
    $("#carousel-container").show();
  });



  // eventful ajax api call
  // 
  function eventful() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?category=" + queryEventChoice + "&when=" + when + "&location=" + city + "&page_size=5" + "&app_key=xzCLvXpkc5JmtDcX",
      "method": "GET",
      "headers": {
        "Cache-Control": "no-cache",
        "Postman-Token": "12218584-7ad2-68b9-0012-85aeef066241"
      }
    }

    $.ajax(settings).done(function (response) {
      // turning string into object and storing in variable res
      var res = JSON.parse(response);

      // looping through the array and return the events within the object
      for(var i = 0; i < res.events.event.length; i++){

        // var eventTitle = res.events.event[i].title;
        var eventTitle1 = res.events.event[0].title;
        var eventTitle2 = res.events.event[1].title;
        var eventTitle3 = res.events.event[2].title;
        var eventTitle4 = res.events.event[3].title;
        var eventTitle5 = res.events.event[4].title;
      
        // var eventVenueName = res.events.event[i].venue_name;
        var eventVenueName1 = res.events.event[0].venue_name;
        var eventVenueName2 = res.events.event[1].venue_name;
        var eventVenueName3 = res.events.event[2].venue_name;
        var eventVenueName4 = res.events.event[3].venue_name;
        var eventVenueName5 = res.events.event[4].venue_name;

        // var eventVenueAddress = res.events.event[i].venue_address;
      
        // var eventUrl = res.events.event[i].url;
        var eventUrl1 = res.events.event[0].url;
        var eventUrl2 = res.events.event[1].url;
        var eventUrl3 = res.events.event[2].url;
        var eventUrl4 = res.events.event[3].url;
        var eventUrl5 = res.events.event[4].url;

        // var eventTime = res.events.event[i].start_time;
        var eventTime1 = res.events.event[0].start_time;
        var eventTime2 = res.events.event[1].start_time;
        var eventTime3 = res.events.event[2].start_time;
        var eventTime4 = res.events.event[3].start_time;
        var eventTime5 = res.events.event[4].start_time;

        var eventImage1 = "";
        if (res.events.event[0].image==null) {
          eventImage1 = "https://t4.ftcdn.net/jpg/01/11/95/65/240_F_111956526_iqKGrrQH05N6j8QVqh7uSzbil4hbjbjI.jpg";
        } else {
          eventImage1 = ("https:" + res.events.event[0].image.medium.url);
        }

        var eventImage2 = "";
        if (res.events.event[1].image==null) {
          eventImage2 = "https://t4.ftcdn.net/jpg/01/11/95/65/240_F_111956526_iqKGrrQH05N6j8QVqh7uSzbil4hbjbjI.jpg";
        } else {
          eventImage2 = ("https:" + res.events.event[1].image.medium.url);
        }

        var eventImage3 = "";
        if (res.events.event[2].image==null) {
          eventImage3 = "https://t4.ftcdn.net/jpg/01/11/95/65/240_F_111956526_iqKGrrQH05N6j8QVqh7uSzbil4hbjbjI.jpg";
        } else {
          eventImage3 = ("https:" + res.events.event[2].image.medium.url);
        }

        var eventImage4 = "";
        if (res.events.event[3].image==null) {
          eventImage4 = "https://t4.ftcdn.net/jpg/01/11/95/65/240_F_111956526_iqKGrrQH05N6j8QVqh7uSzbil4hbjbjI.jpg";
        } else {
          eventImage4 = ("https:" + res.events.event[3].image.medium.url);
        }

        var eventImage5 = "";
        if (res.events.event[4].image==null) {
          eventImage5 = "https://t4.ftcdn.net/jpg/01/11/95/65/240_F_111956526_iqKGrrQH05N6j8QVqh7uSzbil4hbjbjI.jpg";
        } else {
          eventImage5 = ("https:" + res.events.event[4].image.medium.url);
        }
        
        // $(".img-class").append();
        // $(".info-title-class").append(eventTitle);
        // $(".info-class").append(eventVenueName,eventVenueAddress,eventUrl);

        // selecting item in carousel html, and displaying the event image and giving a class to select for text to display in html
      $("#eventful-item-1").html("<img src=" + eventImage1 + "><br><div class='carousel-caption-1B'>"); 
        // selecting the dynamic div created above and displaying html for name, rating, and address in carousel
        $(".carousel-caption-1B").html("<h3>" + eventTitle1 + "</h3><h3>" + eventVenueName1 + "</h3><h3>" + eventTime1 + "</h3>");
        // when you click on the carousel for each restaurant option it will redirect you to the eventful page with map, directions and more pictures
        $('#eventful-item-1').on('click', function(){
          window.location = eventUrl1;
        });

      $("#eventful-item-2").html("<img src=" + eventImage2 + "><br><div class='carousel-caption-2B'>");
        $(".carousel-caption-2B").html("<h3>" + eventTitle2 + "</h3><h3>" + eventVenueName2 + "</h3><h3>" + eventTime2 + "</h3>");
        $('#eventful-item-2').on('click', function(){
          window.location = eventUrl2;
        });

      $("#eventful-item-3").html("<img src=" + eventImage3 + "><br><div class='carousel-caption-3B'>"); 
        $(".carousel-caption-3B").html("<h3>" + eventTitle3 + "</h3><h3>" + eventVenueName3 + "</h3><h3>" + eventTime3 + "</h3>");
        $('#eventful-item-3').on('click', function(){
          window.location = eventUrl3;
        });

      $("#eventful-item-4").html("<img src=" + eventImage4 + "><br><div class='carousel-caption-4B'>"); 
        $(".carousel-caption-4B").html("<h3>" + eventTitle4 + "</h3><h3>" + eventVenueName4 + "</h3><h3>" + eventTime4 + "</h3>");
        $('#eventful-item-4').on('click', function(){
          window.location = eventUrl4;
        });

      $("#eventful-item-5").html("<img src=" + eventImage5 + "><br><div class='carousel-caption-5B'>"); 
        $(".carousel-caption-5B").html("<h3>" + eventTitle5 + "</h3><h3>" + eventVenueName5 + "</h3><h3>" + eventTime5 + "</h3>");
        $('#eventful-item-5').on('click', function(){
          window.location = eventUrl5;
        });

      }
    });
  }
  // only run the eventful api function when fun and food&fun button is clicked, not food only button
  $(document).on("click", "#movie-btn,#dinner-movie-btn", eventful);
  // when fun or food and fun button is clicked hide the form and display results
  $( "#movie-btn,#dinner-movie-btn" ).click(function()  {
    $(".section-options").hide();
    $("#carousel-container").show();
  });

  $( "#try-again-button" ).click(function()  {
    $(".section-options").show();
    $("#carousel-container").hide();
  });


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
  var queryEventChoice = "";
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

    // switch statement for event words selected
    switch (eventChoice) {
      case "music":
        queryEventChoice = "music";
        break;
        case "comedy":
        queryEventChoice = "comedy";
        break;
        case "sports":
        queryEventChoice = "sports";
        break;
        case "outdoors":
        queryEventChoice = "outdoors_recreation";
        break;
        case "performing arts":
        queryEventChoice = "performing_arts";
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
