const number = 60;
const maxht=20;
const maxwd=20;
const mycolor=[
"#f2abe7",
"#9fa3ec",
"#86d2e1",
"#fec31e",
"lightblue",
"red",
"lightpink",
"#138f7a"];
class block{
  constructor(){
    this.clr = mycolor[Math.floor(Math.random()*mycolor.length)];
    this.ht=Math.random()*maxht;
    this.wd=Math.random()*maxwd;
    this.x=Math.random()*100;
    this.y=Math.random()*100-10;
  }

  creat() {
    // let newt = "<div class='flower' style='width:"+this.wd+"px height:"+this.ht+"px top:"+this.y+"% left:"+this.y+"%">";
    let out = document.createElement('div');
    out.className='flower';
    $(out).css({'width':this.wd+'px','height':this.ht+'px','top':this.y+'%','left':this.x+'%'});
    let zhuan=document.createElement('div');
    zhuan.className='rote';
    let yi = document.createElement('div');
    yi.className='move';
    $(yi).css({'background-color':this.clr});
    zhuan.append(yi);
    out.append(zhuan);
    $('#xuna').append(out);
  }
}

function animaition(){
  for(let i=1;i<=number;i++){
    let temp = new block();
    temp.creat();
  }
  var all=document.querySelectorAll('.flower');
  for(let i=0;i<all.length;i++){
    all[i].animate([{transform:'translate3d(20vw,100vh,0)'}],
    {
      duration:Math.random()*3000+3000,
      iterations: Infinity,
      delay: -(Math.random() * 5000) });
  }
}

animaition();