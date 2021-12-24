
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
function doCORSRequest(options, printResult) {
  var x = new XMLHttpRequest();
  x.open(options.method, cors_api_url + options.url);
  x.onload = x.onerror = function() {
    printResult(
      options.method + ' ' + options.url + '\n' +
      x.status + ' ' + x.statusText + '\n\n' +
      (x.responseText || '')
    );
  };
  if (/^POST/i.test(options.method)) {
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  x.send(options.data);
}

// Bind event
(function() {
  var urlField = document.getElementById('url');
  var dataField = document.getElementById('data');
  var outputField = document.getElementById('output');
  document.getElementById('get').onclick =
  document.getElementById('post').onclick = function(e) {
    e.preventDefault();
    doCORSRequest({
      method: this.id === 'post' ? 'POST' : 'GET',
      url: urlField.value,
      data: dataField.value
    }, function printResult(result) {
      outputField.value = result;
    });
  };
})();
if (typeof console === 'object') {
  console.log('// To test a local CORS Anywhere server, set cors_api_url. For example:');
  console.log('cors_api_url = "http://localhost:8080/"');
}
getnews();
function getnews(){

    $(".getnews").text("");
var keyword = $("#keyword").val();

if(keyword == ''){
    keyword = "sharemarket";
}

var url = "https://newsapi.org/v2/everything?q="+keyword+"&apiKey=63612b6a99b04113b267076acd03a06d";

$.get (url,(response)=>{
    console.log(response.articles);

    for(i=1 ; i<16;i= i+3){
        var html = `<div class="card mb-3 shadow">
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

