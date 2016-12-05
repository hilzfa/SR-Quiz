/**
 * Created by fabi on 04.04.16.
 */
var logout = function(){
    if(confirm("Wirklich ausloggen?")){
      $.post('/logout').done(function(){
          window.location = window.location.search;
      });
    }
    else{
      return;
    }

};

// var settings = function(){
//     $('#exampleModal').modal();
//     $('.popover').popover('hide');
//   }
