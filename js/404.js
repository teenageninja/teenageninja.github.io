var wrapper = document.getElementById("wrapper");
var cursor = document.getElementById("cursor");
var loginBlock = document.getElementById("login-block");
var system = document.getElementById("system");
$(cursor).delay(5000).hide(0);

function hideCursor() {
    $(cursor).hide(0);
};
$(wrapper).delay(10).show(0);
$(loginBlock).delay(10000).hide(0);

function hideLoginBlock() {
    $(loginBlock).hide(0);
};

function stop() {
    $(error).removeClass("error");
    $(system).show(0);
};

function systemHide() {
    $(system).hide(0);
};

var notFound = document.getElementById("not-found");
var errorWidth = document.getElementById("error-area").offsetWidth;
var errorHeight = document.getElementById("error-area").offsetHeight;
var errorArea = errorWidth * errorHeight;
document.getElementById("error-area").remove();

function NotFoundContent() {
    function appendNotFoundContent() {
        while (notFound.firstChild) {
            notFound.removeChild(notFound.firstChild);
        }
        var content = [];
        var clientWidth = document.documentElement.clientWidth;
        var clientHeight = document.documentElement.clientHeight;
        var clientArea = clientWidth * clientHeight;
        var errorSum = Math.floor(clientArea / errorArea);
        //console.log(clientArea);
        for (var i = 0; i <= errorSum; i++) {
            var newError = document.createElement("div");
            newError.className = "error";
            content.push(newError);
            //console.log(newError.length);
        }
        return content;
    }
    notFound.append(...appendNotFoundContent());
};
NotFoundContent();
window.addEventListener('resize', NotFoundContent);
//window.addEventListener('resize', systemHide);

var error = document.getElementsByClassName("error");
function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(1000000000);
    for (var i = 0; i < error.length; i++) {
        error[i].innerHTML = Math.floor(Math.random() * (max - min)) + min;
        var errorInner = error[i].innerHTML;
        if (errorInner[0] == 4 && errorInner[1] == 0 && errorInner[2] == 4) {
            error[i].innerHTML = "NOT&nbsp;FOUND";
        }
        else if (errorInner[1] == 4 && errorInner[2] == 0 && errorInner[3] == 4) {
            error[i].innerHTML = "NOT&nbsp;FOUND";
        }
        else if (errorInner[2] == 4 && errorInner[3] == 0 && errorInner[4] == 4) {
            error[i].innerHTML = "NOT&nbsp;FOUND";
        }
        else if (errorInner[3] == 4 && errorInner[4] == 0 && errorInner[5] == 4) {
            error[i].innerHTML = "NOT&nbsp;FOUND";
        }
        else if (errorInner[4] == 4 && errorInner[5] == 0 && errorInner[6] == 4) {
            error[i].innerHTML = "NOT&nbsp;FOUND";
        }
        else if (errorInner[5] == 4 && errorInner[6] == 0 && errorInner[7] == 4) {
            error[i].innerHTML = "NOT&nbsp;FOUND";
        }
        else if (errorInner[6] == 4 && errorInner[7] == 0 && errorInner[8] == 4) {
            error[i].innerHTML = "NOT&nbsp;FOUND";
        }
    }
};
var timerId = setInterval(() => getRandomInt(), 100);