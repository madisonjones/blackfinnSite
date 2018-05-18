$(document).ready(function(){ 
	console.log("connected");
		$(".bg").delay(500).animate({opacity: 1}, 1500);


		$("#starterHead").click(function(){
			$("#starterHead").toggleClass("activeHead")
			$("#saladHead, #handheldHead, #entreeHead, #sideHead").removeClass("activeHead") 
			$("#starterSection").slideToggle(700)
			$("#saladSection, #handheldSection, #entreeSection, #sideSection").hide()
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});

		$("#saladHead").click(function(){
			$("#saladSection").slideToggle(700)
			$("#starterSection, #handheldSection, #entreeSection, #sideSection").hide(500)
			$("#saladHead").toggleClass("activeHead")
			$("#starterHead, #handheldHead, #entreeHead, #sideHead").removeClass("activeHead")
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});

		$("#handheldHead").click(function(){
			$("#handheldSection").slideToggle(700)
			$("#starterSection, #saladSection, #entreeSection, #sideSection").hide(500)
			$("#handheldHead").toggleClass("activeHead")
			$("#saladHead, #starterHead, #entreeHead, #sideHead").removeClass("activeHead")
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});

		$("#entreeHead").click(function(){			
			$("#entreeSection").slideToggle(700)
			$("#starterSection, #saladSection, #handheldSection, #sideSection").hide(500)
			$("#entreeHead").toggleClass("activeHead")
			$("#saladHead, #handheldHead, #starterHead, #sideHead").removeClass("activeHead")
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});

		$("#sideHead").click(function(){			
			$("#sideSection").slideToggle(700)
			$("#starterSection, #saladSection, #handheldSection, #entreeSection").hide(500)
			$("#sideHead").toggleClass("activeHead")
			$("#saladHead, #handheldHead, #entreeHead, #starterHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});
	});

