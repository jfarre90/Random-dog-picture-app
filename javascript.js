var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

    // listen for clicks
    btn.addEventListener("click", function(){
        // make changes
        var XHR = new XMLHttpRequest();
        
        XHR.onreadystatechange = function (){
            if(XHR.readyState ==4 && XHR.status ==200) {
                var url = JSON.parse(XHR.responseText).message;
                // The results look like a javascript object, but they are just a string, so we need to convert it to javascript to be able to select the message
                img.src = url;
            }
        };
        XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
        XHR.send();
    });