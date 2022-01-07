
function getdata(){
  $(".getdata").text("");
var keyword = $("#keywrd").val();

if(keyword == ''){
    keyword = "bitcoin";
}
var url = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords="+keyword+"&apikey=5UURJ27EF3L9EKR0";

$.get (url,(data)=>{
    console.log(data);

    var html = `<div class="card w-50" style = "margin: auto;">
    <div class="card-body ">
      <h5 class="card-title">${data.bestMatches[0]["2. name"]}</h5>
      <p class="card-text">Type : ${data.bestMatches[0]["3. type"]}<br>
      Region : ${data.bestMatches[0]["4. region"]}<br>
      Currency : ${data.bestMatches[0]["8. currency"]}<br>
      Market Opens at :  ${data.bestMatches[0]["5. marketOpen"]} local<br>
      Market Closes at : ${data.bestMatches[0]["6. marketClose"]} local</p>
      
    </div>
  </div>
  <br>`;
$(".getdata").append(html);
});

}

getGainers();
function getGainers(){
var url2 = "https://financialmodelingprep.com/api/v3/gainers?apikey=00c78b98526925c7460fcd9725012f2d";

$.get (url2,(data)=>{
    console.log(data);
    var html2 = `<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">1.${data[0].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[0].changesPercentage}<br>
        Current Price : $${data[0].price}<br>
        Change in Price : $${data[0].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">2.${data[1].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[1].changesPercentage}<br>
        Current Price : $${data[1].price}<br>
        Change in Price : $${data[1].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">3.${data[2].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[2].changesPercentage}<br>
        Current Price : $${data[2].price}<br>
        Change in Price : $${data[2].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">4.${data[3].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[3].changesPercentage}<br>
        Current Price : $${data[3].price}<br>
        Change in Price : $${data[3].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">5.${data[4].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[4].changesPercentage}<br>
        Current Price : $${data[4].price}<br>
        Change in Price : $${data[4].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">6.${data[5].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[5].changesPercentage}<br>
        Current Price : $${data[5].price}<br>
        Change in Price : $${data[5].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  </div>`;
$(".getGainers").append(html2);
});
}

getLosers();
function getLosers(){
var url2 = "https://financialmodelingprep.com/api/v3/losers?apikey=00c78b98526925c7460fcd9725012f2d";

$.get (url2,(data)=>{
    console.log(data);
    var html2 = `<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">1.${data[0].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[0].changesPercentage}<br>
        Current Price : $${data[0].price}<br>
        Change in Price : $${data[0].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">2.${data[1].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[1].changesPercentage}<br>
        Current Price : $${data[1].price}<br>
        Change in Price : $${data[1].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">3.${data[2].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[2].changesPercentage}<br>
        Current Price : $${data[2].price}<br>
        Change in Price : $${data[2].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">4.${data[3].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[3].changesPercentage}<br>
        Current Price : $${data[3].price}<br>
        Change in Price : $${data[3].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">5.${data[4].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[4].changesPercentage}<br>
        Current Price : $${data[4].price}<br>
        Change in Price : $${data[4].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">6.${data[5].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[5].changesPercentage}<br>
        Current Price : $${data[5].price}<br>
        Change in Price : $${data[5].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  </div>`;
$(".getActives").append(html2);
});
}

getActives();
function getActives(){
var url2 = "https://financialmodelingprep.com/api/v3/actives?apikey=00c78b98526925c7460fcd9725012f2d";

$.get (url2,(data)=>{
    console.log(data);
    var html2 = `<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">1.${data[0].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[0].changesPercentage}<br>
        Current Price : $${data[0].price}<br>
        Change in Price : $${data[0].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">2.${data[1].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[1].changesPercentage}<br>
        Current Price : $${data[1].price}<br>
        Change in Price : $${data[1].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">3.${data[2].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[2].changesPercentage}<br>
        Current Price : $${data[2].price}<br>
        Change in Price : $${data[2].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">4.${data[3].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[3].changesPercentage}<br>
        Current Price : $${data[3].price}<br>
        Change in Price : $${data[3].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">5.${data[4].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[4].changesPercentage}<br>
        Current Price : $${data[4].price}<br>
        Change in Price : $${data[4].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">6.${data[5].companyName}</h5>
        <p class="card-text">Percentage Change : ${data[5].changesPercentage}<br>
        Current Price : $${data[5].price}<br>
        Change in Price : $${data[5].changes}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  </div>`;
$(".getLosers").append(html2);
});
}