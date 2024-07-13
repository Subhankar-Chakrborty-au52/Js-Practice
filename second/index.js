// const buttons = document.getElementsByClassName("btn");
// const resultDiv = document.getElementById("result");

// const finalResult = () => {
//   button.addEventListener("click", function () {
//     resultDiv.textContent = "Button was clicked here is the result";
//   });
// };

// finalResult();

const buttons = document.getElementsByClassName("btn"); // No dot in the class name
const resultDiv = document.getElementById("result");

const finalResult = () => {
  const button = buttons[0]; // Select the first button in the HTMLCollection
  button.addEventListener("click", function () {
    resultDiv.innerHTML =
      "<strong>Button was clicked!</strong> Here is the result.";
  });
};

// Call the function to add the event listener
finalResult();
