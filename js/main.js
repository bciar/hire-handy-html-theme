$(document).ready(function() {


	// show/hide element and animate elements inside it - mobile search and mobile menu animations
	function animations(triggerShow, triggerHide) {

		var animationsTime = 300; // should be the same as transition time for css animations
		var triggerShow = $(triggerShow);
		var triggerHide = $(triggerHide);

		// show
		triggerShow.click(function() {
			
			// get target
			var menu = $(this).data("target");

			// show
			$(menu).addClass("show animations");
		});

		// hide
		triggerHide.click(function() {
			
			// get target
			var menu = $(this).data("target");

			// show
			$(menu).removeClass("animations");

			// after animations done
			setTimeout(function() {
				// hide menu
				$(menu).removeClass("show");
			}, animationsTime);

		});

	};

	// Off canvas menu
	animations(".js-navbar-show", ".js-navbar-hide");



	// On the login screens the error messages appear vertically from the login tile
	(function() {

		// !!! DEMO. Modify this script like you need later !!!
		
		var alerts = $(".form-alerts-container");
		var errorInput = $(".box--login .invalid-demo")

		// duration of animation
		var animationTime = 200;

		// hide alerts
		// alerts.hide(0);

		// remove invalid class from input
		// errorInput.removeClass("is-invalid");

		// after delay - this is DEMO!!! you should add you event when will validate forms
		setTimeout(function() {

			// fade in alerts
			alerts.find(".form-alert").slideDown(animationTime);

			// add invalid properties to input
			errorInput.addClass("is-invalid");

		}, 1000);


	})();

	// chat collapse
	$("[data-toggle='chat']").click(function() {
		var toggler = $(this);
		var chatId = toggler.data("target");
		var chat = $(chatId);

		toggler.toggleClass("show");
		chat.toggleClass("show");

	});


	// on off switch - checkbox slider
	// https://www.jqueryscript.net/form/Custom-On-Off-Toggle-Switch-Plugin-For-jQuery-on-off-switch-js.html
	$(".js-switch").each(function() {

		$(this).click(function() {
			$(this).toggleClass("on");
		})

	});




	/*
		Profile links -  smooth scroll to anchor
	*/
	$(".js-profile-link").click(function(event) {
		event.preventDefault();
		
		// scroll to anchor
		$("body, html").animate({
			scrollTop: $( $.attr(this, "href") ).offset().top - 70 // compensate header height
		}, 500);

	});


	




	/*
		Smooth scroll to top
	*/
	$(".js-to-top").click(function(event) {
		event.preventDefault();
		
		// scroll to anchor
		$("body, html").animate({
			scrollTop: 0
		}, 500);

	});

	/*
		Enable Tooltips
	*/
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
















});