var name = document.querySelector("#name");
var email = document.querySelector("#email");
var url = document.querySelector("#url");
var imgurl = document.querySelector("#url2");
var gender = document.getElementsByName("gender");
var check = document.getElementsByName("check");

var checkbox = document.querySelector(".b");
var submit = document.querySelector("#red");
var clear = document.querySelector("#green");
var card = document.querySelector(".card");
var p1 = document.querySelector("#a1");
var p2 = document.querySelector("#b2");
var p3 = document.querySelector("#c3");
var p4 = document.querySelector("#d4");
var p5 = document.querySelector("#e5");
var btn = document.querySelector("#red");
var enroll = document.querySelector("#enroll");

function now() {
  btn.addEventListener("click", function () {
    if (document.querySelector("input").value.length == 0) {
      alert("Fill all the Fields");
    } else {
      for (i = 0; i < gender.length; i++) {
        if (gender[i].checked)
          var result = (document.querySelector("#c3").innerHTML =
            gender[i].value);
      }

      document.querySelector("#right").innerHTML += `<div class="card">
         <div class="photo"><img src="${
           document.querySelector("#url2").value
         }" alt=""></div>
         <p class="a" id="a1">Name: ${
           document.querySelector("#name").value
         }</p>
         <p class="a" id="b2">Email:${
           document.querySelector("#email").value
         }</p>
         <p class="a" id="c3">Website: ${
           document.querySelector("#url").value
         }</p>
         <p class="a" id="d4">Gender:  ${result}</p>
         <p class="a" id="e5">Enrollment No:  ${
           document.querySelector("#enroll").value
         }</p>
     </div>`;

      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#url").value = "";
      document.querySelector("#url2").value = "";
      document.getElementsByName("gender").value = "";
      document.querySelector("#enroll").value = "";
    }
  });
}

function clearfun(){
    clear.addEventListener("click", function(){
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#url").value = "";
        document.querySelector("#url2").value = "";
        document.getElementsByName("gender").value = "";
        document.querySelector("#enroll").value = "";
    })
}

now();
clearfun();
Footer
