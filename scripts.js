
function showMembers(jsonObj) {
    var items = jsonObj['appMembers'];

    for (var index = 0; index < items.length; index++) {

        var target = document.getElementById("result");
        var contain = document.createElement('div');
        var pic = document.createElement('div');
        var info = document.createElement('div');
        var text = document.createElement('p');

        text.textContent = 'Bio: ' + items[index].bio + document.createElement('br ') + 'Location: ' + items[index].loc;

        target.appendChild(contain);
        contain.appendChild(pic);
        contain.appendChild(info);
        info.appendChild(text);
    }

}







var requestURL = "db.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {

    var members = request.response;
    showMembers(members);

}