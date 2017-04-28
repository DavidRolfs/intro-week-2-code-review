//back-end
var branch = function(q1, q2, q3, q4, q5){
  if(q1 === ""|| q2 === "" || q3 === "" || q4 === "" || q5 === ""){
    alert("please answer every question");
  }else{
    if(q3 === "1"){
      return "#cssDesign";
    } else if(q1==="1" && q2==="2"|| q1==="1" && q2==="3" || q1==="2" && q2==="2"){
        return "#rubyRails"
    } else{
        return "#phpReact";
    }
  }
};


//front-end
$(document).ready(function(){
  $("form#track").submit(function(event){
    event.preventDefault();

    //store user inputs in variables
    var q1 = $("#question1").val();
    var q2 = $("#question2").val();
    var q3 = $("#question3").val();
    var q4 = $("#question4").val();
    var q5 = $("#question5").val();
    var nameInput = $("#name").val();

    //hides display class eachtime submit button is hit
    var display = $(".display");
    $(display).hide();

    //runs users input in branch function and stores in a variable named result
    var result = branch(q1, q2, q3, q4, q5);

    //displays result on webpage
    $(result).show();
    //add users inputed name to webpage
    $(".name").text(nameInput);

  });
});
