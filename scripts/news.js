// to trigger click when clicked enter
var input = document.getElementById("keyword");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button-addon2").click();
  }
});


// function to callback news api to display required news
getnews();
function getnews(){

    $(".getnews").text("");
var keyword = $("#keyword").val();

if(keyword == ''){
    keyword = "bse";
}

var url = "https://newsdata.io/api/1/news?apikey=pub_304807a11a986a20ea166c10a4b89bea9d7a&country=in&language=en&q=" + keyword;

$.get (url,(response)=>{
    console.log(response.results);

    for(i=1 ; i<10;i= i+2){
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

// //To display the cryptocurrency exchange rates
// getdata();

// function getdata(){

//     $(".getdata").text("");

// var cryptocoin = $("#cryptocoin").val();
// if(cryptocoin == ''){
//     cryptocoin = "BTC";
// }

// var currency = $("#currency").val();
// if(currency == ''){
//     currency = "INR";
// }

// var url = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency="+cryptocoin+"&to_currency="+currency+"&apikey=5UURJ27EF3L9EKR0";

// $.get (url,(data)=>{
//     console.log(data);


//     var html = `<div class="row">
//         <div class="col-sm-6">
//         <div class="card">
//             <div class="card-body">
//                 <h5 class="card-title">${data.From_Currency}</h5>
//                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         </div>
//         <div class="col-sm-6">
//         <div class="card">
//             <div class="card-body">
//                 <h5 class="card-title">Special title treatment</h5>
//                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         </div>  
//     </div>`;
//     $(".getdata").append(html);

// });}

