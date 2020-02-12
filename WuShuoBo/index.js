
var index = 0;
//改变图片
function Chageimg() {
  index++;
  var a = document.getElementsByClassName("img-slide");
  if(index>a.length) index = 0;
  for (var i = 0; i <a.length;i++){
    a[i].style.display="none";
  }
  a[index].style.display = "block";
}
setInterval(Chageimg,2000);

/*

window.onload = function () {
  function time() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    if(m<10){
      return "0"+m;
    }
    if(s<10){
      return  "0"+s;
    }
    var show= document.getElementsByClassName("clock");
    show.innerHTML = h+":"+m+"s";
  }
  time();
}
*/

