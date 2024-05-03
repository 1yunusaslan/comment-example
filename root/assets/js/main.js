let likeCount = 0;
let dislikeCount = 0;
let bookmarkCount = 0;



const data = {
    comment:{
        comment_img:[
            {
                src:'./assets/img/kedi.jpg'
            }
        ]
    }
}


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
    alert(data.comment.comment_img[0].src);
}


const commentResult = document.getElementById("comment-result");

document.getElementById("comment-button").onclick= function(){

    const commentInputValue = document.getElementById("comment-input").value;
    


    const makeP = document.createElement("p");
    const makeDiv= document.createElement("div");
    makeDiv.className="comment-result-layout";
    const img = document.createElement("img")
    img.src="./assets/img/me.jpg";

    makeP.textContent = commentInputValue;
    makeDiv.appendChild(img);
    makeDiv.appendChild(makeP);
    commentResult.appendChild(makeDiv);

}




