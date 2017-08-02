function initMap() {
  console.log('fsdf');
  var fju = {
    lat: 25.035056,
    lng: 121.431973
  };

  var mapStyle = [
      {
          "featureType": "landscape",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "stylers": [
              {
                  "hue": "#00aaff"
              },
              {
                  "saturation": -100
              },
              {
                  "gamma": 2.15
              },
              {
                  "lightness": 12
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "lightness": 24
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 57
              }
          ]
      }
  ];

  window.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: fju,
    styles: mapStyle
  });


  var image = {

          url: 'https://s4.postimg.org/onf9j7sj1/2017-07-29_12.11.53.png',
          // This marker is 20 pixels wide by 32 pixels high.
          // （寬， 高）
          size: new google.maps.Size(128, 128),
          // The origin for this image is (0, 0).
          //Marker的 起始點  （左上角座標）
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 50)

        };

  var marker = new google.maps.Marker({
    position: fju,
    map: map,
    title: 'Uluru (Ayers Rock)',
    icon: image,

  });

  google.maps.event.addListener(marker,'click',function() {
  // 點擊後 要做的動作
  map.setZoom(9);

  });

}
