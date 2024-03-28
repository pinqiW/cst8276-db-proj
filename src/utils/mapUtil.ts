import { Loader } from "@googlemaps/js-api-loader";

interface Location {
    name: string;
    latitude: number;
    longitude: number;
}

export const initializeMap = (mapRef: React.RefObject<HTMLDivElement>, locations: Location[], mapId: string): void => {
    const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
        version: "weekly",
        libraries: ["marker"],
    });

    loader.load().then(() => {
        if (mapRef.current && locations.length > 0) {
            const initialLocation = locations[0];

            const map = new google.maps.Map(mapRef.current, {
                center: { lat: initialLocation.latitude, lng: initialLocation.longitude },
                zoom: 3,
                mapId: mapId,
            });

            locations.forEach((location: Location) => {
                new google.maps.Marker({
                    position: { lat: location.latitude, lng: location.longitude },
                    map: map,
                });
            });
        }
    });
};
