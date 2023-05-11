const init= input('Digita un numero: ');
const readline = require('readline').createInterface(init);

(async ()=>{
    let line1 = (await readline.next()).value;
    let line2 = (await readline.next()).value;

    if(init == undefined){
        console.log(line1);
    }else{
        console.log(line2);
    }   
})