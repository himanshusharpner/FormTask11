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
    console.log(document.createElement("i"));
    const a1 = document.createElement("input");
    a1.id = "himanshu";
    a1.type = "button";
    a1.value = "Edit";
    a1.addEventListener("click", () => {
      console.log(object);
      document.getElementById("name").value = object.name;
      document.getElementById("email").value = object.emailId;
      li.remove();
    });
    a1.className = "delete";
    a1.style.border = "2px solid green";
    console.log(a1);
    li.appendChild(a1);
  
    const a = document.createElement("input");
    a.type = "button";
    a.value = "delete";
    a.addEventListener("click", () => {
      localStorage.removeItem("userDetails" + object.emailId);
      li.remove();
    });
    a.className = "delete";
    a.style.border = "2px solid red";
    console.log(a);
    li.appendChild(a);
    console.log(li);
    ul.appendChild(li);
  }
