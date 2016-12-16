/**
 * Created by fabi on 02.12.16.
 */
app.factory('UtilService', function(){
    return {
        test : "testVariable",

        getUser : function(){
            return JSON.parse(localStorage.getItem("user"));
        },

        getImg : function(){
            var userImg = '';
            var url = JSON.parse(localStorage.getItem("user")).imgUrl;
            if(url != undefined){
                userImg = url;
            }else{
                userImg = "/unknown-user.png";
            }
            return userImg;
        }
    }
});