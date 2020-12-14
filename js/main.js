// HIGHCHARTS //

Highcharts.chart('chart', {

    title: {
        text: 'Median Salaries For Science & Engineering Degree-Holders'
    },

    // subtitle: {
    //     text: 'Source: https://ncses.nsf.gov/pubs/nsb20198/demographic-trends-of-the-s-e-workforce#women-in-the-s-e-workforce'
    // },

    yAxis: {
        title: {
            text: 'Pay (Dollars)'
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


// SCALE AND COLOR CHANGE //
var scale_tween = TweenMax.to('#scale-animation', 1, {
  transform: 'scale(.90)',
  ease: Linear.easeNone
});

var bg_tween = TweenMax.to('#bg-trigger', 1, {
  backgroundColor: '#d6fbff',
  // the color it changes to^
  ease: Linear.easeNone
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

controller.addScene([
  scale_scene,
  bg_scene,
]);
// SCALE AND COLOR CHANGE END //



// UP SCROLL //

$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave',
				duration: "200%"
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

// UP SCROLL END //
// http://scrollmagic.io/examples/basic/section_wipes_natural.html //


// SIDE SCROLL //
$(function () { // wait for document ready

  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()

    .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
    .to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
    .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space

    .to("#slideContainer", 0.5, {z: -150, delay: 1})
    .to("#slideContainer", 1,   {x: "-50%"})
    .to("#slideContainer", 0.5, {z: 0})

    .to("#slideContainer", 0.5, {z: -150, delay: 1})
    .to("#slideContainer", 1,   {x: "-75%"})
    .to("#slideContainer", 0.5, {z: 0});

  new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "500%"
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addTo(controller);
});
// SIDE SCROLL END //
// http://scrollmagic.io/examples/advanced/section_slides_manual.html


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

// PARALLAX END
// http://scrollmagic.io/examples/advanced/parallax_sections.html //
