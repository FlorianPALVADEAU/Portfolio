    new Glide('.glide').mount()


    mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvcGx2ZCIsImEiOiJja3Y0eWN0ZTgxMTBmMnZzMzk5b3piNHI1In0.oT3Wlk6SQ7B-mKHV61VMGQ';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/floplvd/ckv4xv4822tp415qmf7tm3wpj',
        center: [35, 47],
        speed: 0.6,
        zoom: 3 
    });


    const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [1.900330766926106, 48.80262283112147]
            },
            properties: {
              title: 'Jouars-Pontchartrain',
              description: 'Here is the city where i live !'
            }
          }
        ]
      };

      geojson.features.forEach(function (marker) {

        var el = document.createElement('div');
        el.className = 'marker';
    
        let tmpMarker = new mapboxgl.Marker(el)
        let tmpPopUp = new mapboxgl.Popup()
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>')
    
        el.markerInstance = tmpMarker;
    
        tmpMarker
            .setLngLat(marker.geometry.coordinates)
            .setPopup(tmpPopUp)
            .addTo(map);
    
        el.addEventListener("click", e => {
            let coords = e.target.markerInstance.getLngLat();
            map.flyTo({
                bearing: 10,
                pitch: 50,
                center: [1.900330766926106, 48.80262283112147],
                zoom: 16,
                speed: 0.8,
            });
        });
        
    });


    

