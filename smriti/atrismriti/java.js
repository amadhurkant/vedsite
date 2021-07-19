    function fire() {
      var name = document.getElementById("select").value;
      if (name == "") {
        alert("चुनें")
      } else {
        window.location = "https://" + url + "/smriti/atrismriti/" + name;
      }
    }
