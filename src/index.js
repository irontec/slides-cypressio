import baseConfig from './../content/config.json';

import 'reveal.js/css/reveal.css';
import 'highlight.js/styles/atom-one-dark.css'

/**
 * Select current revel.js theme
 */
import 'reveal.js/css/theme/moon.css';
//import '../reveal-irontec-theme/css/styleLight.css'

import './../content/css/index.scss';

// jQuery!
import $ from 'jquery';

// font-awesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

// Markdown plugin
import 'reveal.js/plugin/markdown/marked.js'
import { RevealMarkdown } from 'reveal.js/plugin/markdown/markdown';

// Speaker Notes Plugin
const RevealNotes = require("exports-loader?RevealNotes!reveal.js/plugin/notes/notes")
Reveal.removeKeyBinding(83); // remove default notes.js keybinding
Reveal.addKeyBinding({keyCode: 83, key: 'S', description: 'Speaker notes view'}, function() {
  RevealNotes.open('./notes.html'); // pass "webpacked" route
} );


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
});

RevealMarkdown.initialize();

// import reveal.js-menu files 
import 'reveal.js-menu/menu.css';
import { 
  faImages,
  faAdjust,
  faStickyNote,
  faTimes,
  faBars,
  faArrowAltCircleRight,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
library.add(faImages, faAdjust, faStickyNote, faTimes, faBars, faArrowAltCircleRight, faCheckCircle);
require("exports-loader?RevealMenu!reveal.js-menu/menu.js");


hljs.initHighlightingOnLoad();

