// const h2 = document.createElement("h2");
// h2.textContent = "This content added by Javascript";
// document.querySelector("body").appendChild(h2);
document.addEventListener ('DOMContentLoaded',()=>{
    const img = document.getElementById ('fade');
    let isfade = true;
    setInterval(() => {
        if (isfade){
            img.style.opacity = 1;
        } else{
            img.style.opacity = 0;
        }
        isfade = !isfade;
    }, 900);
})