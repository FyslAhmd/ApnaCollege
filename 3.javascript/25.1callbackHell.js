let h1 = document.querySelector("h1");

function changeColor(color,delay,nextColor) {
    setTimeout(function() {
        h1.style.color = color;
        if(nextColor) nextColor();
    },delay);
}
changeColor("red",1000,()=> {
    changeColor("green",1000,()=> {
        changeColor("yellow",1000,()=> {
            changeColor("blue",1000);
        });
    });
});
function saveDB(data) {
    return new Promise((resolve,reject) => {
        let intSpeed = Math.floor(Math.random()*10+1);
        if(intSpeed>4) {
            resolve("Success");
        }
        else {
            reject("Failure");
        }
    });
}


saveDB("Faysal Ahmed");