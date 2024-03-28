import React, { useRef, useEffect } from 'react';
import useLocations from '../hooks/useLocations';
import { initializeMap } from '/Users/pinqiw/Desktop/WebStormProjects/dbproj_googlemapapi/google-map-app/src/utils/mapUtil';

const mapId = "85bfc36cae193211";

const MapComponent: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const locations = useLocations('http://localhost:3001/locations');

    useEffect(() => {
        if (locations.length > 0) {
            initializeMap(mapRef, locations, mapId);
        }
    }, [locations]);

    return <div ref={mapRef} style={{ width: "100%", height: "800px" }} />;
};

export default MapComponent;
