function ascii_to_hexa(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }

function submit() {
    var password = document.getElementById("password").value;
    if (ascii_to_hexa(password) === "416c6c657a206c274f4d") {
        window.location.href = "./doNotOpen/index.html";
    } else {
        alert("try again... Looser !!!");
    }
  }