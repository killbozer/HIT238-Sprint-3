
function showMembers(jsonObj) {
    var items = jsonObj['appMembers'];

    for (var index = 0; index < items.length; index++) {

        var target = document.getElementById('result');
        var contain = document.createElement('div');
        var pic = document.createElement('div');
        var info = document.createElement('div');
        var text = document.createElement('p');

   

        text.textContent = 'Bio: ' + items[index].bio + "\r\n";
        text.textContent += 'Location: ' + items[index].loc;

        contain.classList.add("result");
        contain.id = "result";
        pic.classList.add("pic" + [index]);
        info.classList.add("info");

        target.appendChild(contain);
        contain.appendChild(pic);
        contain.appendChild(info);
        info.appendChild(text);
    }

}

function filter1() {

    var classes = document.getElementsByClassName('result');
    for (var index = 0; index < classes.length; index++) {
        if (classes[index].innerHTML.includes("Charles Darwin")) {
        }
        else {
            classes[index].parentNode.removeChild(classes[index])
            index -= 1
        }
    }
}

function filter2() {

    var classes = document.getElementsByClassName('result');
    for (var index = 0; index < classes.length; index++) {
        if (classes[index].innerHTML.includes("Flinders")) {
        }
        else {
            classes[index].parentNode.removeChild(classes[index])
            index -= 1
        }
    }
}

var loc1 = document.getElementById('o1');
var loc2 = document.getElementById('o2');
loc1.addEventListener("click", filter1, false);
loc2.addEventListener("click", filter2, false);

var requestURL = "db.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {

    var members = request.response;
    showMembers(members);

}