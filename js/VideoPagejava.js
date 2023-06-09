//初始化视频集合
var videojs=33;
var bairijs=6;
var zouxiujs=1
var MyVideo=[];
var v=1;
for(let i = 1;i<=zouxiujs;i++){
    MyVideo[v++]='../video/zouxiu'+i+'.mov';
}
for(let i = 1;i<=videojs;i++){
    MyVideo[v++]='../video/video'+i+'.mov';
}
for(let i = 1;i<=bairijs;i++){
    MyVideo[v++]='../video/bairi'+i+'.mov';
}
var ji = 1;
var fst = document.createElement('li');
fst.innerText='走秀特辑：第'+1+'集';
fst.setAttribute('id',MyVideo[1]);

fst.onclick=ChangeVideo;
$('#listwindowid')[0].appendChild(fst);

var ji=2;
for(let i=2;i<=zouxiujs;i++){
    var fst = document.createElement('li');
    fst.setAttribute('id',MyVideo[i]);
    fst.innerText='走秀特辑：第'+ji+'集';
    fst.onclick=ChangeVideo;
    $('#listwindowid')[0].appendChild(fst);
}
var ji=1;
for(let i=zouxiujs+1;i<=videojs+zouxiujs;i++){
    var fst = document.createElement('li');
    fst.innerText='平日活动：第'+ji+'集';
    ji++;
    fst.setAttribute('id',MyVideo[i]);
    fst.onclick=ChangeVideo;
    $('#listwindowid')[0].appendChild(fst);
}
var ji=1;
for(let i=videojs+zouxiujs+1;i<=videojs+zouxiujs+bairijs;i++){
    var fst = document.createElement('li');
    fst.innerText='百日特辑：第'+ji+'集';
    ji++;
    fst.setAttribute('id',MyVideo[i]);
    fst.onclick=ChangeVideo;
    $('#listwindowid')[0].appendChild(fst);
}

// 点击更换视频
function ChangeVideo(){
    var videowd = $('.videowindow video')[0];
    videowd.setAttribute('src',this.id);
    $('#smtitle')[0].innerText=this.innerText;
    $('.changgecolor').removeClass('changgecolor');
    $(this).toggleClass('changgecolor');
}

$('.videowindow video')[0].setAttribute('src','../video/zouxiu1.MOV');
$('#smtitle')[0].innerText='走秀特辑：第1集'

var imgg = document.createElement('img');
imgg.setAttribute('src','../img/JT.jpg');
$('.listwindow #listwindowid>li').prepend(imgg);

// var liinlistwindow = document.querySelectorAll('#listwindowulid li');
// // liinlistwindow.forEach(function(){
    
// // })
// for(let i=0;i<liinlistwindow.length;i++){
//     liinlistwindow[i].addEventListener('click',ChangeVideo);
// }
