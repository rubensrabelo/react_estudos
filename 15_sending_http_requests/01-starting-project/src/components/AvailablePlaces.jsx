import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';
import ErrorPage  from './Error.jsx';
import { sortPlacesByDistance } from "../loc.js"
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places.places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });

      } catch(error) {
        setError({message: error.message || "Could not fetch places, please try again later."});
        setIsFetching(false);
      }
    }
    
    if(error) {
      return (<ErrorPage title={"An error ocurred"} message={error.message} />);
    }

    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      loadingText="Fetching place data..."
      places={availablePlaces}
      fallbackText={availablePlaces}
      onSelectPlace={onSelectPlace}
    />
  );
}
