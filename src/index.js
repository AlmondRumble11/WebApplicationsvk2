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
    let newListItem = document.createElement("li");
    let newDiv = document.createElement("div");

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
  });

  //getting the remove-comments button
  const removeCommentsButton = document.getElementById("remove-comments");

  //remove comments button event listener
  /* removeCommentsButton.addEventListener("click", function () {
    //getting comment list

    const removeBtn = document.getElementsByClassName("remove-comment");
    //number of comments
    const element = document.getElementsByTagName("LI");

    //adding a delete button to all of the reviews
    for (var i = 0; i < removeBtn.length; i++) {
      removeBtn[i].style.visibility = "visible";
      removeBtn[i].addEventListener("click", function () {
        var action = true; //window.confirm("Really want to remove all comments");
        if (action === true) {
          //https://stackoverflow.com/questions/36035736/add-remove-li-element-from-the-ul-javascript
          this[i].removeChild(this);
        }
      });
    }
    //ask confirmation
  });*/
}
