var apiKey="dbf78b45690345cebf3492ce66b85542"
var source="google-news"
var url="https://newsapi.org/v2/top-headlines?sources="+source+"&apiKey="+apiKey;

function loadnews(){
    $.ajax({
        type:'GET',
        url:url,
        dataType:'json',

        success:function(response){
            if(response.status=="ok"){
                var tabledata="";
                for(var i=0;i<response.articles.length;i++){
                    var current=response.articles[i];
                    tabledata=tabledata+"<div class=\"row\"><div class=\"well\"><div class=\"media\">";
                    tabledata=tabledata+"<h4 class=\"media-heading\">"+current.title+"</h4>";
                    tabledata=tabledata+"<img class=\"media-object\" src=\""+current.urlToImage+"\">";
                    tabledata=tabledata+"<div class=\"media-body\">";
                    tabledata=tabledata+"<p>"+current.description+"</p>";
                    tabledata=tabledata+"<p class=\"text-right\">By "+current.author+"</p>";
                    tabledata=tabledata+"</div></div></div></div>";
                }
                $('#news-body').html(tabledata);
            }
        },
        error:function(response){
            alert(response);
        }
    });
}
loadnews();