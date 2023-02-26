Template.MP.events ({
    'click .js-theme'() {
        $("#TModal").modal("show")
    }
}) 

window.onload = function () {
    const Bg1 = document.querySelector("bg-light");
 

    Bg1.addEventListener('click', () => {
        document.body.style.backgroundColor = "grey";
    })
    
    

    
}