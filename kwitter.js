
function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
    if (user_name=="") {
      document.getElementById("user_name"),innerHTML="Enter your user name";
    window.location="index.html"
    } else {
      window.location="kwitter_room.html";
    }
}

