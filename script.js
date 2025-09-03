function clicks() {
    let bkccol=document.getElementById("heading3");
    if(bkccol.style.backgroundColor==="green"){
        bkccol.style.backgroundColor="black";
    }
    else{
        bkccol.style.backgroundColor="green";
    }
    if(bkccol.style.color==="palegreen"){
        bkccol.style.color="white";
    }
    else{
        bkccol.style.color="palegreen";
    }
    bkccol.innerHTML="This is Pakistan Team";
}
