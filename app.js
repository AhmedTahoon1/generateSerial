const BODY = document.body;
const inputS = document.querySelector("#serial");
const btn = document.querySelector("button");
const copied = document.querySelector(".copied");
const serial = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

btn.addEventListener("click",e=>{
    e.preventDefault();
    
    let x = new Array();
    for (let i = 0; i < 12; i++) {
        x += serial[Math.floor(Math.random()*62)]
    }
    inputS.value = x
})


inputS.addEventListener("click",_=> {
    inputS.value != "" ? navigator.clipboard.writeText(inputS.value): ""

    if(inputS.value != ""){
        copied.textContent = `Copied The Serial: ${inputS.value}`;
        copied.style.display="block";
        copied.addEventListener("click", _=> abs.style.display="none")
        setTimeout(_=> copied.style.display="none",1500);
    }

});



