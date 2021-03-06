
const makeMap = async (target, center={lat: 36.059043, lng: -112.109306}) => {
    await checkData(()=>window.google);

    let map_el = $(target);

    //the map element has a data object that refers to the Google Map object- m10-01:43:22
    if(!map_el.data('map'))
        map_el.data({
            "map":new google.maps.Map(map_el[0], {
                center: center,
                zoom: 12,
                disableDefaultUI: true
            }),
            "infoWindow":new google.maps.InfoWindow({content:''})
        });


    return map_el;
}


const makeMarkers = (map_el, map_locs, zoom=14) => {

   let map = map_el.data('map');
   let markers = map_el.data("markers");

   if(markers) markers.forEach(o=>o.setMap(null));

   markers = [];

   map_locs.forEach(o=>{
      let m = new google.maps.Marker({
         position: o,
         map: map,
         icon:{
            url:o.icon,
            scaledSize: {
               width:40,
               height:40
            }
         }
      });
      markers.push(m);
   });

    map_el.data("markers",markers,zoom);
    setTimeout(()=>setMapBounds(map_el, map_locs),150);
}


const setMapBounds = (map_el, map_locs, zoom=14) => {
    let map = map_el.data('map');

    if(map_locs.length==1) {
        map.setCenter(map_locs[0]);
        map.setZoom(zoom);
    } else if(map_locs.length==0) {
        if(window.location.protocol!=="https:"){
            return;
        } else {
            navigator.geolocation.getCurrentPosition(
                p=>{
                        let pos = {
                            lat:p.coords.latitude,
                            lng:p.coords.longitude
                        };
                        map.setCenter(pos);
                        map.setZoom(zoom);
                },
                (...args)=>{
                    console.log("Error?",args);
                },{
                    enableHighAccuracy:false,
                    timeout:5000, //if 5000 milliseconds not found it failure
                    maximumAge:0 //If set to 0, it means that the device cannot use a cached position and must attempt to retrieve the real current position. If set to Infinity the device must return a cached position regardless of its age.
                }
            );
        }
    } else {
        let bounds = new google.maps.LatLngBounds(null);
        map_locs.forEach(o=>{
            bounds.extend(o);
        });
        map.fitBounds(bounds);
    }
}



































