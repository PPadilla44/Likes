console.log("WORKING")

var likes = document.querySelector(".likes");

var likeCount = 0;

function clickCounter() {
    likeCount++;
    likes.innerHTML = likeCount + " like(s)"
    console.log(likeCount);
}