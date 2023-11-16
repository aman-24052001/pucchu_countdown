// Set the date we're counting down to
var countDownDate = new Date("3001-03-26T00:00:00").getTime();


// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time remaining
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("daysContainer").innerHTML = "EXPIRED";
    }
}, 1000);

// Format time to display leading zeros
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}