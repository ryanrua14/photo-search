$(document).ready(function(){    
    
    var photoTag = "";
    var url = "";
    $("#submitBtn").click(function(){
        photoTag = $("#searchText").val();
        url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f789f7582b2b5e310903a449559f38f&tags=" + photoTag + "&sort=&safe_search=3&content_type=1&media=photos&per_page=20&page=1&format=json&nojsoncallback=1";

        console.log(photoTag);

        $.ajax(url).done(function(data){
           //$("#gallery").append(data.photos.photo[0].title + "Gallery");
            $.each(data.photos.photo, function(i, pic){
                var farmId = pic.farm;
                var serverid = pic.server;
                var id = pic.id;
                var secret = pic.secret;
                $("#gallery").append('<img src=//farm' + farmId + '.staticflickr.com/' + serverid + '/' + id + '_' + secret + '.jpg class="img-fluid img-thumbnail"/>' );
            });
        });
    });
    $("#usersSearch").keypress(function(e){
       if(e.which == 13)
           $("#submitBtn").click();
    });
});
/*$(document).ready(function(){
    $("#submit").click(function(){
    var photoTag = document.getElementById("search").value;
    var url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f789f7582b2b5e310903a449559f38f&tags=" + photoTag + "&sort=&safe_search=3&content_type=1&media=photos&per_page=20&page=1&format=json&nojsoncallback=1";

        $.getJSON(url, function(data){
            for(var i = 0; i < data.length; i++){
           //     var pic = 'id: ${data.id}, server: ${data.server}, secret: ${data.secret}, farm: ${data.farm}';
                var path = "https://live.staticflickr.com/" + data.server + "/" + data.id + "_" + data.secret + "_500px.jpg"
                document.getElementById("gallery").innerHTML += "<img src='" + path + "' class='img-thumbnail'>"
            }//End for
        });
    });
});*/
//http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    
//}//End function
