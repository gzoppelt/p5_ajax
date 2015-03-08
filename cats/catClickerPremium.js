var cats = [
    "Alpha",
    "Honey",
    "Fluffy",
    "Formal",
    "Science"
];
var i,
    count = [],
    catCount,
    catName,
    catPic,
    catDiv = document.getElementById('cats'),
    catList = document.getElementById('list'),
    catListEntry;

for (i in cats) {
    catListEntry = document.createElement('li');
    catListEntry.innerText = cats[i];
    catList.appendChild(catListEntry);
    count[i] = 0;
    catListEntry.addEventListener('click',
        (function (index) {
            return function () {
                count[index]++;
                loadCat(index);
            };
        })(i)
    );
}
loadCat(0);

function loadCat(i) {
    catDiv.innerHTML = "";
    catName = document.createElement('h3');
    catName.innerHTML = cats[i];
    catDiv.appendChild(catName);

    catCount = document.createElement('p');
    catCount.setAttribute("class", "catCount");
    catCount.innerText = 'Clicks: '+count[i];
    catDiv.appendChild(catCount);

    catPic = document.createElement('img');
    catPic.id = cats[i];
    catPic.setAttribute("class", "catPic");
    catPic.setAttribute("alt", "cat " + cats[i]);
    catPic.setAttribute("src", "img/" + cats[i] + ".jpg");
    catDiv.appendChild(catPic);
}

//jQuery : $('#cat').click(function (e) { ... });

