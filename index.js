document.querySelector("#message-box").addEventListener("click" , function(){
    document.querySelector(".message").classList.add("active");
})


document.querySelector("#close-btn").addEventListener("click" , function(){
    document.querySelector(".message").classList.remove("active");
})