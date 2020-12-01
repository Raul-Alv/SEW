var miMapa = new Object();

function initMap() {
    map = new google.maps.Map(document.getElementById('mapa'), {
      center: new google.maps.LatLng(-19.257753, 146.823688),
      zoom: 2,
      mapTypeId: 'terrain'
    });
    

    var kmlLayer = new google.maps.KmlLayer("rutas.kml", {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: map
    });
    
    kmlLayer.addListener('click', function(event) {
      var content = event.featureData.infoWindowHtml;
      var testimonial = document.getElementById('capture');
      testimonial.innerHTML = content;
    });
    
}

miMapa.initMap = initMap;