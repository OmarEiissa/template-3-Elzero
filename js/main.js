// The End Of The Year Date To Coundown To
let counDownDate = new Date("Dec 31, 2023 23:59:59");

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Coundown Date
  let dateDiff = counDownDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;

  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
    let time = document.querySelector(".new");
    time.innerHTML = `" Happy New Year "`;
    time.style.color = "#1787e0";
    time.style.fontWeight = "bolder";
    time.style.fontSize = "50px";
  }
}, 1000);




