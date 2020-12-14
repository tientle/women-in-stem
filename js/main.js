// HIGHCHARTS //

Highcharts.chart('chart', {

    title: {
        text: 'Median Salaries For Science & Engineering Degree-Holders'
    },

    subtitle: {
        text: 'Source: https://ncses.nsf.gov/pubs/nsb20198/demographic-trends-of-the-s-e-workforce#women-in-the-s-e-workforce'
    },

    yAxis: {
        title: {
            text: 'Graduation Rate (%)'
        }
    },

    xAxis: {
      categories: [
        '1995',
        '2003',
        '2017'
      ],
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [{
        name: 'Males',
        data: [49000, 68000, 90000]
    }, {
        name: 'Females',
        data: [34000, 45000, 60000]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

// HIGHCHARTS END //


// Scale Animation Setup
// .to('@target', @length, {@object})
var scale_tween = TweenMax.to('#scale-animation', 1, {
  transform: 'scale(.90)',
  ease: Linear.easeNone
});

// BG Animation Setup
// .to('@target', @length, {@object})
var bg_tween = TweenMax.to('#bg-trigger', 1, {
  backgroundColor: '#7B7ABF',
  ease: Linear.easeNone
});

// YoYo Animation Setup
// .to(@target, @length, @object)
var yoyo_tween = TweenMax.to('#yoyo-animation', 1, {
  transform: 'scale(2)',
  ease: Cubic.easeOut,
  repeat: -1, // this negative value repeats the animation
  yoyo: true // make it bounce…yo!
});


// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// Scale Scene
var scale_scene = new ScrollMagic.Scene({
  triggerElement: '#scale-trigger'
})
.setTween(scale_tween);

// Background Scene
var bg_scene = new  ScrollMagic.Scene({
  triggerElement: '#bg-trigger'
})
.setTween(bg_tween);

// YoYo Scene
// var yoyo_scene = new  ScrollMagic.Scene({
//   triggerElement: '#yoyo-trigger'
// })
// .setTween(yoyo_tween);

controller.addScene([
  scale_scene,
  bg_scene,
  // yoyo_scene
]);

// SCROLL

$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave',
				duration: "200%" // this works just fine with duration 0 as well
				// However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
				// Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
			}
		});

		// get all slides
		var slides = document.querySelectorAll("section.panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i], {pushFollowers: false})
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}
	});

  // SCROLL END

// PIN Scroll
$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    // animate to second panel
    .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
    .to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
    .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
    // animate to third panel
    .to("#slideContainer", 0.5, {z: -150, delay: 1})
    .to("#slideContainer", 1,   {x: "-50%"})
    .to("#slideContainer", 0.5, {z: 0})
    // animate to forth panel
    .to("#slideContainer", 0.5, {z: -150, delay: 1})
    .to("#slideContainer", 1,   {x: "-75%"})
    .to("#slideContainer", 0.5, {z: 0});

  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "500%"
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addTo(controller);
});


// PARALLAX
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// build scenes
new ScrollMagic.Scene({triggerElement: "#parallax1"})
        .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax2"})
        .setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax3"})
        .setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
        .addTo(controller);
