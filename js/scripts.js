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
    // alert("works");
    var q1 = $("#question1").val();
    var q2 = $("#question2").val();
    var q3 = $("#question3").val();
    var q4 = $("#question4").val();
    var q5 = $("#question5").val();
    //alert(q1 + q2 + q3 + q4 + q5);

    var ruby=$("#rubyRails");
    var css=$("#cssDesign");
    var phpReact=$("#phpReact");

    $(ruby).hide();
    $(css).hide();
    $(phpReact).hide();

    var result = branch(q1, q2, q3, q4, q5);

    $(result).show();

  });
});
