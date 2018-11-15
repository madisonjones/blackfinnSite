$(document).ready(function(){ 
	console.log("connected");
		$(".bg").delay(500).animate({opacity: 1}, 1500);

		$("#specialsHead").click(function(){
			$("#specialsSection").slideToggle(700)
			$("#wineSection, #beerSection, #cocktailSection, #draftsContainer, #bottlesContainer").hide(500)
			$("#specialsHead").toggleClass("activeHead")
			$("#wineHead, #beerHead, #cocktailHead, #whitesHead, #redsHead, #draftsHead, #bottlesHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#specialsHead").offset().top
			}, 500);
		});

		$("#beerHead").click(function(){
			$("#beerSection").slideToggle(700)
			$("#specialsSection, #wineSection, #cocktailSection, #draftsContainer, #bottlesContainer").hide(500)
			$("#beerHead").toggleClass("activeHead")
			$("#specialsHead, #wineHead, #cocktailHead, #whitesHead, #redsHead, #draftsHead, #bottlesHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#specialsHead").offset().top
			}, 500);
		});

		$("#draftsHead").click(function(){
			$("#draftsContainer").slideToggle(700)
			$("#bottlesContainer").hide(500)
			$("#draftsHead").toggleClass("activeHead")
			$("#bottlesHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#specialsHead").offset().top
			}, 500);
		})

		$("#bottlesHead").click(function(){
			$("#bottlesContainer").slideToggle(700)
			$("#draftsContainer").hide(500)
			$("#bottlesHead").toggleClass("activeHead")
			$("#draftsHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#specialsHead").offset().top
			}, 500);

		})

		$("#wineHead").click(function(){
			$("#wineSection").slideToggle()
			$("#specialsSection, #cocktailSection, #beerSection, #whitesContainer, #redsContainer").hide(500)
			$("#wineHead").toggleClass("activeHead")
			$("#specialsHead, #beerHead, #cocktailHead, #whitesHead, #redsHead, #draftsHead, #bottlesHead").removeClass("activeHead") 
			$("html, body").animate({
				scrollTop: $("#specialsHead").offset().top
				}, 500);
		});


		$("#whitesHead").click(function(){
			$("#whitesContainer").slideToggle(700)
			$("#redsContainer").hide(500)
			$("#whitesHead").toggleClass("activeHead")
			$("#redsHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#specialsHead").offset().top
			}, 500);
		})


		$("#redsHead").click(function(){
			$("#redsContainer").slideToggle(700)
			$("#whitesContainer").hide(500)
			$("#redsHead").toggleClass("activeHead")
			$("#whitesHead").removeClass("activeHead") 
			$("html, body").animate({
			    scrollTop: $("#specialsHead").offset().top
			}, 500);
		})

		$("#cocktailHead").click(function(){
			$("#specialsSection, #beerSection, #wineSection").hide(500)
			$("#cocktailSection").slideToggle()
			$("#cocktailHead").toggleClass("activeHead")
			$("#specialsHead, #wineHead, #beerHead, #whitesHead, #redsHead, #draftsHead, #bottlesHead").removeClass("activeHead") 
			$("html, body").animate({
				scrollTop: $("#specialsHead").offset().top
				}, 500);

		});
	});