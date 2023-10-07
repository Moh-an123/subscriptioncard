let c1=document.getElementById('card1');
let c2=document.getElementById('card2');
let c3=document.getElementById('card3');
let c4;
c1.addEventListener('click',()=>{
  c4=c2.innerHTML;
  c2.innerHTML=c1.innerHTML;
  c1.innerHTML=c4;
});
c3.addEventListener('click',()=>{
    c4=c2.innerHTML;
    c2.innerHTML=c3.innerHTML;
    c3.innerHTML=c4;
  });
  