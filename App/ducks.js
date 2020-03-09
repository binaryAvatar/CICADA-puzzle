document.addEventListener("DOMContentLoaded", function(e) {
  let k1 = document.querySelector("#img_red");
  let k2 = document.querySelector("#img_orange");
  let k3 = document.querySelector("#img_yellow");
  let k4 = document.querySelector("#img_green");
  let k5 = document.querySelector("#img_blue");
  let k6 = document.querySelector("#img_indigo");
  let k7 = document.querySelector("#img_violet");

  let hint = document.querySelector("#hint");
  let rainbow = document.querySelector("#show");
  let count = 0;
  let colors = [];

  k1.addEventListener("click", function(e) {
    if (count == 0) {
      count++;
      colors.push("RED");
      hint.innerHTML = colors;
    } else {
      count = 0;
      colors.length = 0;
      hint.innerHTML = "L-O-S-E-R";
    }
  });

  k2.addEventListener("click", function(e) {
    if (count == 1) {
      ++count;
      colors.push("ORANGE");
      hint.innerHTML = colors;
    } else {
      count = 0;
      colors.length = 0;
      hint.innerHTML = "L-O-S-E-R";
    }
  });

  k3.addEventListener("click", function(e) {
    if (count == 2) {
      ++count;
      colors.push("YELLOW");
      hint.innerHTML = colors;
    } else {
      count = 0;
      colors.length = 0;
      hint.innerHTML = "L-O-S-E-R";
    }
  });
  k4.addEventListener("click", function(e) {
    if (count == 3) {
      ++count;
      colors.push("GREEN");
      hint.innerHTML = colors;
    } else {
      count = 0;
      colors.length = 0;
      hint.innerHTML = "L-O-S-E-R";
    }
  });
  k5.addEventListener("click", function(e) {
    if (count == 4) {
      ++count;
      colors.push("BLUE");
      hint.innerHTML = colors;
    } else {
      count = 0;
      colors.length = 0;
      hint.innerHTML = "L-O-S-E-R";
    }
  });
  k6.addEventListener("click", function(e) {
    if (count == 5) {
      ++count;
      colors.push("INDIGO");
      hint.innerHTML = colors;
    } else {
      count = 0;
      colors.length = 0;
      hint.innerHTML = "L-O-S-E-R";
    }
  });

  k7.addEventListener("click", function(e) {
    if (count == 6) {
      count++;
      colors.push("VIOLET");
      hint.innerHTML = colors;

      if (colors.length == 7) {
        rainbow.style.visibility = "visible";
      }
    } else if (count < 7) {
      count = 0;
      colors.length = 0;
      hint.innerHTML = "L-O-S-E-R";
    }
  });
});
