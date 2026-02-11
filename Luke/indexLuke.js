/* 
Date       : Feb 10, 2026
Author     : Luke Anderson
*/
function openPopup(){
    document.getElementById("popup").style.display = "flex";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

function sendRequest(){
    alert("Friend request sent!");
}

function acceptRequest(){
    alert("Friend request accepted!");
    closePopup();
}

function declineRequest(){
    alert("Friend request declined.");
    closePopup();
}

