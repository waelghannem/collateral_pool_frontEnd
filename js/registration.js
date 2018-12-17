$(document).ready(function() {
$("#register").click(function() {
var name = $("#name").val();
var username = $("#username").val();
var phone = $("#phone").val();
var email = $("#email").val();
var password = $("#password").val();
var cpassword = $("#cpassword").val();
console.log("clicked regsiter button", name, username, password)

if (name == '' || email == '' || password == '' || cpassword == '' || phone == '' || username == '') {
alert("Please fill all fields...!!!!!!");
} else if ((password.length) < 6) {
alert("Password should atleast 6 character in length...!!!!!!");
} else if (!(password).match(cpassword)) {
alert("Your passwords don't match. Try again?");
} else {
	
$.post("http://144.202.19.2:3014/users/register", {
name: name,
username : username,
phone : phone,
email: email,
password: password
}, function(data) {
if (data.success == true) {
}

});

}
});
});
