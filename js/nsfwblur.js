function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");

    var img = document.getElementsByClassName("nsfwimg");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        console.log("Hello world!");
        document.getElementsByClassName("img").style.filter = "blur(0px)";
    } else {
        console.log("hatsus not");
        document.getElementsByClassName("img").style.filter = "blur(25px)";
    }
  }