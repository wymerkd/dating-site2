$(document).ready(function(){
  $("form#matching").submit(function(event) {
    var age = $("input:radio[name=age]:checked").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var hair = $("input:radio[name=hair]:checked").val();
    $(".hide").hide();

    if (age === '1' && gender === 'male' && hair === "light") {
      $("#a").show();
    }
    if (age === '1' && gender === 'male' && hair === "dark") {
      $("#b").show();
    }
    if (age === '1' && gender === 'female' && hair === "light") {
      $("#c").show();
    }
    if (age === '1' && gender === 'female' && hair === "dark") {
      $("#d").show();
    }
    if (age === '2' && gender === 'male' && hair === "light") {
      $("#e").show();
    }
    if (age === '2' && gender === 'male' && hair === "dark") {
      $("#f").show();
    }
    if (age === '2' && gender === 'female' && hair === "light") {
      $("#g").show();
    }
    if (age === '2' && gender === 'female' && hair === "dark") {
      $("#h").show();
    }

    event.preventDefault();
  });
});
