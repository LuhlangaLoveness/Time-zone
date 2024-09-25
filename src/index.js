function showSelectedCity(event) {
  if (event.target.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, Do MMMM, YYYY H:m");
    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let selectCity = document.querySelector("#select-box-cities");
selectCity = addEventListener("change", showSelectedCity);
