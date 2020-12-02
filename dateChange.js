let showIt = document.getElementById('root');
showIt.setAttribute("class","NumClass01");
let theBigDay = new Date();
showIt.innerHTML = theBigDay.getUTCSeconds();
showIt.setAttribute("style","background-color:white;color:black;font-size:50px;text-align:center;");
if(theBigDay.getUTCSeconds() == 10){
  showIt.setAttribute("style","background-color:purple;color:white;font-size:50px;text-align:center;");
  showIt.innerHTML = theBigDay.getUTCSeconds();
  window.onload = window.assign("/public/index.html") + showIt.innerHTML;
}
else if(theBigDay.getUTCSeconds() == 15){
  showIt.setAttribute("style","background-color:black;color:yellow;font-size:50px;text-align:center;");
  showIt.innerHTML = theBigDay.getUTCSeconds();
  window.onload = window.assign("/public/index.html") + showIt.innerHTML;
}
else if(theBigDay.getUTCSeconds() == 20){
  showIt.setAttribute("style","background-color:black;color:yellow;font-size:50px;text-align:center;");
  showIt.innerHTML = theBigDay.getUTCSeconds();
  window.onload = window.assign("/public/index.html") + showIt.innerHTML;
}
else if(theBigDay.getUTCSeconds() == 25){
  showIt.setAttribute("style","background-color:black;color:yellow;font-size:50px;text-align:center;");
  showIt.innerHTML = theBigDay.getUTCSeconds();
  window.onload = window.assign("/public/index.html") + showIt.innerHTML;
}
else if(theBigDay.getUTCSeconds() == 30){
  showIt.setAttribute("style","background-color:black;color:white;font-size:50px;text-align:center;");
  showIt.innerHTML = theBigDay.getUTCSeconds();
  window.onload = window.assign("/public/index.html") + showIt.innerHTML;
}
else if(theBigDay.getUTCSeconds() == 35){
  showIt.setAttribute("style","background-color:black;color:aqua;font-size:50px;text-align:center;");
  showIt.innerHTML = theBigDay.getUTCSeconds();
  window.onload = window.assign("/public/index.html") + showIt.innerHTML;
}