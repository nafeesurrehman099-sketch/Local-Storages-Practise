function saveData() {
    let name = document.getElementById("nameBox").value;
    let age = document.getElementById("agebox").value

    localStorage.setItem("username", name);
    localStorage.setItem("userage", age);
}

function getItem() {
    let name = localStorage.getItem("username");
    let age = localStorage.getItem("userage");

     document.getElementById("outputbox").innerHTML = 
     "Name:" + name 



}

function deleteData(){
    let name = localStorage.removeItem("username");
    let age  = localStorage.removeItem("userage");

    document.getElementById("outputbox").innerHTML = 
    "Name Deleted Successfully!";

}


function clearData(){
    localStorage.clear();
    document.getElementById("outputbox").innerHTML =
    "all date cleared successfully!"
}