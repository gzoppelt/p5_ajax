(function(){
    var model = {
        cats : [
            {
                name: "Alpha",
                clickCount: 0,
                url: "img/Alpha.jpg"
            },
            {
                name: "Honely",
                clickCount: 0,
                url: "img/Honey.jpg"
            },
            {
                name: "Fluffy",
                clickCount: 0,
                url: "img/Fluffy.jpg"
            },
            {
                name: "Formal",
                clickCount: 0,
                url: "img/Formal.jpg"
            },
            {
                name: "Science",
                clickCount: 0,
                url: "img/Science.jpg"
            }
        ],
        current_index : 0
    };

    var octopus = {
        init : function () {
            viewAdmin.init();
            viewList.init();
            viewCat.render(0);
        },
        getList : function () {
            var i, list = [];
            for (i in model.cats){
                list.push(model.cats[i].name);
            }
            return list;
        },
        getCat : function (i) {
            model.current_index = i;
            return model.cats[i];
        },
        getIndex : function () {
            return model.current_index;
        },
        setName : function (i, newName) {
            model.cats[i].name = newName;
        },
        setCount : function (i, newCount) {
            model.cats[i].clickCount = newCount;
        },
        setUrl : function (i, newUrl) {
            model.cats[i].url = newUrl;
        }
    };

    var viewList = {
        init : function () {
            var i,
                div = document.getElementById('list'),
                list = octopus.getList();
            div.innerHTML = '';
            for (i in list) {
                var li = document.createElement('li');
                li.innerText = list[i];
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
            img.setAttribute('src', cat.url);
            img.addEventListener('click', function (){
                cat.clickCount++;
                viewCat.render(i);
            });
            div.appendChild(img);
        }
    };

    var viewAdmin = {
        init : function () {
            var admin = document.getElementById('admin-button');
            var cancel = document.getElementById('cancel');
            var save = document.getElementById('save');
            admin.addEventListener  ('click', function () {viewAdmin.show();});
            cancel.addEventListener ('click', function () {viewAdmin.hide();});
            save.addEventListener   ('click', function () {viewAdmin.save();});
        },
        show : function () {
            var i = octopus.getIndex(),
                cat = octopus.getCat(i);
            document.getElementById('name').value = cat.name;
            document.getElementById('count').value = cat.clickCount;
            document.getElementById('url').value = cat.url;
            document.getElementById('admin-button').setAttribute('class', 'invisible');
            document.getElementById('admin-edit').setAttribute('class', 'visible');
        },
        hide : function () {
            document.getElementById('admin-button').setAttribute('class', 'visible');
            document.getElementById('admin-edit').setAttribute('class', 'invisible');
        },
        save : function () {
            var i = octopus.getIndex(),
                newName = document.getElementById('name').value,
                newCount = document.getElementById('count').value,
                newUrl = document.getElementById('url').value;
            octopus.setName(i, newName);
            octopus.setCount(i, newCount);
            octopus.setUrl(i, newUrl);
            viewList.init();
            viewCat.render(i);
            viewAdmin.hide();
        }
    };
    octopus.init();
})();
