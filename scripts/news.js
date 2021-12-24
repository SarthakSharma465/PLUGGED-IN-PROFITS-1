
getnews();
function getnews(){

    $(".getnews").text("");
var keyword = $("#keyword").val();

if(keyword == ''){
    keyword = "sharemarket";
}

var url = "https://newsdata.io/api/1/news?apikey=pub_304807a11a986a20ea166c10a4b89bea9d7a&language=en&q=" + keyword;

$.get (url,(response)=>{
    console.log(response.results);

    for(i=1 ; i<16;i= i+3){
        var html = `<div class="card mb-3 shadow">
            <div class="row g-0">
            <div class="col-md-4">
              <img src="${response.results[i].image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${response.results[i].title}</h5>
              <p class="card-text">${response.results[i].description}</p>
              <p class="card-text"><small class="text-muted">${response.results[i].pubDate} | ${response.results[i].source_id} | ${response.results[i].creator}</small></p>
              <a href="${response.results[i].link}" class="btn btn-primary">Explore</a>
            </div>
            </div>
            </div>
          </div>`;
        $(".getnews").append(html);
    }

});
}

