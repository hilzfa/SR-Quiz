function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

/*
$('document').ready(function(){
	if(getCookie("username") != ""){
		$('#usernameDisplay').html(getCookie("username"));
	}
	$('#loginBtn').on('click',function(){
		var data = {};
					data.username = $('#username').val();
					data.password = $('#password').val();

					$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: 'http://localhost:8000/',
                        success: function(data) {
                            console.log('success');
                            $('#usernameDisplay').html(getCookie("username"));
                            console.log(JSON.stringify(data));
                        }
                    });
	})
	});
*/
