console.log("WORKIN");

var likeCount = [0,0,0];

function clickCounter(userId, position) {
    var user = document.querySelector(userId);
    likeCount[position]++;
    user.innerHTML = likeCount[position] + " like(s)"
}