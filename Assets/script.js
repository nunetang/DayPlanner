// allow html to load completely before running any script

$(document).ready(function () {
    // use moment object to grab & format the current date on user's device
    var now = moment().format('dddd, MMM Do YYYY');
        
    $("#today").text(now);
})