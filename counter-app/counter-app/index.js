const decreaseBtn=document.getElementById("decreaseBtn");
const resetbtn=document.getElementById("resetbtn");
const increaseBtn=document.getElementById("increaseBtn");

const countLabel1=document.getElementById("countLabel1");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel1.textContent=count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel1.textContent=count;
}
resetbtn.onclick = function(){
  count=0;
    countLabel1.textContent=count;
}
