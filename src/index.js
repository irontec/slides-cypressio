import baseConfig from './../content/config.json';

import 'reveal.js/css/reveal.css';
import 'highlight.js/styles/atom-one-dark.css'

/**
 * Select current revel.js theme
 */
import 'reveal.js/css/theme/moon.css';

//import '../reveal-irontec-theme/css/styleLight.css'

import './../content/css/index.scss';

import $ from 'jquery';

// Markdown plugin
import 'reveal.js/plugin/markdown/marked.js'
import { RevealMarkdown } from 'reveal.js/plugin/markdown/markdown';

// Speaker Notes Plugin
const RevealNotes = require("exports-loader?RevealNotes!reveal.js/plugin/notes/notes")
Reveal.removeKeyBinding(83); // remove default notes.js keybinding
Reveal.addKeyBinding({keyCode: 83, key: 'S', description: 'Speaker notes view'}, function() {
  RevealNotes.open('./notes.html'); // pass "webpacked" route
} );

// import reveal.js-menu files 
import 'reveal.js-menu/menu.css';
const RevealMenu = require("exports-loader?RevealMenu!reveal.js-menu/menu.js");

import slides from './slides-loader.js';

const $slides = $('#slides');

slides.forEach(slide => {
  if (Array.isArray(slide)) {
    $slides.append(`<section>${slide.join('')}</section>`);
   } else {
    $slides.append(slide);
   }
});

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  slideNumber: true,
  margin: 0.0,
  transition: 'slide',
  // Optional libraries used to extend on reveal.js
  ...baseConfig.options,
  menu: {
		// Specifies which side of the presentation the menu will 
		// be shown. Use 'left' or 'right'.
		side: 'left',

		// Specifies the width of the menu.
		// Can be one of the following:
		// 'normal', 'wide', 'third', 'half', 'full', or
		// any valid css length value
		width: 'normal',

		// Add slide numbers to the titles in the slide list.
		// Use 'true' or format string (same as reveal.js slide numbers)
		numbers: true,

		// Specifies which slide elements will be used for generating
		// the slide titles in the menu. The default selects the first
		// heading element found in the slide, but you can specify any
		// valid css selector and the text from the first matching
		// element will be used.
		// Note: that a section data-menu-title attribute or an element
		// with a menu-title class will take precedence over this option
		titleSelector: 'h1, h2, h3, h4, h5, h6',

		// If slides do not have a matching title, attempt to use the
		// start of the text content as the title instead
		useTextContentForMissingTitles: false,

		// Hide slides from the menu that do not have a title.
		// Set to 'true' to only list slides with titles.
		hideMissingTitles: false,

		// Adds markers to the slide titles to indicate the 
		// progress through the presentation. Set to 'false'
		// to hide the markers.
		markers: true,

		// Specify custom panels to be included in the menu, by
		// providing an array of objects with 'title', 'icon'
		// properties, and either a 'src' or 'content' property.
		custom: false,

		// Specifies the themes that will be available in the themes
		// menu panel. Set to 'true' to show the themes menu panel
		// with the default themes list. Alternatively, provide an
		// array to specify the themes to make available in the
		// themes menu panel, for example...
		// [
		//     { name: 'Black', theme: 'css/theme/black.css' },
		//     { name: 'White', theme: 'css/theme/white.css' },
		//     { name: 'League', theme: 'css/theme/league.css' }
		// ]
		themes: false,

		// Specifies the path to the default theme files. If your
		// presentation uses a different path to the standard reveal
		// layout then you need to provide this option, but only
		// when 'themes' is set to 'true'. If you provide your own 
		// list of themes or 'themes' is set to 'false' the 
		// 'themesPath' option is ignored.
		themesPath: 'css/theme/',

		// Specifies if the transitions menu panel will be shown.
		// Set to 'true' to show the transitions menu panel with
		// the default transitions list. Alternatively, provide an
		// array to specify the transitions to make available in
		// the transitions panel, for example...
		// ['None', 'Fade', 'Slide']
		transitions: false,

		// Adds a menu button to the slides to open the menu panel.
		// Set to 'false' to hide the button.
		openButton: true,

		// If 'true' allows the slide number in the presentation to
		// open the menu panel. The reveal.js slideNumber option must 
		// be displayed for this to take effect
		openSlideNumber: true,

		// If true allows the user to open and navigate the menu using
		// the keyboard. Standard keyboard interaction with reveal
		// will be disabled while the menu is open.
		keyboard: true,

		// Normally the menu will close on user actions such as
		// selecting a menu item, or clicking the presentation area.
		// If 'true', the sticky option will leave the menu open
		// until it is explicitly closed, that is, using the close
		// button or pressing the ESC or m key (when the keyboard 
		// interaction option is enabled).
		sticky: true,

		// If 'true' standard menu items will be automatically opened
		// when navigating using the keyboard. Note: this only takes 
		// effect when both the 'keyboard' and 'sticky' options are enabled.
		autoOpen: true,

		// If 'true' the menu will not be created until it is explicitly
		// requested by calling RevealMenu.init(). Note this will delay
		// the creation of all menu panels, including custom panels, and
		// the menu button.
		delayInit: false,

		// If 'true' the menu will be shown when the menu is initialised.
		openOnInit: false,

		// By default the menu will load it's own font-awesome library
		// icons. If your presentation needs to load a different
		// font-awesome library the 'loadIcons' option can be set to false
		// and the menu will not attempt to load the font-awesome library.
		loadIcons: true
	},


});

RevealMarkdown.initialize();
console.log(JSON.stringify(RevealMenu, null,2));
RevealMenu.initialize();
hljs.initHighlightingOnLoad();
