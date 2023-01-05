for(i=1;i<=15;i++){
    console.log("blur");
    document.getElementById("nsfwimg"+i).style.filter = "blur(25px)";
}

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");

  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        //15 because there are 15 images on html code. change if images count changes
        for(i=1;i<=15;i++){
            document.getElementById("nsfwimg"+i).style.filter = "blur(0px)";
        }
    } else {
        for(i=1;i<=15;i++){
            document.getElementById("nsfwimg"+i).style.filter = "blur(25px)";
        }
    }
  }