document.getElementById("resultForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const roll = document.getElementById("roll").value;

  // डेमो मैसेज दिखाएं – Backend API से जोड़ा जा सकता है
  const output = document.getElementById("resultOutput");
  if (roll.trim() === "123456") {
    output.innerText = "Result Found: Pass - 85%";
  } else {
    output.innerText = "Result not found. Please check the Roll Number.";
  }
});
