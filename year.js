// Display current year dynamically
function updateYear() {
  let dateElement = document.getElementById("year");

  if (dateElement) {
    dateElement.innerText = new Date().getFullYear();
  } else {
    console.error("Error: Element with referenced ID not found in the document.");
  }
}

updateYear();
