console.log("script.js connected!");
document.addEventListener("DOMContentLoaded", () => {
  const answers = document.querySelectorAll(".answer");

  answers.forEach(button => {
    button.addEventListener("click", () => {
      const result = button.dataset.result; // get the matching hero
      showResult(result);
    });
  });

  function showResult(hero) {
    // Hide all question blocks
    document.querySelectorAll(".question-block").forEach(q => {
      q.style.display = "none";
    });

    // Show result section
    const resultsDiv = document.getElementById("results");
    const finalResult = document.getElementById("final-result");

    resultsDiv.style.display = "block";
    finalResult.textContent = `You are ${hero}! 💥`;
  }
});


