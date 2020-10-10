function title() {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    document.title = "Shell — " + width + "x" + height;
}
title();
window.addEventListener('resize', title);


