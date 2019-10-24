$(document).ready(function(){
  $("form#matching").submit(function(event) {
    var age = $("input:radio[name=age]:checked").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var hair = $("input:radio[name=hair]:checked").val();
    console.log(gender);

    event.preventDefault();
  });
});
