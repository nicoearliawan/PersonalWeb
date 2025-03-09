  function toggleReadMore(button) {
    var content = button.previousElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "inline";
        button.innerHTML = "Read less";
    } else {
        content.style.display = "none";
        button.innerHTML = "Read more";
    }
}