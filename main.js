const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const emailId = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    if (emailId.length > 0 && name.length > 0) {
      const object = {
        name: name,
        emailId: emailId 
      };
      localStorage.setItem(emailId, JSON.stringify(object));
      addNewLineElement(object);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    console.log("Himanshu");
    localStorage.getItem();
  });
  
  if (document.readyState !== "loading") {
  
    var keys = Object.keys(localStorage)
      i = keys.length; 
    console.log("keys", keys);
    let a, b;
  
    // 6 to 0
    Object.keys(localStorage).forEach((key) => {
      //i==2
      if (key.match(/userDetails/g)) {
        a = localStorage.getItem(key);
        b = JSON.parse(a);
  
        addNewLineElement(b);
      }
    });
  }

  function addNewLineElement(object) {
    const ul = document.getElementById("listOfUser");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(object.name + " " + object.emailId + " ")
    );
    ul.appendChild(li);
  }
