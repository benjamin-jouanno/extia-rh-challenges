function submit() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (email === "ontVeuxUneAugmentation@extia.com" && password === "auMoins5euros") {
        window.location.href = "./doNotOpen/index.html";
    } else {
        alert("try again... Looser !!!");
    }
  }