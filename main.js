var btn = document.querySelector('.btn');
btn.addEventListener('click', (e)=>{
    document.querySelector('.btn').style.color = "white";
    document.querySelector('.btn').style.background = "black";

});


// storing the user details as an object in the local storage
function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    let myobj = {
        name ,
        email,
      }
     let myObj_serilized = JSON.stringify(myobj);

     localStorage.setItem('myobj',myObj_serilized);

     let myobj_deserialized = JSON.parse(localStorage.getItem('obj'));

     //console.log(myobj_deserialized);
} 