$(document).ready(function(){ 
	console.log("connected");
		$(".bg").delay(500).animate({opacity: 1}, 1500);


	$("#submitButton").click(function(){
		var hostName = $("#inputName").val()
		console.log(hostName)
	})
	});

