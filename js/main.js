"use strict";

var Handlebars = require("hbsfy/runtime");
var entryTemplate = require('../templates/article/article.hbs');
var entryData = require('../templates/article/article-data.js');

var ssTemplate = require('../templates/article/ss.hbs');
var solarSystemData = require('../templates/article/ss-data.js');


// Register a partial
Handlebars.registerPartial("tagLine", require('../templates/partials/tagline.hbs'));

// Create a custome helper that we can call inside an expression in
// our markup
Handlebars.registerHelper("inc", function(value) {
  return parseInt(value) + 1;
});

Handlebars.registerHelper("which", function(value) {
  return parseInt(value) + 1;
});

// attach our rendered HTML to the DOM
$("#entryOutput").append(entryTemplate(entryData));


// attach our rendered HTML to the DOM

$(function() {
  $("#ssPop").click(function() {
    $("#ssOutput").append(ssTemplate(solarSystemData));
    $("#ssPop").prop('disabled', true);
  });
});

