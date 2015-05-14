Art Gallery
===========

TODO
-----

* fix overlapping animations
* integrate with JC's template
* pop out the images
* responsive design
* comments

Project Introduction
---------------------

###NDA

* proprietary
* no personal identification
* no form of ownership
* BayCrest hospital
* potential prize money
* research grants(?)

###Art On the Brain

* how does artwork affect mental abilities
* high-functioning dimentia patients
* life-long learning through artwork
* simulating a museum to help with learning
* museum activities

###Details

* (AOTB): Accessibility Certified
* Voice recordings

###Activities

* Word search game
* Puzzle game
* Guided questions
	* reflection
	* feelings
	* memorable
* Can developers make their own games?

2015-05-09
----------

###JC

* creating template from scratch
* grab default WordPress template
* cutting up the elements and making the mockup
* layering, linking, etc.
* Version control?
* Cloud access to site?

###Andy

* JavaScript animations
	* things fly in from the sides
	* makes it feel like a pamphlet
	* feeling of what is in forefront
	* Paintings are top priority

* Maybe a plus button
* Slide gallery to the left
* `Next` button to load a new page?
* Reduce number of refreshes
* Zoom-in animation (How to go from `AG` to `A`)
* dev platform/sandbox instead of git
* Target Audience isn't always grandparents (50-70)
	* Prior to having dimentia
	* High tech

* My goal: making a carousel CMS for the images
	* simple way to add art
	* May install / play around with
	* Change PHP to work with template
	* Each activity is a plugin
	* Circle border around photo

----------

2015-05-11
----------

* Initially
	* load 2 images at a time (HTML)
		* 1 off-screen
* `rightButton.onClick` (JavaScript)
	* load new image
	* animate 3 pictures moving leftward, bringing the new image in on the right
		* CSS3 Animation
	* remove first picture
* `leftButton.onClick` (JavaScript)
	* load new image
	* animate 3 pictures moving *right*ward, bringing the previous image in on the *left*
		* CSS3 Animation
	* remove first picture
* CMS behind these

[swipe?](http://sarasoueidan.com/demos/s-gallery/#)

Only if buttons work

Plugins

* potentially title that flows with each
* think: feature photo
* social engagement?
	* commenting platform only between friends