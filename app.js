function convertTemp() {
  let celsius = document.getElementById("celsiusInput").value;

  let fahrenheit = (celsius * 9) / 5 + 32;

  if (celsius > 35) {
    document.body.style.backgroundColor = "rgb(212, 54, 54)";
  } else if (celsius < 10) {
    document.body.style.backgroundColor = "rgb(90, 129, 230)";
  } else {
    document.body.style.backgroundColor = " rgb(17, 227, 17)";
  }
}
