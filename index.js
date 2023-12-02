let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Handle keyboard events
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key.match(/[0-9+\-*/.=]|Enter/)) {
        if (key === 'Enter') {
            calculateResult();
        } else {
            appendToDisplay(key);
        }
    }
});
// Update the JavaScript to handle button presses for operator and equals buttons
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key.match(/[0-9]|[\+\-\*/.=]|Enter/)) {
        if (key === 'Enter') {
            calculateResult();
        } else if (key.match(/[\+\-\*/]/)) {
            // Handle operator buttons
            appendToDisplay(key);
            const operatorButton = document.querySelector(`.operator-btn[data-operator="${key}"]`);
            if (operatorButton) {
                operatorButton.classList.add('active');
                setTimeout(() => {
                    operatorButton.classList.remove('active');
                }, 100);
            }
        } else {
            appendToDisplay(key);
        }
    }
});

function appendToDisplay(value) {
    display.value += value;
    if (value.match(/[\+\-\*/]/)) {
        const operatorButton = document.querySelector(`.operator-btn[data-operator="${value}"]`);
        if (operatorButton) {
            operatorButton.classList.add('active');
            setTimeout(() => {
                operatorButton.classList.remove('active');
            }, 100);
        }
    }
}

function togglePlusMinus() {
    let currentValue = display.value;
    if (currentValue !== '' && currentValue !== 'Error') {
        display.value = (parseFloat(currentValue) * -1).toString();
    }
}

























// let display = document.getElementById("display");

// function appendToDisplay(value) {
//   display.value += value;
//   if (value.match(/[\+\-\*/]/)) {
//     const operatorButton = document.querySelector(
//       .operator-btn[data-operator="${value}"]
//     );
//     if (operatorButton) {
//       operatorButton.classList.add("active");
//       setTimeout(() => {
//         operatorButton.classList.remove("active");
//       }, 100);
//     }
//   }
// }

// function clearDisplay() {
//   display.value = "";
// }

// function calculateResult() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

// // Handle keyboard events
// document.addEventListener("keydown", function (event) {
//   const key = event.key;
//   if (key.match(/[0-9+\-*/.=]|Enter/)) {
//     if (key === "Enter") {
//       calculateResult();
//     } else {
//       appendToDisplay(key);
//     }
//   }
// });

// // Update the JavaScript to handle button presses for operator and equals buttons
// document.addEventListener("keydown", function (event) {
//   const key = event.key;
//   if (key.match(/[0-9]|[\+\-\*/.=]|Enter/)) {
//     if (key === "Enter") {
//       calculateResult();
//     } else if (key.match(/[\+\-\*/]/)) {
//       // Handle operator buttons
//       appendToDisplay(key);
//       const operatorButton = document.querySelector(
//         .operator-btn[data-operator="${key}"]
//       );
//       if (operatorButton) {
//         operatorButton.classList.add("active");
//         setTimeout(() => {
//           operatorButton.classList.remove("active");
//         }, 100);
//       }
//     } else {
//       appendToDisplay(key);
//     }
//   }
// });

// function togglePlusMinus() {
//   let currentValue = display.value;
//   if (currentValue !== "" && currentValue !== "Error") {
//     display.value = (parseFloat(currentValue) * -1).toString();
//   }
// }

















