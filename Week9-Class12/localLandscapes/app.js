$(function() {
  _500px.init({
    sdk_key: 'fe999c528ad41c8015b878ef8fc91019f6f8e1f6'
  });

  _500px.getAuthorizationStatus();

  _500px.on('authorization_obtained', function() {
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var rad = "1mi";
        
        var searchOptions = {
          geo: lat + "," + lon + "," + rad,
          //only: "Abstract",
          image_size: 3,
          rpp: 96,
          sort: "taken_at"
        };

        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length == 0){
            alert('No photos found');
          } else {
            handleResponseSuccess(response);
          }
        });

      });
    } else {

    }
  });

  function handleResponseSuccess(response) {
    var allPhotos = response.data.photos;

    $.each(allPhotos, function(){
      var elm = $('<img>').attr('src', this.image_url).addClass('image');

      $('.images').append(elm);
    });
  };


  $('#login').click(function(){
    _500px.login();
  });
});
