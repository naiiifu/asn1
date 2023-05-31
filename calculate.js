
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

// Get elements by tag name and update their content
var elementsByTagName = document.getElementsByTagName("tagName");
for (var i = 0; i < elementsByTagName.length; i++) {
    var element = elementsByTagName[i];
    // Update the content of the element
    element.textContent = "New content";
}

// Get elements by name and update their content
var elementsByName = document.getElementsByName("name");
for (var i = 0; i < elementsByName.length; i++) {
    var element = elementsByName[i];
    // Update the content of the element
    element.textContent = "New content";
}


// Add event handlers for "Enter" key press on lower bound text boxes
var lowerBoundInputs = document.getElementsByName("lowerBound");

for (var i = 0; i < lowerBoundInputs.length; i++) {
  lowerBoundInputs[i].addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      updateHistograms();
    }
  });
}

// Function to update histograms based on the lower bound values
function updateHistograms() {
  // Get the lower bound values from the input fields
  var lowerBounds = {
    "Max": parseFloat(document.getElementsByName("Max")[0].value),
    "A+": parseFloat(document.getElementsByName("A+")[0].value),
    "A": parseFloat(document.getElementsByName("A")[0].value),
    "A-": parseFloat(document.getElementsByName("A-")[0].value),
    "B+": parseFloat(document.getElementsByName("B+")[0].value),
    "B": parseFloat(document.getElementsByName("B")[0].value),
    "B-": parseFloat(document.getElementsByName("B-")[0].value),
    "C+": parseFloat(document.getElementsByName("C+")[0].value),
    "C": parseFloat(document.getElementsByName("C")[0].value),
    "C-": parseFloat(document.getElementsByName("C-")[0].value),
    "D": parseFloat(document.getElementsByName("D")[0].value),
    "F": parseFloat(document.getElementsByName("F")[0].value)
  };

  // Update the histogram widths based on the lower bounds
  for (var grade in lowerBounds) {
    var histogram = document.getElementById("h" + grade);
    var width = (lowerBounds[grade] / lowerBounds["Max"]) * 100 + "%";
    histogram.style.width = width;
  }
}

// Add event handler for the "New Grade" input field
var newGradeInput = document.getElementById("newGradeInput");
newGradeInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    press();
  }
});

// Function to handle "New Grade" input field blur event
function press() {
  // Get the value from the new grade input field
  var newGrade = document.getElementById("newGradeInput").value;

  // Display the new grade in the "newgrade" element
  document.getElementById("newgrade").textContent = newGrade;
}


function handleKeyPress(event, grade) {
    if (event.keyCode === 13) { // 13 is the key code for Enter
        updateGrade(grade);
    }
}

function updateGrade(grade) {
    var inputElement = document.getElementsByName(grade)[0];
    var newGrade = parseFloat(inputElement.value).toFixed(2);

    // Display the new grade in the corresponding histogram element
    var histogramElement = document.getElementById("h" + grade);
    histogramElement.innerHTML = '<div class="histogram">' + newGrade + '</div>';

    // Update the new grade value in the "newgrade" element
    document.getElementById("newgrade").textContent = newGrade;
}
