import { useState, useEffect } from 'react';

interface Location {
    name: string;
    latitude: number;
    longitude: number;
}

const useLocations = (url: string): Location[] => {
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLocations(data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [url]);

    return locations;
};

export default useLocations;
