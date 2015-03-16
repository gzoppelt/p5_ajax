var cats = [
        {
            name: "Alpha",
            clickCount: 0,
            imgSrc: "img/Alpha.jpg",
            nicknames: ["Sir", "Lord", "Challenger", "King"]
        },
        {
            name: "Honely",
            clickCount: 0,
            imgSrc: "img/Honey.jpg",
            nicknames: ["Sweety", "Sweetheart", "Treacle"]
        },
        {
            name: "Fluffy",
            clickCount: 0,
            imgSrc: "img/Fluffy.jpg",
            nicknames: ["none"]
        },
        {
            name: "Formal",
            clickCount: 0,
            imgSrc: "img/Formal.jpg",
            nicknames: ["Mister", "Righteous Honorable", "Prime Minister"]
        },
        {
            name: "Science",
            clickCount: 0,
            imgSrc: "img/Science.jpg",
            nicknames: ["Nerd", "Geek", "Bookworm"]
        }
];

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames);
    this.level = ko.computed(function () {
        if (this.clickCount() < 3) return 'Baby';
        if (this.clickCount() < 6) return 'Toddler';
        if (this.clickCount() < 9) return 'Teen';
        return 'Grown Up';
    }, this);
};

var ViewModel = function () {
    var self = this;    //sometimes also use of: that
                        //self refers to this ViewModel when used inside child functions

    this.catList = ko.observableArray([]);

    cats.forEach(function(cat){
        self.catList().push(new Cat(cat));
    });

    this.currentCat = ko.observable(self.catList()[0]);

    /* works fine
    this.setCat = function () {
        console.log(this.name(), this.nicknames());
        self.currentCat(this);
    };
    */ //but is meant to be written as follows:

    this.setCat = function (clickedCat) {
        self.currentCat(clickedCat);
    };

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount()+1);
      //====
      //ViewModel.currentCat()
      //same result with: this.clickCount(this.clickCount()+1);
      //because it is called from inside currentCat()
    };
};
ko.applyBindings(new ViewModel());