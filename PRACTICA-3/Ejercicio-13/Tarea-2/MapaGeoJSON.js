var miMapa = new Object();

function showGeoJSONData (map) {
  // Create GeoJSON reader which will download the specified file.
  // Shape of the file was obtained by using HERE Geocoder API.
  // It is possible to customize look and feel of the objects.
  var reader = new H.data.geojson.Reader('BoroughBoundaries.json', {
    // This function is called each time parser detects a new map object
    style: function (mapObject) {
      // Parsed geo objects could be styled using setStyle method
      if (mapObject instanceof H.map.Polygon) {
        mapObject.setStyle({
          fillColor: 'rgba(255, 0, 0, 0.5)',
          strokeColor: 'rgba(0, 0, 255, 0.2)',
          lineWidth: 3
        });
      }
    }
  });

  // Start parsing the file
  reader.parse();

  // Add layer which shows GeoJSON data on the map
  map.addLayer(reader.getLayer());
}

function initMap() {
    map = new google.maps.Map(document.getElementById('mapa'), {
      center: new google.maps.LatLng(-19.257753, 146.823688),
      zoom: 2,
      mapTypeId: 'terrain'
    });
    
    showGeoJSONData(map);

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