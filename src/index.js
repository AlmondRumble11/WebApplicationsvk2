import "./styles.css";

//check if loading
if (document.readyState !== "loading") {
  console.log("Ready!!");
  ButtonFunctions();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Wait a bit!");
    ButtonFunctions();
  });
}

//new comment function
function ButtonFunctions() {
  //getting the add-comment button
  const addCommentButton = document.getElementById("add-comment");

  //add commenets button event listener
  addCommentButton.addEventListener("click", function () {
    //getting the comment text area, list and rating
    const commentText = document.getElementById("comment-text");
    const commentList = document.getElementById("comment-list");
    const rating = document.getElementById("rating");

    //creating new list item
    var newListItem = document.createElement("li");
    var newDiv = document.createElement("div");

    //first div elment = rating and second div element = text
    let ratingArticle = document.createElement("article");
    let textArticle = document.createElement("article");

    ratingArticle.innerHTML = rating.value;
    textArticle.innerHTML = commentText.value;

    ratingArticle.classList.add("comment-rating");
    textArticle.classList.add("comment-text");

    //divRating.classList.add("comment-rating");
    //divText.classList.add("comment-text");
    newDiv.appendChild(ratingArticle);
    newDiv.appendChild(textArticle);

    //adding comment to new list item value
    //newListItem.appendChild(document.createTextNode(commentText.value));

    //create a remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.classList.add("remove-comment");
    newDiv.appendChild(removeButton);

    /*newListItem.appendChild(document.createTextNode(commentText.value));
    newListItem.appendChild(document.createTextNode(rating.value));
    newListItem.appendChild(removeButton);*/
    newListItem.appendChild(newDiv);

    //clearing the comment area
    commentText.value = "";

    //adding new list item to the comment list
    commentList.appendChild(newListItem);

    removeButton.addEventListener("click", function () {
      var action = window.confirm("Really want to remove all comments");
      if (action === true) {
        //https://stackoverflow.com/questions/36035736/add-remove-li-element-from-the-ul-javascript
        newListItem.remove();
      }
    });
  });

  //getting the remove-comments button
  const removeCommentsButton = document.getElementById("remove-comments");

  //remove comments button event listener
  removeCommentsButton.addEventListener("click", function () {
    //getting comment list

    const removeBtn = document.getElementsByClassName("remove-comment");
    //number of comments
    //const commentListLenght = commentList.getElementsByTagName("LI").length;

    //adding a delete button to all of the reviews
    for (var i = 0; i < removeBtn.length; i++) {
      removeBtn[i].style.visibility = "visible";
    }
  });
}
