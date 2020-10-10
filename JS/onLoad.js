var cursor = document.getElementById("cursor");
var loginBlock = document.getElementById("login-block");
var wrapper = document.getElementById("wrapper");
$(cursor).delay(1).hide(0);
function hideCursor() {
    $(cursor).hide(0);
};
$(loginBlock).delay(1).hide(0);
function hideLoginBlock() {
    $(loginBlock).hide(0);
};
$(wrapper).delay(1).show(0);