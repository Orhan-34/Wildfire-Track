import React, { useCallback, useMemo, useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
const natural_event_wildfire = 8;

const MapComponent = ({ eventData }) => {
	const defaultCenter = useMemo(() => ({ lat: 42.3265, lng: -122.8756 }), []);
	const defaultZoom = useMemo(() => 7, []);

	const [locationInfo, setLocationInfo] = useState(null);
	const handleMarkerClick = useCallback((eventData) => {
		setLocationInfo({ id: eventData.id, title: eventData.title });
	}, []);
	const markers = useMemo(
		() =>
			eventData
				.filter((eventD) => eventD.categories[0].id === natural_event_wildfire)

				.map((eventD) => (
					<LocationMarker
						key={eventD.id}
						lat={eventD.geometries[0].coordinates[1]}
						lng={eventD.geometries[0].coordinates[0]}
						onClick={handleMarkerClick.bind(null, eventD)}
					/>
				)),
		[eventData, handleMarkerClick],
	);

	return (
		<div style={{ width: "100%", height: "100vh", position: "relative" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyAEW0PD04vCbi2A6mDDmqWcz-hmKZVK30E" }}
				defaultCenter={defaultCenter}
				defaultZoom={defaultZoom}
			>
				{markers}
			</GoogleMapReact>
			{locationInfo && <LocationInfoBox info={locationInfo} />}
		</div>
	);
};

export default React.memo(MapComponent);
