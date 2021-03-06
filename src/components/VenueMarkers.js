import React, { Fragment , useState} from 'react'
import {Marker} from 'react-leaflet';
import {VenueLocationIcon} from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup';

const VenueMarkers = (props) => {
  const { venues } = props;
// const  [locations ,setLocations]= useState([
  
//     {
//         "description": "Schon seit längerem wollte Rummel sich sein kleines Paradies schaffen, hat tiefe stille Wasser betörnt und stürmischen Zeiten getrotzt und hat endlich geankert - in einer schönen kleinen Bucht nicht weit von Euch! In diese Bucht läd Rummel von Mai bis Mitte September zum Chillen und Grillen, zum Schunkeln, Munkeln und natürlich Trunkeln. Und wenn Rummel mal so richtig gut drauf ist, dann wird auch mal ordentlich gerummelt! So oder so, zu Wasser wie zur Bucht, auch der Rummel ist nichts ohne seine Crew. Also Leichtmatrosen und Matrösinnen - kommt rum und lasst es Euch gut gehn! Ahoi* Ach ja, geöffnet ist nur an sonnigen und regenfreien Tagen :) ________________ Reservierungsanfragen sind nur per Mail möglich bucht@rummels-welt.de (Reservierungsanfragen werden nur zwischen Di-Fr beantwortet) ",
//         "name": "Rummels Bucht",
//         "geometry": [
//             52.500772,
//             13.472764
//         ]
//     },
//     {
//         "description": "Das SEZ bietet ein großes Sport-, Freizeit- und Erholungsangebot. Ab sofort könnt ihr das SEZ für Events unter: sez@glut.berlin anmieten. Kommt vorbei und genießt den industriellen Charm einer in Vergessenheit geglaubten Location. ",
//         "name": "SEZ Berlin",
//         "geometry": [
//             52.527025,
//             13.446139
//         ]
//     },
   

// ])

  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={VenueLocationIcon}  >
       <MarkerPopup data={venue}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default VenueMarkers;
