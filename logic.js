
  $("#submitButton").on("click",function(){
    $("#animalposting").empty();
    var text = $("#grabText").val().trim();
    console.log(text);
    var button = $("<button id = 'autoButton'>");
    button.attr("data-animal",text);
    button.text(text);
    $("#newButtons").append(button);
    buttonAnimal = button.data("animal");
    console.log(buttonAnimal);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+buttonAnimal+"&api_key=HcsNhRKSqTEd92MwY2ItodUbueGsW9mH&limit=5";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.data;
          console.log(results);
       for (var i = 0; results.length; i++){
             var animalDiv = $("<div>");
             var p = $("<p>").text("Rating:  " + results[i].rating);   
              var animalImage = $("<img>");
              animalImage.attr("src",results[i].images.fixed_height.url);    
              animalDiv.append(p);
              animalDiv.append(animalImage);  
              $("#animalposting").append(animalDiv);             
       }       
                })

    



   })





/// original tabs having configured anaimals buttons lions..........
    
$("button").on("click",function(){          
   // $("#animalposting").empty();
    var getName = $(this).data("animal");
    console.log(getName);
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+getName+"&api_key=HcsNhRKSqTEd92MwY2ItodUbueGsW9mH&limit=5";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .done(function(response) {
          var results = response.data;
          console.log(results);
       for (var i = 0; results.length; i++){
             var animalDiv = $("<div>");
             var p = $("<p>").text("Rating:  " + results[i].rating);   
              var animalImage = $("<img>");
              animalImage.attr("src",results[i].images.fixed_height.url);    
              animalDiv.append(p);
              animalDiv.append(animalImage);  
              $("#animalposting").append(animalDiv);             
       }       
                })


       
    })

    $("#autoButton").on("click",function(){          
     // $("#animalposting").empty();
      var getName = $(this).data("animal");
      console.log(getName);
      
      var queryURL = "https://api.giphy.com/v1/gifs/search?q="+getName+"&api_key=HcsNhRKSqTEd92MwY2ItodUbueGsW9mH&limit=5";
      console.log(queryURL);
      $.ajax({
          url: queryURL,
          method: "GET"
        })
          .done(function(response) {
            var results = response.data;
            console.log(results);
         for (var i = 0; results.length; i++){
               var animalDiv = $("<div>");
               var p = $("<p>").text("Rating:  " + results[i].rating);   
                var animalImage = $("<img>");
                animalImage.attr("src",results[i].images.fixed_height.url);    
                animalDiv.append(p);
                animalDiv.append(animalImage);  
                $("#animalposting").append(animalDiv);             
         }       
                  })
  
                  
         
      })

  