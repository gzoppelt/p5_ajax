var cats = [
    "Honey",
    "Fluffy"
];
var catDiv, catName, catPic;
for (var cat in cats) {
    catDiv = document.createElement('div');

    catName = document.createElement('h3');
    catName.innerText = cat;
    catDiv.appendChild(catName);

    catPic = document.createElement('img');
    catPic.className = "catPicture";
    catPic.

}
var cat = document.getElementById('cat');
var count = document.getElementById('count');
var catCount = 0;

//jQuery : $('#cat').click(function (e) { ... });

cat.addEventListener('click', function () {
    catCount++;
    count.innerText = '' + catCount;
}, false);