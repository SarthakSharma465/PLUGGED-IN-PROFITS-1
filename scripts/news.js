
getnews();
function getnews(){

    $(".getnews").text("");
var keyword = $("#keyword").val();

if(keyword == ''){
    keyword = "bse";
}

var url = "https://newsapi.org/v2/everything?q="+keyword+"&apiKey=63612b6a99b04113b267076acd03a06d";

$.get (url,(response)=>{
    console.log(response.articles);

    for(i=0 ; i<5;i++){
        var html = `<div class="card mb-3 shadow"  ;">
            <div class="row g-0">
            <div class="col-md-4">
              <img src="${response.articles[i].urlToImage}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${response.articles[i].title}</h5>
              <p class="card-text">${response.articles[i].content}</p>
              <p class="card-text"><small class="text-muted">${response.articles[i].publishedAt} | ${response.articles[i].source.name} | ${response.articles[i].author}</small></p>
              <a href="${response.articles[i].url}" class="btn btn-primary">Explore</a>
            </div>
            </div>
            </div>
          </div>`;
        $(".getnews").append(html);
    }

});
}

