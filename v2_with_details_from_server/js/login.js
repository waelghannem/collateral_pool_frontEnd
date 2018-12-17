$(document).ready(function() {
	
$("#login").click(function(e) {
	e.preventDefault();
var username = $("#login-form-username").val();
var password = $("#login-form-password").val();

console.log("clicked regsiter button", username, password)

if (password == '' || username == '') {
alert("Please fill all fields...!!!!!!");
} else if ((password.length) < 6) {
alert("Password should atleast 6 character in length...!!!!!!");
} else {
	
/* $.post("http://localhost:3014/users/login", {
username : username,
password: password
}, function(data, status, xhr) {
	console.log("Cookie: " + xhr.getResponseHeader("Set-Cookie"));
	console.log("result from server is ",data)
if (data.isAuth == true) {
	console.log("user logged in")
	//window.location.href = "nodeTable.html";
}

}); */

var geturl = $.ajax({
	type: 'POST',
	url: "http://localhost:3014/users/login",
	data:{username : username,password: password},
	 crossDomain: true,
	dataType: "json",
	async: true,
	//async: false, you can use async 
	success: function (data) {
	
	if (data.isAuth == true) {
		console.log("user logged in")
		sessionStorage.setItem("user_token", data.user_token);
		sessionStorage.setItem("user_username", data.username);
		window.location.href = "nodeTable.html";
	}
	}
});

}
});
});