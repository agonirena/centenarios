import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import nextId from 'react-id-generator'
import { VenueLocationIcon } from './VenueLocationIcon'
import L from "leaflet"

let redIcon = L.icon({
    iconUrl: '/red.png',
    iconSize: [35, 35]
})

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: "100vh",
    },
  }));

const EHMendiakMap = (props) => {
    const classes = useStyles();
    let bounds = new L.LatLngBounds(props.mountains.map(mount => [mount.position.lat, mount.position.lng]))

    return (
        <MapContainer bounds={bounds} className={classes.root}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
            props.mountains.map((mountain) => {
                return (
                    /*
                    <Marker key={nextId()} position={mountain.position} icon={redIcon}>
                    */
                    <Marker key={nextId()} position={mountain.position} >
                        <Popup>
                            {mountain.name}<br />
                            {mountain.altitude} m.
                        </Popup>
                    </Marker>
                )
            })
            }
        </MapContainer>
    )
}

export default EHMendiakMap