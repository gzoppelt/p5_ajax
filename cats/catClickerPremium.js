var cats = [
    "Alpha",
    "Honey",
    "Fluffy",
    "Formal",
    "Sience"
];
var i,
    count = 0,
    catCount,
    catPic,
    catDiv = document.getElementById('cats'),
    catList = document.getElementById('list'),
    catListEntry;

for (i in cats) {
    catListEntry = document.createElement('li');
    catListEntry.innerText = cats[i];
    catList.appendChild(catListEntry);
    catListEntry.addEventListener('click',
        (function (name, clicks) {
            return function () {
                n++;
                c.innerText = 'Clicks: ' + n;
            };
        })(cats[i], count)
    );

    catCount = document.createElement('p');
    catCount.setAttribute("class", "catCount");
    catCount.innerText = 'Count: 0';
    catDiv.appendChild(catCount);

    catPic = document.createElement('img');
    catPic.id = cats[i];
    catPic.setAttribute("class", "catPic");
    catPic.setAttribute("alt", "cat " + cats[i]);
    catPic.setAttribute("src", "img/" + cats[i] + ".jpg");
    catPic.addEventListener('click',
        (function (c, n) {
            return function () {
                n++;
                c.innerText = 'Clicks: ' + n;
            };
        })(catCount, count)
    );
    catDiv.appendChild(catPic);
}


//jQuery : $('#cat').click(function (e) { ... });

