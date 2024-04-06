document.addEventListener("mousemove", function (event) {
    var cursor = document.querySelector('.cursor');
    cursor.style.top = event.pageY + 'px';
    cursor.style.left = event.pageX + 'px';
});

function toggleVisibility() {
    var content = document.getElementById("info");
    content.style.display = (content.style.display === "none") ? "block" : "none";
}