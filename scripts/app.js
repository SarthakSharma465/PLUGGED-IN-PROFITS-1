
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
var url2 = "https://financialmodelingprep.com/api/v3/stock/gainers?apikey=00c78b98526925c7460fcd9725012f2d";

$.get (url2,(data)=>{
    console.log(data);
    var html2 = `<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">1. ${data.mostGainerStock[0].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostGainerStock[0].changesPercentage}<br>
        Current Price : $${data.mostGainerStock[0].price}<br>
        Change in Price : $${data.mostGainerStock[0].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">2. ${data.mostGainerStock[1].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostGainerStock[1].changesPercentage}<br>
        Current Price : $${data.mostGainerStock[1].price}<br>
        Change in Price : $${data.mostGainerStock[1].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">3. ${data.mostGainerStock[2].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostGainerStock[2].changesPercentage}<br>
        Current Price : $${data.mostGainerStock[2].price}<br>
        Change in Price : $${data.mostGainerStock[2].changes}</p>
        
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">4. ${data.mostGainerStock[3].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostGainerStock[3].changesPercentage}<br>
        Current Price : $${data.mostGainerStock[3].price}<br>
        Change in Price : $${data.mostGainerStock[3].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">5. ${data.mostGainerStock[4].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostGainerStock[4].changesPercentage}<br>
        Current Price : $${data.mostGainerStock[4].price}<br>
        Change in Price : $${data.mostGainerStock[4].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">6. ${data.mostGainerStock[5].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostGainerStock[5].changesPercentage}<br>
        Current Price : $${data.mostGainerStock[5].price}<br>
        Change in Price : $${data.mostGainerStock[5].changes}</p>
        
      </div>
    </div>
  </div>
  </div>`;
$(".getGainers").append(html2);
});
}

getLosers();
function getLosers(){
var url2 = "https://financialmodelingprep.com/api/v3/stock/losers?apikey=00c78b98526925c7460fcd9725012f2d";

$.get (url2,(data)=>{
    console.log(data);
    var html2 = `<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">1. ${data.mostLoserStock[0].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostLoserStock[0].changesPercentage}<br>
        Current Price : $${data.mostLoserStock[0].price}<br>
        Change in Price : $${data.mostLoserStock[0].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">2. ${data.mostLoserStock[1].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostLoserStock[1].changesPercentage}<br>
        Current Price : $${data.mostLoserStock[1].price}<br>
        Change in Price : $${data.mostLoserStock[1].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">3. ${data.mostLoserStock[2].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostLoserStock[2].changesPercentage}<br>
        Current Price : $${data.mostLoserStock[2].price}<br>
        Change in Price : $${data.mostLoserStock[2].changes}</p>
        
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">4. ${data.mostLoserStock[3].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostLoserStock[3].changesPercentage}<br>
        Current Price : $${data.mostLoserStock[3].price}<br>
        Change in Price : $${data.mostLoserStock[3].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">5. ${data.mostLoserStock[4].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostLoserStock[4].changesPercentage}<br>
        Current Price : $${data.mostLoserStock[4].price}<br>
        Change in Price : $${data.mostLoserStock[4].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">6. ${data.mostLoserStock[5].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostLoserStock[5].changesPercentage}<br>
        Current Price : $${data.mostLoserStock[5].price}<br>
        Change in Price : $${data.mostLoserStock[5].changes}</p>
        
      </div>
    </div>
  </div>
  </div>`;
$(".getLosers").append(html2);
});
}

getActives();
function getActives(){
var url2 = "https://financialmodelingprep.com/api/v3/stock/actives?apikey=00c78b98526925c7460fcd9725012f2d";

$.get (url2,(data)=>{
    console.log(data);
    var html3 = `<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">1. ${data.mostActiveStock[0].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostActiveStock[0].changesPercentage}<br>
        Current Price : $${data.mostActiveStock[0].price}<br>
        Change in Price : $${data.mostActiveStock[0].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">2. ${data.mostActiveStock[1].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostActiveStock[1].changesPercentage}<br>
        Current Price : $${data.mostActiveStock[1].price}<br>
        Change in Price : $${data.mostActiveStock[1].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">3. ${data.mostActiveStock[2].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostActiveStock[2].changesPercentage}<br>
        Current Price : $${data.mostActiveStock[2].price}<br>
        Change in Price : $${data.mostActiveStock[2].changes}</p>
        
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">4. ${data.mostActiveStock[3].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostActiveStock[3].changesPercentage}<br>
        Current Price : $${data.mostActiveStock[3].price}<br>
        Change in Price : $${data.mostActiveStock[3].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">5. ${data.mostActiveStock[4].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostActiveStock[4].changesPercentage}<br>
        Current Price : $${data.mostActiveStock[4].price}<br>
        Change in Price : $${data.mostActiveStock[4].changes}</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">6. ${data.mostActiveStock[5].companyName}</h5>
        <p class="card-text">Percentage Change : ${data.mostActiveStock[5].changesPercentage}<br>
        Current Price : $${data.mostActiveStock[5].price}<br>
        Change in Price : $${data.mostActiveStock[5].changes}</p>
        
      </div>
    </div>
  </div>
  </div>`;
$(".getActives").append(html3);
});
}