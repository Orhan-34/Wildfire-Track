import locationIcon from "@iconify/icons-mdi/fire-alert";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const LocationMarker = ({ onClick }) => {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div className="location-marker" onClick={onClick}>
			<Icon icon={locationIcon} className="location-icon" />
		</div>
	);
}

export default React.memo(LocationMarker)
