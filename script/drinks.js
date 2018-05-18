$(document).ready(function(){ 
	console.log("connected");
		$(".bg").delay(500).animate({opacity: 1}, 1500);



		$("#beerHead").click(function(){
			$("#beerSection").slideToggle(700)
			$("#wineSection, #cocktailSection, #draftsContainer, #bottlesContainer").hide(500)
			$("#beerHead").toggleClass("activeHead")
			$("#wineHead, #cocktailHead, #whitesHead, #redsHead, #draftsHead, #bottlesHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#beerHead").offset().top
			}, 500);
		});

		$("#draftsHead").click(function(){
			$("#draftsContainer").slideToggle(700)
			$("#bottlesContainer").hide(500)
			$("#draftsHead").toggleClass("activeHead")
			$("#bottlesHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#beerHead").offset().top
			}, 500);
		})

		$("#bottlesHead").click(function(){
			$("#bottlesContainer").slideToggle(700)
			$("#draftsContainer").hide(500)
			$("#bottlesHead").toggleClass("activeHead")
			$("#draftsHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#beerHead").offset().top
			}, 500);

		})

		$("#wineHead").click(function(){
			$("#wineSection").slideToggle()
			$("#cocktailSection, #beerSection, #whitesContainer, #redsContainer").hide(500)
			$("#wineHead").toggleClass("activeHead")
			$("#beerHead, #cocktailHead, #whitesHead, #redsHead, #draftsHead, #bottlesHead").removeClass("activeHead") 
			$("html, body").animate({
				scrollTop: $("#beerHead").offset().top
				}, 500);
		});


		$("#whitesHead").click(function(){
			$("#whitesContainer").slideToggle(700)
			$("#redsContainer").hide(500)
			$("#whitesHead").toggleClass("activeHead")
			$("#redsHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#wineHead").offset().top
			}, 500);
		})


		$("#redsHead").click(function(){
			$("#redsContainer").slideToggle(700)
			$("#whitesContainer").hide(500)
			$("#redsHead").toggleClass("activeHead")
			$("#whitesHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#wineHead").offset().top
			}, 500);
		})

		$("#cocktailHead").click(function(){
			$("#beerSection, #wineSection").hide(500)
			$("#cocktailSection").slideToggle()
			$("#cocktailHead").toggleClass("activeHead")
			$("#wineHead, #beerHead, #whitesHead, #redsHead, #draftsHead, #bottlesHead").removeClass("activeHead") 
			$("html, body").animate({
				scrollTop: $("#beerHead").offset().top
				}, 500);

		});
	});