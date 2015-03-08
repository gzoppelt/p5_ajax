(function(){
    var model = {
        list : [
            "Alpha",
            "Honey",
            "Fluffy",
            "Formal",
            "Science"
        ],
        cats : [
        ],
        init : function () {
            for (i in model.list) {
                model.cats[i] = {};
                model.cats[i].name = model.list[i];
                model.cats[i].clickCount = 0;
                model.cats[i].picture = "img/" + model.list[i] + ".jpg";
            }
        }
    };

    var octopus = {
        init : function () {
            model.init();
            viewList.init();
            viewCat.render(0);
        },
        getLength : function () {
            return model.list.length;
        },
        getName : function (i) {
            return model.cats[i].name;
        },
        getCat : function (i) {
            return model.cats[i];
        }
    };

    var viewList = {
        init : function () {
            var div = document.getElementById('list');
            var len = octopus.getLength();
            for (var i=0; i < len; i++) {
                var li = document.createElement('li');
                li.innerText = octopus.getName(i);
                li.addEventListener('click',
                    (function (index) {
                        return function () {
                            viewCat.render(index);
                        };
                    })(i)
                );
                div.appendChild(li);
            }
        }
    };

    var viewCat = {
        render : function (i) {
            var div = document.getElementById('cats');
            var cat = octopus.getCat(i);
            div.innerHTML = "";
            var h3 = document.createElement('h3');
            h3.innerText = cat.name;
            div.appendChild(h3);
            var p = document.createElement('p');
            p.innerText = 'Clicks: ' + cat.clickCount;
            div.appendChild(p);
            var img = document.createElement('img');
            img.setAttribute('class', 'catPic');
            img.setAttribute('alt', 'cat '+ cat.name);
            img.setAttribute('src', cat.picture);
            img.addEventListener('click', function (){
                cat.clickCount++;
                viewCat.render(i);
            });
            div.appendChild(img);
        }
    };

    octopus.init();
})();
