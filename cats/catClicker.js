var cats = [
    "Honey",
    "Fluffy"
];
var i,
    catWrapper = document.getElementById('cats'),
    catDiv,
    catName,
    catPic,
    catCount;

for (i in cats) {
    catDiv = document.createElement('div');

    catName = document.createElement('h3');
    catName.innerText = cats[i];
    catDiv.appendChild(catName);

    var count = 0;
    catCount = document.createElement('p');
    catCount.innerText = 'Clicks: ' + count;
    catDiv.appendChild(catCount);

    catPic = document.createElement('img');
    catPic.setAttribute("class", "catPicture");
    catPic.setAttribute("alt", "cat named "+cats[i]);
    catPic.setAttribute("src", "img/" + cats[i] + ".jpg");
    catPic.addEventListener('click',
        (function (_catCount, _count) {
            return function () {
                _count++;
                _catCount.innerText = 'Clicks: ' + _count;
            }
        })(catCount, count)
    );
    catDiv.appendChild(catPic);

    catWrapper.appendChild(catDiv);
}


//jQuery : $('#cat').click(function (e) { ... });

//this works but is a kind of lame solution for people who are noz aware of niffy
/*
 catDiv.addEventListener('click', function (event) {
    for (i in cats) {
        if (event.target.id === cats[i]) {
            count[i]++;
            catCount[i].innerText = 'Clicks: ' + count[i];
        }
    }
 }, false);
*/
