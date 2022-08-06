let comment = document.getElementById('commentBtnjs')

let comments = document.getElementById("commentsContainerjs")
let BtnID = comment.getAttribute("data-id")

// console.log(BtnID)


comment.addEventListener('click', () => {
    // comments.classList.toggle('active')
    console.log("This is the button ID")
    console.log("------------------------")
    console.log(BtnID)
});