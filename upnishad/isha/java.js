function fire() {
  var page = document.getElementById('select').value;
    if (page == "") {
        window.location = "http://"+url+"/upnishad/isha"      
     } else {
         window.location= "http://"+url+"/upnishad/isha/" +page;
        }
}
