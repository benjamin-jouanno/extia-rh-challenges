let counter = 0

function submit() {
    document.getElementById("count").innerHTML = counter + 1;
    if (counter == 200) {
        counter = 0;
    }
    else if (counter >= 2021) {
        window.location.href = "./doNotOpen/index.html";
    }
    counter = counter + 1;
  }