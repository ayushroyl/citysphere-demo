// Countdown Timer
const countdown = () => {
    const launchDate = new Date("2025-01-01T00:00:00").getTime(); // Set your launch date here
    const now = new Date().getTime();
    const gap = launchDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (gap < 0) {
        document.getElementById("countdown").innerHTML = "<p>We're Live!</p>";
    }
};

setInterval(countdown, 1000);
