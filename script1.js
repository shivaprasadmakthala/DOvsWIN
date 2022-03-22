"use strict";

const url = "https://api.thedogapi.com/v1/breeds";

function Suman(url) {
    let request = new XMLHttpRequest();// creates the object
    request.open("GET", url, true);// opens the connection async
    // callback function inbuilt
    request.onload = () => {   //when their is a connection get the stuff from the server and display
        let data = request.responseText;
        document.getElementById("data").innerHTML = JSON.stringify(data);
    };
    request.send();// creates a connection and the sends to the server 
}

Suman(url);



