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
var geturl = $.ajax({
	type: 'POST',
	url: "http://144.202.19.2:3014/users/login",
	data:{username : username,password: password},
	 crossDomain: true,
	dataType: "json",
	async: true,
	//async: false, you can use async 
	success: function (data) {
	
	if (data.isAuth == true) {
		//console.log(data.deposit_addresses)
		console.log("user logged in")
		sessionStorage.setItem("user_token", data.user_token);
		sessionStorage.setItem("user_username", data.username);
		sessionStorage.setItem("user_deposit_addresses",JSON.stringify(data.deposit_addresses))
		window.location.href = "nodeTable.html";
		//window.location = 'nodeDetail.html?name=' + 'hmn';
	}
	}
});

}
});
});
