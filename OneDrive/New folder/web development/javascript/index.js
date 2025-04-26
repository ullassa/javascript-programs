function rolldice(){
    const numofdice=document.getElementById("numofdice").value;
    const diceresult=document.getElementById("diceresult");
    const diceimages=document.getElementById("diceimages");
   // const numofdice=document.getElementById(diceresult);


   const values=[];
   const images=[];

   for(let i=0;i<numofdice;i++){
    const value=Math.floor(Math.random()*6)+1;
    // console.log(value);
    values.push(value);
    images.push(`<img src="dice-images/${value}.png" alt="dice ${value}" style="width:50px; height: 40px;">`);
   }
//    console.log(values);
diceresult.textContent=`dice:${values.join(`, `)}`;
diceimages.innerHTML=images.join(``);
}