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
import 'reveal.js/plugin/markdown/marked.js'
import { RevealMarkdown } from 'reveal.js/plugin/markdown/markdown';

const RevealNotes = require("exports-loader?RevealNotes!reveal.js/plugin/notes/notes")

// remove default notes.js keybinding
Reveal.removeKeyBinding(83);
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
  ...baseConfig.options
});



RevealMarkdown.initialize();
hljs.initHighlightingOnLoad();
