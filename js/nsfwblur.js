function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");

  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        console.log("Hello world!");
        document.getElementById("nsfwimg1").style.filter = "blur(0px)";
        document.getElementById("nsfwimg2").style.filter = "blur(0px)";
        document.getElementById("nsfwimg3").style.filter = "blur(0px)";
    } else {
        console.log("hatsus not");
        document.getElementById("nsfwimg1").style.filter = "blur(25px)";
        document.getElementById("nsfwimg2").style.filter = "blur(25px)";
        document.getElementById("nsfwimg3").style.filter = "blur(25px)";
    }
  }