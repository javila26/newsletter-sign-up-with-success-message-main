document.querySelector(".subscribeButton").addEventListener("click", function(){
    const valueToPass = document.getElementById("customerEmail").value;
    sessionStorage.setItem('customerEmail', valueToPass);
    document.getElementById("customerEmail").value = "";
})

