# D3 - Data Driven Documents

### Introduction
* D3 is a library built on JavaScript, HTML and CSS3. (D3 is not a language on its own).
* As the name states, D3 is very helful when workin with (and especially visualizing) data-heavy documents.
* Visuals can range from static images to dynamic animations.
* D3 is an open source and [highly documented](https://d3js.org/) library.

### Getting Started
1. Add D3 library to your html document with the `<script>` tag
  * CDN: `<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>`
  * Download the code and include it in your files
2. Create an SVG canvas
  * D3 visuals use SVG ( __S__ calable __ V__ector __I__ mages)
  * Just like a painter, you need a canvas to create your drawing on.


        var canvas = d3.select('body')
                        .append('svg')
                        .attr('width',1366)
                        .attr('height',768)


### Common pitfalls
* D3 selectors rely on DOM elements. Make sure that all the DOM elements are loaded before the script is executed.
  * __on-page-script:__ Add script at the bottom of the page
  * __linked file _(preferred)_:__ Wrap your script in an event listener
    `document.addEventListener("DOMContentLoaded", function(e) { // Your D3 code });`
* Any SVG you create will be drawn on a canvas: If the content of the SVG surpasses the canvas, it will be cut off.
