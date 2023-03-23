const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonValue = button.innerText;
      if (buttonValue === "C") {
        display.value = "";
      } else if (buttonValue === "=") {
        display.value = eval(display.value);
      } else {
        display.value += buttonValue;
      }
    });
  });