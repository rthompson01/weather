"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router()
// }
var $ = require('jquery')
var key = '05f8f85305996bad2f4729ca8dc52c1d'

var GPS = new Promise((res, rej) => {
    // if gps successful, resolve with coordinates
    // else reject with error
    navigator.geolocation.getCurrentPosition(
        (gpsData) => res({ lat: gpsData.coords.latitude, lon: gpsData.coords.longitude }),
        (error) => rej(error.message)
    )
})

GPS.then((ll) => {
    var url = `https://api.forecast.io/forecast/${key}/${ll.lat},${ll.lon}?callback=?`
    var x = $.getJSON(url).then((r) => console.log(r))
})

require("ti.forecast.io");
var forecast = new ForecastIO({
    API_KEY: 'API_KEY'
});

var condition = forecast.getCurrentConditions(lat, lon, onSuccessCallback, onErrorCallback);

function onSuccessCallback(weather) {
  weather.getSummary();
};

function onErrorCallback(e) {
  // Handle your errors in here
};
