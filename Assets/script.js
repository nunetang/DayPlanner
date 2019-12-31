// allow html to load completely before running any script

$(document).ready(function () {
    // use moment object to grab & format the current date on user's device
    var now = moment().format('dddd, MMM Do YYYY');
        
    $("#today").text(now);

    display();

      // set up click event for buttons using .save

      $(".save").on("click", function () {


        // getting each time block's textarea id
        var getTime = $(this).attr("data-id");
        
        // grab info in the textarea
        var comment = $("#" + getTime + "-events").val();
        
        // save info to local storage
        localStorage.setItem(getTime + "-events-info", comment);


    });

});

//get any existing data from local storage when browser is refreshed

function display(){
    var timeBlocks = ["9am-events", "10am-events", "11am-events", "12pm-events", "1pm-events", "2pm-events", "3pm-events", "4pm-events", "5pm-events"],
        timeHours = [9, 10, 11, 12, 13, 14, 15, 16, 17], /*requires military time recording to moment() docs */
        now = moment();

    // color code text fields based onpast(gray), current(red), and future(green) evenets.

    for ( var i = 0; i < 9; i++){
        //retrieving info from local storage for each time block.
        $("#" + timeBlocks[i]).val(localStorage.getItem(timeBlocks[i] + "-info"));

         // coloring past time blocks (anything before clock's current hour)...moment works from 0 to 23 like array index.

         if (timeHours[i] < now.hour()){
            $("#" + timeBlocks[i]).css("background-color", "#e0e4e8");
        // coloring current time block (the block that matches the clock's current hour)
        }else if (timeHours[i] === now.hour()) {
            $("#" + timeBlocks[i]).css("background-color", "#ff6666");
        // coloring future time blocks (anything after the clock's current hour)
        }else{
            $("#" + timeBlocks[i]).css("background-color", "#70db70");
        };
        
    };
};

    


