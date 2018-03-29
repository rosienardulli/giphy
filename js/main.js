$(document).ready(function() {
    //array
        var dogs = ["goldendoodle", "labradoodle", "schnoodle", "cockapoo", "maltipoo", "dalmation", "bernese mountain dog", "cocker spaniel", "yorkshire terrier", "husky", "french bulldog", "shiba inu", "pomeranian", "labrador", "great dane", "italian greyhound", "cocker spaniel", "bichon frese", "dachshund", "beagle", "havanese", "poodle", "pug", "chow chow", "shar pei"];
        console.log(dogs);
    
    //dog buttons
        function renderButtons() {
            $('#buttons-view').empty();
    
            for (var i = 0; i < dogs.length; i++) {
    
                var newButton = $("<button class='btn btn-primary btn-lg active'>");
                newButton.attr("data-dog", dogs[i]);
                newButton.text(dogs[i]);
    
                $("#buttons-view").append(newButton);
            }
        }
        renderButtons();
    
        // dogs show up
        $("#add-dog").on("click", function(event) {
            event.preventDefault();
            var char = $("#dog-input").val().trim();
            dogs.push(char);
            renderButtons();
        });
    
      


        $("#buttons-view").on("click", ".btn-primary", function() {
    
            var puppy = $(this).attr("data-dog");

            //API
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + puppy + "&api_key=dc6zaTOxFJmzC&limit=15";
            console.log(queryURL);
        //calls giphy API
            $.get(queryURL).done(function(response) {
                var results = response.data;
                console.log(results);
            //assigned variables to still image and gif
                var stillImage = results[0].images.original_still.url
                var gifImage = results[0].images.original.url
          
            //loads still image with click 
                $('.image').html('<img class="img-thumbnail" src="' + stillImage + ' "data-state="still"' + '>');
                $('.image').html('<img class="img-thumbnail" src="' + gifImage + ' "data-state="still"' + '>');
    
            });
   
       
    
        });
    
    
    });