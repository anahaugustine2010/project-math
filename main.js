function addUser()
{
    UserName1 = document.getElementById("UserName1").value;
    UserName2 = document.getElementById("UserName2").value;

    localStorage.setItem("UserName1", UserName1)
    localStorage.setItem("UserName2", UserName2)

    window.location = "quiz_room.html";

   
}