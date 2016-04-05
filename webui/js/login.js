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


$('document').ready(function(){

	$('#username , #password').keydown(function(event){
		if(event.keyCode == 13){
			var data = {};
			data.username = $('#username').val();
			data.password = md5($('#password').val());

			$.ajax({
				type: 'POST',
				data: JSON.stringify(data),
				contentType: 'application/json',
				url: 'http://localhost:8000/authenticate',
				success: function(data) {
					console.log('success');
					$('#usernameDisplay').html(getCookie("username"));
					localStorage.setItem("user",(data));
					window.location = window.location.search;
				},
				error: function(data){
					console.log(data);
				}
			});

		}
	});


});
