// on hover change cursor to pointer and show tooltip
document.getElementById("email").onmouseover = function () {
  document.getElementById("email").style.cursor = "pointer";
  document.getElementById("email").title = "Copy to clipboard";
  console.log("Copied to clipboard");
};

function copyfn() {
  // get text in paragraph with id email
  var email = document.getElementById("email").innerHTML;
  // remove first character from string
  var email = email.substring(2);
  // copy to clipboard
  navigator.clipboard.writeText(email);
  var original = document.getElementById("email").innerHTML;
  // change innerHTML of paragraph with id email to "Copied" for 500ms
  document.getElementById("email").innerHTML = "Copied";
  setTimeout(function () {
    document.getElementById("email").innerHTML = original;
  }, 500);
}
