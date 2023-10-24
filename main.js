
(() => {
    let score = 0;
    let multi1 = 1;
  
    const cookiescore = document.getElementById("score");
    const clickbutton = document.getElementById("buton");
    const multipli1 = document.getElementById("multi1");
  
    clickbutton.addEventListener("click", function () {
      score += multi1;
      cookiescore.textContent = score;
    });
  })();

