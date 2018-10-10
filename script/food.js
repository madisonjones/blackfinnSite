$(document).ready(function(){ 
	console.log("connected");
		$(".bg").delay(500).animate({opacity: 1}, 1500);


		$("#starterHead").click(function(){
			$("#starterHead").toggleClass("activeHead")
			$("#lunchHead, #saladHead, #handheldHead, #entreeHead, #sideHead, #dessertHead").removeClass("activeHead") 
			$("#starterSection").slideToggle(700)
			$("#lunchSection, #saladSection, #handheldSection, #entreeSection, #sideSection, #dessertSection").hide()
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});

		$("#lunchHead").click(function(){
			$("#lunchHead").toggleClass("activeHead")
			$("#saladHead, #starterHead, #handheldHead, #entreeHead, #sideHead, #dessertHead").removeClass("activeHead") 
			$("#lunchSection").slideToggle(700)
			$("#saladSection, #starterSection, #handheldSection, #entreeSection, #sideSection, #dessertSection").hide()
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});

		$("#saladHead").click(function(){
			$("#saladSection").slideToggle(700)
			$("#starterSection, #lunchSection,  #handheldSection, #entreeSection, #sideSection, #dessertSection").hide(500)
			$("#saladHead").toggleClass("activeHead")
			$("#starterHead, #lunchHead, #handheldHead, #entreeHead, #sideHead, #dessertHead").removeClass("activeHead")
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});

		$("#handheldHead").click(function(){
			$("#handheldSection").slideToggle(700)
			$("#starterSection, #lunchSection, #saladSection, #entreeSection, #sideSection, #dessertSection").hide(500)
			$("#handheldHead").toggleClass("activeHead")
			$("#lunchHead, #saladHead, #starterHead, #entreeHead, #sideHead, #dessertHead").removeClass("activeHead")
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});

		$("#entreeHead").click(function(){			
			$("#entreeSection").slideToggle(700)
			$("#starterSection, #lunchSection, #saladSection, #handheldSection, #sideSection, #dessertSection").hide(500)
			$("#entreeHead").toggleClass("activeHead")
			$("#lunchHead, #saladHead, #handheldHead, #starterHead, #sideHead, #dessertHead").removeClass("activeHead")
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});

		$("#sideHead").click(function(){			
			$("#sideSection").slideToggle(700)
			$("#starterSection, #lunchSection, #saladSection, #handheldSection, #entreeSection, #dessertSection").hide(500)
			$("#sideHead").toggleClass("activeHead")
			$("#lunchHead, #saladHead, #handheldHead, #entreeHead, #starterHead, #dessertHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});

		$("#dessertHead").click(function(){			
			$("#dessertSection").slideToggle(700)
			$("#starterSection, #lunchSection, #saladSection, #handheldSection, #entreeSection, #sideSection").hide(500)
			$("#dessertHead").toggleClass("activeHead")
			$("#lunchHead, #saladHead, #handheldHead, #entreeHead, #starterHead, #sideHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#starterHead").offset().top
			}, 500);
		});


		
	});

