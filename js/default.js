var update = function(){
  var now = new Date();
  var target = new Date(2020,7,24,0,0,0,0);
  var diff = target.getTime() - now.getTime();
  var counter = separate_time(now);
  document.getElementById('countdown').textContent =
    '東京オリンピックまであと ' +
    counter[3] + '日' +
    counter[2] + '時間' +
    counter[1] + '分' +
    counter[0] + '秒';
  refresh();
}

var refresh= function(){
  setTimeout(update, 1000);
}
update();

function getFileName() {
  
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
  opt = document.querySelector('option[value="other.index"]');
}else{
  opt = document.querySelector('option[value="index.html"]');
}
opt.selected = true;

document.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}

function setCookie(c_name,value,expiredays){
  
  var extime = new Date().getTime();
  var cltime = new Date(extime + (60*60*24*1000*expiredays));
  var exdate = cltime.toUTCString();
  
  var s="";
  s += c_name + escape(value);
  s += "; path="+ location.pathname;
  if(expiredays){
    s += "; expires=" +exdate+"; ";
  }else{
    s += "; ";
  }
  
  
  document.cookie=s;
}


function getCookie(c_name){
  var st="";
  var ed="";
  if(0 < document.cookie.length){
    
    st=document.cookie.indexOf(c_name + "=");
    if(st!=-1){
      st=st+c_name.length+1;
      ed=document.cookie.indexOf(";",st);
      if(st!=-1) ed=document.cookie.length;
      
      return unescape(document.cookie.substring(st,ed));
    }
  }
  return "";
}

var last_date = getCookie('lastDate');
if(last_date){
  document.getElementById('cookie').textContent = '前回訪れた時間:' + last_date;
}else{
  document.getElementById('cookie').textContent = 'はじめまして';
}


var current_time = new Date();
setCookie('lastDate', current_time.toString(), 7);


document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').word.value);
  return false;
