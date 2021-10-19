var newsList;


 var newsList;
function getNew(){
    var xhttp = new XMLHttpRequest();
    var obj = this;
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState === 4 && xhttp.status === 200){
            newsList=JSON.parse(xhttp.response);
            obj.displayNews();  
        }
    };
    xhttp.open('GET','http://localhost:3000/articles');
    xhttp.send();
}
function displayNews(){
    let newsDispCont = newsList.map((articles)=>`
    <br>
        <div class="card" style="width: 18rem;">
            <img src="${articles.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${articles.title}</h5>
                <p class="card-text">${articles.description}</p>
                <a href="${articles.url}{" class="btn btn-primary">Detail</a>
            </div>
        </div>`);
    let element = document.getElementById('newsList');
   let innerHTML = "";
   for(let index = 0; index<newsDispCont.length; index++){
       innerHTML = innerHTML.concat(newsDispCont[index]);
   }
   element.innerHTML=innerHTML;
}

function searchNews(){

    
}