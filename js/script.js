
function loadData() {
    if (!window.jQuery) alert ("jQuery is not loaded!");
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var city = $('#city').val().trim();
    var street = $('#street').val();
    var address = street + ', ' + city;
    var streetViewUrl =
        'http://maps.googleapis.com/maps/api/streetview?size=600x400 &location=' + address;
    $greeting.text('So you want to live at ' + address + '?');
    $body.append('<img class="bgimg" src="' + streetViewUrl + '">');

    // YOUR CODE GOES HERE!
    var nytKey = 'b0325fd85e5b5e145c0e83c3dd74aee2:7:71492683';
    var nytUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?' +
              'q=' + city + '&api-key=' + nytKey;


    var jqxhr = $.getJSON( nytUrl, function( data ) {
        console.log('NYT success 1');
    }).done( function ( data ) {
        console.log('NYT success 2');
        var article, i;
        $nytHeaderElem.text('New York Times Articles about '+city);
        var articles = data.response.docs;
        for (i = 0; i < articles.length; i++) {
            article = articles[i];
            $nytElem.append(
                '<li class="article">' +
                    '<a href="' + article.web_url + '">' + article.headline.main + '</a>' +
                    '<p>' + article.snippet + '</p>' +
                '</li>'
            );
        }
    }).fail(function () {

        $nytHeaderElem.text('New York Times Articles could not be loaded.');
        console.log('NYT failed');
    }).always(function () {
        console.log('NYT complete 1');
    });
    jqxhr.complete(function () {
        console.log('NYT complete 2');
    });

    //wikipedia
    var url;
    url = "js/ajax_info.txt";
    //url =
    //1. XMLHttpRequest()
    var xmlhttp;
    if(window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
            document.getElementById('test').innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open(
        "GET",
        url,
        true
    );
    xmlhttp.send();


    url = "http://en.wikipedia.org/w/api.php?format=json&action=query&titles=India&prop=revisions&rvprop=content&callback=?";
    url = "http://en.wikipedia.org/w/api.php?format=json&action=query&prop=info&titles=" + "Dresden" + "&callback=?";

    var wikiUrl =   "http://en.wikipedia.org/w/api.php" +
                "?action=opensearch" +
                "&search=" + city +
                "&format=json" +
                "&callback=wikiCallback";

    var wikiRequestTimeout = setTimeout(function () {
        $wikiElem.text("fails to get Wikipedia resources");
    }, 8000);

    $.ajax(wikiUrl, {
        dataType: 'jsonp',
        //jsonp: "callback",  //jsonp default
        success: function(response){
            console.log(response);
            var articleList = response[1], i, url;
            for (i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                url = 'http://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append(
                    '<li><a href="' + url + '">' + articleStr + '</a></li>'
                );
            }
            clearTimeout(wikiRequestTimeout);
        }
    });

    return false;
};

$('#form-container').submit(loadData);

// loadData();
