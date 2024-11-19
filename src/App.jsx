import React, { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import MapComponent from "./components/MapComponent";

const App = () => {
	const [eventData, setEventData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			try {
				const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
				const { events } = await res.json();
				setEventData(events);
			} catch (error) {
				console.error("Error fetching event data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	return (
		<div>
			{loading ? (
				<div className="spinner">
					<DotLoader loading={loading} size={40} />
				</div>
			) : (
				<MapComponent eventData={eventData} />
			)}
		</div>
	);
};

export default React.memo(App);
