
function showFullname() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;  
    var fullname = getFullName(firstname, lastname);
    document.getElementById("result-fullname").innerHTML = fullname;
}
function getFullName(firstname, lastname) {
    var fullname = firstname + " " + lastname;
    return fullname;
}

document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("show-fullname").addEventListener("click", showFullname);
});

