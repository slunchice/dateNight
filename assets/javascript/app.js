
// yelp api_____
// I requested an api key and it is pasted in the line below
// bcs2fOhux1UxgJZYOjtqrLNWDZ6vNIgGrG_ESgiA64aFLubG3z7uL5vFvTMqn5onZA8hqGZse6UiSqlB0oLm5UIjzjXUfqCsqLI63vCJhjJSQW84sTBBy-v9A8lzWnYx
// not sure if we need client ID but its pasted below
// rB_Ksk_aj6pA6fD1QKzXIw
// I believe the below url is what we link our api to when we search with our GET
// https://api.yelp.com/v3/businesses/search

// eventful api_____
// fandango didnt have a public api anymore, I think eventful could be a better option since it does movies and other events like concerts too
// I requested an api key and it is pasted in the line below
// xzCLvXpkc5JmtDcX
// the url below is the tutorial how to use the eventful api
// https://api.eventful.com/tools/tutorials/search
// here is the eventful url if you wanna check out the site to see if it would work for us http://charlotte.eventful.com/events

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
  var zip = "";
  var foodType = "";
  var price = "";
  var movie = "";

  $("#dinner-btn,#movie-btn,#dinner-movie-btn").on("click", function(event) {

    event.preventDefault();

    // store the values of the form inputs into the global variables above
    city = $("#city-input").val().trim();
    state = $("#state-input").val().trim();
    zip = $("#zip-input").val().trim();
    foodType = $("#food-type-input").val();
    price = $("#price-input").val();
    movie = $("#movie-name-input").val().trim();

    // empty all inputs after submit is clicked
    $("#city-input").val('');
    $("#state-input").val('');
    $("#zip-input").val('');
    $("#movie-name-input").val('');

    // pushing the value inputs of the variables to the firebase database
    database.ref().push({
      city: city,
      state: state,
      zip: zip,
      foodType: foodType,
      price: price,
      movie: movie,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });
