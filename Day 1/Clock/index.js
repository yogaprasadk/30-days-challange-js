// seconds
const sc = document.querySelector("#sc");
// minutes
const mn = document.querySelector("#mn");
// hour
const hr = document.querySelector("#hr");

const deg = 6;
setInterval(() => {
  // date
  let day = new Date();
  // milliseconds
  let ms = day.getMilliseconds() * deg;
  // seconds
  let ss = day.getSeconds() * deg + ms / 1000;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let mm = day.getMinutes() * deg;
  mn.style.transform = `rotateZ(${mm}deg)`;

  let hs = day.getHours() * 30;
  hr.style.transform = `rotateZ(${hs}deg)`;
});
