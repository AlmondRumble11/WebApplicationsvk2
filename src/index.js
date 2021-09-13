import "./styles.css";

//check if loading
if (document.readyState !== "loading") {
  ButtonFunctions();
} else {
  document.addEventListener("DOMContentLoaded", function () {
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
    const newListItem = document.createElement("li");
    const newDiv = document.createElement("div");

    //first div elment = rating
    const divRating = document.createTextNode(rating.value);
    newDiv.appendChild(divRating);
    //second div element = text
    const divText = document.createTextNode(commentText.value);
    newDiv.appendChild(divText);

    //adding comment to new list item value
    //newListItem.innerHTML = commentText.value;
    //newListItem.appendChild(document.createTextNode(commentText.value));

    //create a remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    //removeButton.style.visibility = "hidden";
    removeButton.classList.add("remove-comment");

    newDiv.appendChild(removeButton);
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
  const removeBtn = document.getElementsByClassName("remove-comment");
  //remove comments button event listener
  removeCommentsButton.addEventListener("click", function () {
    //getting comment list
    const commentList = document.getElementById("comment-list");

    //number of comments
    //const commentListLenght = commentList.getElementsByTagName("LI").length;

    //adding a delete button to all of the reviews
    for (var i = 0; i < removeBtn.length; i++) {
      removeBtn[i].style.visibility = "visible";
    }
    //ask confirmation
    /* var action = window.confirm("Really want to remove all comments");
    if (action === true) {
      //go through the comments and delete them all
      for (var i = 0; i < commentListLenght; i++) {
        commentList.removeChild(commentList.lastChild);
      }
    }*/
  });
}
