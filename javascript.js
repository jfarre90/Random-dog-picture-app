var btn = document.querySelector("#btn");
    // listen for clicks
    btn.addEventListener("click", function(){
        // make changes
        var XHR = new XMLHttpRequest();
        
        XHR.onreadystatechange = function (){
            if(XHR.readyState ==4 && XHR.status ==200) {
                console.log(XHR.responseText);
            }
        };
        XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
        XHR.send;
    });