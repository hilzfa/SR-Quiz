/**
 * Created by D062653 on 06.08.2015.
 */
app.service("userInfo",function(){
    var user = {
        "name":"",
        "vorname":""
    };
    this.setInfo = function(s){
       user.name = s.user.name;
        user.vorname = s.user.vorname;
    };
    this.getInfo = function(s){
        s.user.name = user.name;
        s.user.vorname = user.vorname;
    };

});