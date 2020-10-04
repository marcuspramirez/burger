// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var neweat = $(this).data("neweat");
  
      var neweatState = {
        devoured: neweat
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: neweatState
      }).then(
        function() {
          console.log("changed eat to", neweat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        //eaten: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });