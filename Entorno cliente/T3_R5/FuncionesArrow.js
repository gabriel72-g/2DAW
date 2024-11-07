const sum = (num1, num2) => num1 + num2;
   
const stringLength=(str) => console.log(`the length of "${str}" is:`, str.length);

const stringLength2 = (str) =>{
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
   }
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvelyou are", "You're so lovely", "You're so sweet that I'd think you're a sweetpotato -- and I LOOOOVE POTATOES"]
const showAlert=(name)=> alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);
    