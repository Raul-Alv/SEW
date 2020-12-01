class News{

    loadFunction() {
        var newsAPI = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9d7cf23dcada404babf83de1d4509353";
        $.getJSON(newsAPI)
            .done(function(data) {
                    $.each(data.items, function(i,item ) {
                        $("<p>").attr( "src", item.articles).appendTo( "#noticias" );
                    });
        });
    }
}

var news = new News();
news.loadFunction();