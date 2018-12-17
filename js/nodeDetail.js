$(document).ready(function() {
var qsParm = new Array();
qsParm = qs()
console.log(qsParm)
    var geturl = $.ajax({
        type: 'POST',
        url: "http://144.202.19.2:3014/coins/getCoin",
        data:{name : qsParm.name},
         crossDomain: true,
        dataType: "json",
        async: true,
        //async: false, you can use async 
        success: function (data){
	let userExist = false
        let userAddress = ""
     	console.log("coin from db is ",data)
	console.log(data.coin.deposit_address)
	if (sessionStorage.getItem("user_token")){
			$("#myInput1").html(data.coin.deposit_address)
			for(let i = 0; i <data.coin.participants.length;i++){
				console.log("user name is ",sessionStorage.getItem("user_username"))
				console.log("participants name is ",data.coin.participants[i].address.owner)
				if(data.coin.participants[i].address.owner = sessionStorage.getItem("user_username")){
				console.log("true condition")
				userExist = true
				userAddress = data.coin.participants[i].address.address 			
	}
			}
			if(userExist){
				console.log("show deposit addr")
				$("html body.stretched.device-xl div#wrapper.clearfix section#content div.content-wrap div.container.clearfix div.m-portlet div.m-portlet__body.m-portlet__body--no-padding div.row.m-row--no-padding.m-row--col-separator-xl div.col-md-12.col-lg-6.col-xl-6 div.m-widget24 div.m-widget24__item div.input-group p#myInput.form-control").html(userAddress)

}else {
	console.log("don't show ",userExist)
$("html body.stretched.device-xl div#wrapper.clearfix section#content div.content-wrap div.container.clearfix div.m-portlet div.m-portlet__body.m-portlet__body--no-padding div.row.m-row--no-padding.m-row--col-separator-xl div.col-md-12.col-lg-6.col-xl-6 div.m-widget24 div.m-widget24__item div.input-group p#myInput.form-control").hide()

}
			}else {
			$(".content-wrap > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)").hide()
			$("div.m-portlet:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)").hide()
			}
	}
    }); 

function qs() {
    var query = window.location.search.substring(1);
    var parms = query.split('&');
    for (var i=0; i < parms.length; i++) {
        var pos = parms[i].indexOf('=');
        if (pos > 0) {
            var key = parms[i].substring(0, pos);
            var val = parms[i].substring(pos + 1);
            qsParm[key] = val;

        }
    }
	return qsParm
}

    });
