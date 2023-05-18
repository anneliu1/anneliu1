function showAlert() {
  alert("Hello, world!");
}

function changeFontSize() {
  var textArea = document.getElementById("text-area");
  textArea.style.fontSize = "24pt";
}

function applyStyles() {
  var textArea = document.getElementById("text-area");
  var fancyRadio = document.getElementById("fancy-radio");

  // When the user sets the "FancyShmancy" radio button, the text area will receive some styles.  
  // If they set the "BoringBetty" radio button, the styles go away.
  if (fancyRadio.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "";
    textArea.style.textDecoration = "";
  }
}

function makeTextMoo() {
  // Add "-Moo" to the last word of each sentence
  var textArea = document.getElementById("text-area");
  var text = textArea.value;

  // Capitalize the entire text
  text = text.toUpperCase();

  // Split the text into sentences
  var sentences = text.split(".");

  // Loop through the sentences and modify the last word
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].trim().split(" ");
    var lastWordIndex = words.length - 1;

    if (lastWordIndex >= 0) {
      words[lastWordIndex] += "-Moo";
    }

    sentences[i] = words.join(" ");
  }

  // Join the sentences back into text
  text = sentences.join(".");

  // Update the text area with the modified text
  textArea.value = text;
}


