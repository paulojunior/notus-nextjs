import React from "react";

function MapExample() {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    const myLatlng = new google.maps.LatLng("-30.03506247683422", "-51.17670297008333");
    const myLatlngC = new google.maps.LatLng("43.750344460088776", "-79.37845837281739");
    const myLatlngCenter = new google.maps.LatLng("10.547800860310788", "-84.6466600234187");

    const mapOptions = {
      zoom: 2,
      center: myLatlngCenter,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#cbd5e0" }, { visibility: "on" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Trilogy Solutions Brasil!",
    });

    const markerC = new google.maps.Marker({
      position: myLatlngC,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Trilogy Solutions Canada!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Trilogy Solutions!</h2>' +
      "<p>Venha tomar um café na nossa sede no Brasil.</p></div>";

    const contentStringC =
      '<div class="info-window-content"><h2>Trilogy Solutions!</h2>' +
      "<p>Venha tomar um café na nossa sede no Canadá.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    const infowindowC = new google.maps.InfoWindow({
      content: contentStringC,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });

    google.maps.event.addListener(markerC, "click", function () {
      infowindowC.open(map, markerC);
    });
  });
  return (
    <>
      <div className="relative w-full rounded h-500-px">
        <div className="rounded h-full" ref={mapRef} />
      </div>
    </>
  );
}

export default MapExample;
