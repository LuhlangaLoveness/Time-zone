function showSelectedCity(event) {
  if (event.target.value > 0) {
    alert(event.target.value);
  }
  if (event.target.value === paris) {
    alert("");
  }
  if (event.target.value === toyko) {
    alert("");
  }
  if (event.target.value === sydney) {
    alert("");
  }
}
let selectCity = document.querySelector("#select-box-cities");
selectCity = addEventListener("change", showSelectedCity);

function showCurrentTime(event) {
  alert("HEllo");
}
let currentTime = moment().tz(value).format("dddd, Do MMMM, YYYY H:m");
