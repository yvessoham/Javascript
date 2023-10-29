
(() => {
  let score = 0;
  let multiclick = 1;
  let coutmultiplicateurx5 = 10;
  let click = 0;
  let scautoclicker = 50;
  let coutautoclicker = 100;
  let timeoutautoclicker = false;
  let coutsweatrick = 1000;
  const min = -5000;
  const max = 5000;

  const cookiescore = document.getElementById("score");
  const clickbutton = document.getElementById("pumpkin");
  const pointParClick = document.getElementById("pointParClick");

  /*---formatage nombres - Millions/Billions---*/
  function formatNumber(score) {
    if (score >= 1e9) {
      return (score / 1e12).toFixed(3) + " trillions";
    } else if (score >= 1e12) {
      return (score / 1e9).toFixed(3) + " billions";
    } else if (score >= 1e6) {
      return (score / 1e6).toFixed(3) + " millions";
    } else {
      return score.toString();
    }
  }

  function updateCookiescore() {
    const formattedScore = formatNumber(score);
    cookiescore.textContent = formattedScore;
  }

  /*--- pumpkin clicker */

  clickbutton.addEventListener("click", function () {
    score += multiclick;
    updateCookiescore();
    click = 1;
    pointParClick.textContent = "+ " + click * multiclick + " pumpkin(s)/click";

    if (score < coutmultiplicateurx5 * multiclick) {
      document.getElementById("multi5").disabled = true;
    } else {
      document.getElementById("multi5").disabled = false;
    }

    if (score < coutDante) {
      document.getElementById("dante").disabled = true;
    } else {
      document.getElementById("dante").disabled = false;
    }

    if (score < coutautoclicker) {
      document.getElementById("auto").disabled = true;
    } else {
      document.getElementById("auto").disabled = false;
    }

    if (score < coutsweatrick) {
      document.getElementById("bonus").disabled = true;
    } else {
      document.getElementById("bonus").disabled = false;
    }
  });

  /*---Multiplicateurs---*/
  document.querySelector("#multi5 .cout").textContent =
    "Cost " + 10 * multiclick + " points - " + multiclick + " Pumpkins/click";

  document.querySelector("#multi5").addEventListener("click", multiplicateurx5);

  function multiplicateurx5() {
    if (score >= coutmultiplicateurx5 * multiclick) {
      score -= coutmultiplicateurx5 * multiclick;
      multiclick++;
      updateCookiescore();
      document.querySelector("#multi5 .cout").textContent =
        "Cost " +
        10 * multiclick +
        " points - " +
        multiclick +
        " Pumpkins/click";
      document.getElementById("multi5").disabled = false;
    } else {
      document.getElementById("multi5").disabled = true;
    }
  }

  /*---Dante---*/
  document.querySelector("#dante").addEventListener("click", btnDante);
  let coutDante = 150;
  let SupCookies = 200;

  document.querySelector("#dante .cout").textContent =
    "Cost: " + coutDante + " ----  +" + SupCookies + " Pumpkins";

  function btnDante() {
    if (score < coutDante) {
      document.getElementById("dante").disabled = true;
    } else {
      document.getElementById("dante").disabled = false;
      score -= coutDante;
      score += SupCookies;

      coutDante *= 2;
      SupCookies *= 2.5;

      updateCookiescore();
      document.querySelector("#dante .cout").textContent =
        "Cost: " + coutDante + " - + " + SupCookies + " Cookies";
    }
  }

  /* -- Autoclicker **/

  document.querySelector("#auto").addEventListener("click", autoclicker);
  function autoclicker() {
    if (score >= coutautoclicker) {
      score -= coutautoclicker;

      cookiescore.textContent = score;
      coutautoclicker = coutautoclicker * 1.5;
      updateCookiescore();

      document.querySelector("#auto .cout").innerHTML =
        "Auto-clicker actif pendant <div id='countdown'>5s</div> ";
      timeoutautoclicker = true;

      setTimeout(function () {
        document.querySelector("#auto .cout").textContent =
          "Cost: " + coutautoclicker;
        timeoutautoclicker = false;
      }, 5000);
      scautoclicker++;
      setInterval(function () {
        if (timeoutautoclicker) {
          score += scautoclicker;
          cookiescore.textContent = score;
        }
      }, 1000);
      let timeleft = 5;
      let downloadTimer = setInterval(function () {
        if (timeleft > 0) {
          document.getElementById("countdown").innerHTML = timeleft;
        }
        timeleft -= 1;
      }, 1000);
      return downloadTimer;
    }
  }

  /** -- Sweats or Tricks -- */

  document.querySelector("#bonus").addEventListener("click", sweatrick);

  function sweatrick() {
    if (score >= coutsweatrick) {
      document.getElementById("bonus").disabled = false;

      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      alert(randomNumber);

      if (score - coutsweatrick + randomNumber < 0) {
        score = 0;
      } else {
        score -= coutsweatrick;
        score += randomNumber;
      }
    } else {
      document.getElementById("bonus").disabled = true;
    }
    cookiescore.textContent = score;
  }
})();

