
function saveData() {

    let name = document.getElementById("nameBox").value;
    let age = document.getElementById("ageBox").value;

    localStorage.setItem("username", name);
    localStorage.setItem("userage", age);

    alert("Data Saved successfully!");

}

function showData() {

    let name = localStorage.getItem("username");
    let age = localStorage.getItem("userage");

    document.getElementById("outputBox").innerHTML =
        "Name: " + name + "<br>Age: " + age;

}

function deleteData() {

    localStorage.removeItem("username");
    localStorage.removeItem("userage");

    

    document.getElementById("outputBox").innerHTML =
        "Info Delete successfully!";

}

function clearData() {

    localStorage.clear();

    document.getElementById("nameBox").value = "";
    document.getElementById("ageBox").value = "";

    document.getElementById("outputBox").innerHTML =
        "all date cleared successfully!!";

}
