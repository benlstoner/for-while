var ele = document.body.querySelector(".loop");

var dragon = 0;
var damage = 0;

var condition = true;

while(condition) {
    var question = Number(prompt("How many hits on Smaug? (1-5 hits)"));
    var user = Math.floor(Math.random() * 10) + 1;
    var attack = Math.floor(Math.random() * 2) + 1;

    if(question === dragon < 10 && damage < 5){
        ele.innerHTML= "User: " + damage;
        ele.innerHTML= "Dragon: " + dragon;
    }

    if(user < 5){
        dragon=dragon+attack;
    }
    if(user > 5){
        dragon=1+dragon;
    }

    if(dragon <10) {
        ele.innerHTML="You desolated Smaug!";
    }else{
        ele.innerHTML="Smaug desolated you";
    }

    if(user <= 5){
        ele.innerHTML="Smaug has desolated you."
    }

    condition=false;
}










