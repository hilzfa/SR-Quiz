/**
 * Created by fabi on 04.04.16.
 */
var logout = function(){
    $.post('/logout').done(function(){
        window.location = window.location.search;
    });
};