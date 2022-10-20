import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { ViewState } from "react-map-gl";
import { SearchResult } from "../interface/Types";
import getCenter from "geolib/es/getCenter";
import { MapPinIcon } from "@heroicons/react/24/solid";

type MapPropsType = {
    searchResults: SearchResult[];
};

function Map({ searchResults }: MapPropsType) {
    console.log(process.env.mapbox_key);
    const coordinates = searchResults.map((item) => ({
        longitude: item.long,
        latitude: item.lat,
    }));

    const center = getCenter(coordinates);
    const [viewport, setViewport] = useState<ViewState>({
        latitude: center ? center.latitude : 37.7577,
        longitude: center ? center.longitude : -122.4367,
        zoom: 10,
        bearing: 0,
        padding: { top: 0, left: 0, bottom: 0, right: 0 },
        pitch: 0,
    });

    return (
        <ReactMapGl
            mapStyle={"mapbox://styles/kacperhemp/cl9hf7g3t00bi15l3262l7psv"}
            style={{ width: "100%", height: "100%" }}
            mapboxAccessToken={process.env.mapbox_key}
            initialViewState={viewport}
            onMove={(event) => {
                setViewport(event.viewState);
            }}
        >
            {searchResults.map((item) => (
                <Marker
                    key={item.long}
                    latitude={item.lat}
                    longitude={item.long}
                    anchor={"top"}
                >
                    <div>
                        <MapPinIcon className="h-5 text-red-400" />
                    </div>
                </Marker>
            ))}
        </ReactMapGl>
    );
}

export default Map;
