window.onload = function () {
    const navinput = document.getElementById('search') 
    const SearchI = document.getElementById('search-icon')

        SearchI.addEventListener('click', Navresult);
    
          function Navresult () {
            let x = navinput.value 
           if(x == "") {
            $("#search").addClass("err")
        } 
        else {
            if($("#search").val()) {
                alert("search completed")
            }
        }
          }  
    
}