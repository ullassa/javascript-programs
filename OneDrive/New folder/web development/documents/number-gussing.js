const minnum=1;
const maxnum=100;
const answer=Math.floor(Math.random() * (maxnum-minnum +1));



let attempts=0;
let guess;
let running=true;

while(running){

guess=window.prompt(`guess a random number ${minnum}-${maxnum}`);
guess=Number(guess);
if(isNaN(guess)){
    window.alert(`enter a number`);
}else if(guess<minnum || guess>maxnum){
    window.alert(` enter a valid numbr`);4
}
else{
    attempts++;
    if(guess<answer){
        window.alert(`too low try again`);
    }else if(guess>answer){
        window.alert(`too hogh try again`);
    }else{
        window.alert(`CORRECT! the answe was ${answer}. It took you ${attempts} `);
     running=false; 
    }
}
}