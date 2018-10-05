
function showMembers(jsonObj) {
    var items = jsonObj['appMembers'];

    for (var index = 0; index < items.length; index++) {

        var target = document.getElementById("result");
        var contain = document.createElement('div');
        var pic = document.createElement('div');
        var info = document.createElement('div');
        var text = document.createElement('p');

   

        text.textContent = 'Bio: ' + items[index].bio + "\r\n";
        text.textContent += 'Location: ' + items[index].loc;

        contain.classList.add("result");
        pic.classList.add("pic" + [index]);
        info.classList.add("info");

        target.appendChild(contain);
        contain.appendChild(pic);
        contain.appendChild(info);
        info.appendChild(text);
    }

}


function filterOptions() {

    var mid = document.getElementById("filter");
    var contain = document.createElement('div');
    var locFil = document.createElement('p');

    locFil.textContent = 'Filter by: '

    contain.appendChild(mid);
    locFil.appendChild(contain);  


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