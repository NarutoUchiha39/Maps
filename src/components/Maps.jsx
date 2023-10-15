import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer,GeoJSON,Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';
import IndianBoundary from '../assets/IndiaBoundary.geo.json'
import IndianStates from '../assets/india_states.geo.json'
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css"
import '../css/leaflet.css'

function Maps(props) {
  
    const indiaBounds = [
        [6.745, 68.162],
        [40.501, 97.395]
      ];
      const customIcon = new Icon({
        iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize:[30,30]
      })

  return (
    <MapContainer zoom={5} center={[20.5937, 78.9629]} bounds={indiaBounds} >
            <TileLayer url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'/>
            <MarkerClusterGroup 
            chunkedLoading>
             {props.data?( 
            props.data.result.map((element,index)=>(
            <Marker position={element.geoCode} key={index} icon={customIcon}>
                <Popup>
                    <h4>{element.retailer_name}</h4>
                </Popup>
            </Marker>
            ))):null}
         </MarkerClusterGroup>
            <GeoJSON data={IndianBoundary}/>
            <GeoJSON data={IndianStates}/>
    </MapContainer>
  )
}

export default Maps