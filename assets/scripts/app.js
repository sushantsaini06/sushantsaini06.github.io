const Portfolio = function() {
	function makeWords() {
		var words = [ {
				text: "visualiser",
				weight: 15
			}, {
				text: "Architecture",
				weight: 15
			}, {
				text: "keyshot",
				weight: 15.5
			}, {
				text: "Illustrator",
				weight: 15.5
			},{
				text: "photoshop",
				weight: 16
			},{
				text: "3ds Max",
				weight: 18
			},{
				text: "Designer",
				weight: 15.5
			},{
				text: "lumion",
				weight: 14.5
			},{
				text: "Adobe Indesign",
				weight: 15.5
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a 3D Visualizer.", "love everything about design.", "am also a Architecture Enthusiast."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();

function show_python_projects(){
	var web_projects = document.getElementById("web_projects");
	var python_projects = document.getElementById("python_projects");

	var event_projects = document.getElementById("event_projects");

	var web_buttons = document.getElementsByClassName("web_button");
	var python_buttons = document.getElementsByClassName("python_button");
	var event_buttons = document.getElementsByClassName("event_button");
	
	event_projects.style.display = "none";
	web_projects.style.display = "none";
	python_projects.style.display = "block";

	Array.prototype.forEach.call(web_buttons,function(btn){
		btn.classList.remove("active");
	});

	Array.prototype.forEach.call(python_buttons,function(btn){
		btn.classList.add("active");
	});
	Array.prototype.forEach.call(event_buttons,function(btn){
		btn.classList.remove("active");
	});
}

function show_web_projects(){
	var web_projects = document.getElementById("web_projects");
	var python_projects = document.getElementById("python_projects");

	var event_projects = document.getElementById("event_projects");

	event_projects.style.display = "none";
	python_projects.style.display = "none";
	web_projects.style.display = "block";

	var web_buttons = document.getElementsByClassName("web_button");
	var python_buttons = document.getElementsByClassName("python_button");
	var event_buttons = document.getElementsByClassName("event_button");

	Array.prototype.forEach.call(web_buttons,function(btn){
		btn.classList.add("active");
	});

	Array.prototype.forEach.call(python_buttons,function(btn){
		btn.classList.remove("active");
	});

	Array.prototype.forEach.call(event_buttons,function(btn){
		btn.classList.remove("active");
	});
}

function show_event_projects(){
	var web_projects = document.getElementById("web_projects");
	var python_projects = document.getElementById("python_projects");
	var event_projects = document.getElementById("event_projects");
	python_projects.style.display = "none";
	web_projects.style.display = "none";
	event_projects.style.display = "block";

	var web_buttons = document.getElementsByClassName("web_button");
	var python_buttons = document.getElementsByClassName("python_button");
	var event_buttons = document.getElementsByClassName("event_button");
	Array.prototype.forEach.call(web_buttons,function(btn){
		btn.classList.remove("active");
	});

	Array.prototype.forEach.call(python_buttons,function(btn){
		btn.classList.remove("active");
	});

	Array.prototype.forEach.call(event_buttons,function(btn){
		btn.classList.add("active");
	});
}
