function submit() {
    var email = document.getElementById("email").value;
    
    if (email) {
        window.location.href = "./doNotOpen/index.html";
    } else {
        alert("Input must be filled");
    }
  }