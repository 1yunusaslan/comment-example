let likeCount = 0;
let dislikeCount = 0;
let bookmarkCount = 0;




document.getElementById("likeButton").onclick = function () {  

    likeCount+=1;
    document.getElementById("like-count").innerHTML = likeCount ;

}

document.getElementById("dislikeButton").onclick = function () {  

    dislikeCount+=1;
    document.getElementById("dislike-count").innerHTML = dislikeCount;

}


document.getElementById("bookmarkButton").onclick = function () {  

    bookmarkCount+=1;
    document.getElementById("bookmark-count").innerHTML = bookmarkCount;

}


document.getElementById("shareButton").onclick = function () {  
    alert("Foto root")
}