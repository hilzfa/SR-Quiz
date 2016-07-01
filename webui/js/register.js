/**
 * Created by D062653 on 01.07.2016.
 */


$('document').ready(function(){

    $('#registerForm').validator();

    /*$('#registerBtn').attr("disabled", true);

    $('#newUsername').on('input', function(){
        if($('#newUsername').val().length <= 0 ){
            $('#registerBtn').attr("disabled", true);
        }else{
            $('#registerBtn').attr("disabled", false);
        }
    });*/
    $('#registerBtn').on('click', function(){
        var newUser = {};
        newUser.username = $('#newUsername').val();
        newUser.password = md5($('#newPassword').val());

        if(newUser){
            $.ajax({
                "url" : "http://localhost:8000/createUser",
                "type": "POST",
                "contentType":"application/json",
                "data" : JSON.stringify(newUser),
                success: function(data){
                    console.log(data);
                },
                error: function(err){
                    console.log(err);
                }
            })
        }
    });
});