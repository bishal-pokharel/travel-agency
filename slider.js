	
	$(document).ready(function(){
			$('#imageDiv').mouseenter(function(){
				$(this).animate({
					down:"1000px",
					height:"650px",
					opacity:"0.7"
				},5000);
				//$("#txt p").hide().show('slide');
			});

			$('img').mouseenter(function(){
				$('#txt p').show('side').animate({
									fontSize:"20px",					

				},3000);
				$('#txt h2').animate({
								fontSize:"30px",
				},3000);
			});

			$('#logo1').on("mouseenter", function(){
				$(this).animate({left:"0px"},1000);
			});
			$('#logo1').on("mouseleave", function(){
				$(this).animate({left:"-100px"},1000);
			});
			$('#logo2').on("mouseenter", function(){
				$(this).animate({left:"0px"},1000);
			});
			$('#logo2').on("mouseleave", function(){
				$(this).animate({left:"-100px"},1000);
			});
			$('#logo3').on("mouseenter", function(){
				$(this).animate({left:"0px"},1000);
			});
			$('#logo3').on("mouseleave", function(){
				$(this).animate({left:"-100px"},1000);
			});

			$("#sidebar,#header").mouseenter(function(){
				$('#hidden-menu').slideDown("fast");
			});
			$("#imageDiv").mouseenter(function(){
				$('#hidden-menu').slideUp("fast");
			});

		});