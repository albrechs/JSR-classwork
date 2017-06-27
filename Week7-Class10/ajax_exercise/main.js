'use strict';
(function() {
   function responseMethod() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            console.log(httpRequest.responseText);
          } else {
            console.log('There was a problem with the request.');
          }
        }
     }

    document.getElementById("getDataButton").onclick = function(){
    console.log("making request");

    var httpRequest = new XMLHttpRequest();

    httpRequest.open('GET', 'http://data.consumerfinance.gov/api/views.json');
    httpRequest.send();
    httpRequest.onreadystatechange = responseMethod;
    }

})();