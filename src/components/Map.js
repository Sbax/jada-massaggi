import React from 'react';
import { Map as LeafletMap, Marker, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 30rem;
  width: 100%;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15), 0 1px 10px rgba(0, 0, 0, 0.25);

  > * {
    height: 100%;
  }
`;

const MapSection = styled.section`
  display: flex;
  align-items: center;

  flex-direction: column;

  > * + * {
    margin-top: 1rem;
  }

  h1,
  h2 {
    margin: 0 1rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;

    opacity: 0.7;
  }

  > * + ${MapContainer} {
    margin-top: 2rem;
  }
`;

const Map = () => {
  const position = [44.365347, 11.688317];
  const zoom = 15;

  return (
    <MapSection>
      <h1>Trovarmi è semplice</h1>
      <h2>Via Massimo Villa 34/c, Imola (BO)</h2>
      <MapContainer>
        <LeafletMap center={position} zoom={zoom} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            maxZoom={19}
          />
          <Marker position={position} />
        </LeafletMap>
      </MapContainer>
    </MapSection>
  );
};

export default Map;
