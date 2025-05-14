import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icons
const createCustomIcon = (color, type) => {
  return L.divIcon({
    className: 'custom-icon',
    html: `<div style="
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: ${color};
      border: 3px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      color: white;
      font-weight: bold;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
    ">${type}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18],
  });
};

const BerneseMarchMap = () => {
  // Center the map on Ins, Switzerland
  const mapCenter = [47.0030, 7.1070];

  // Create slightly offset positions for the checkpoints around Ins
  // These would ideally be real geographical coordinates for the actual checkpoints
  const checkpoints = [
    { id: 'A', pos: [47.0130, 7.0930], time: '21:00' },
    { id: 'B', pos: [47.0180, 7.1250], time: '21:00' },
    { id: 'C', pos: [47.0080, 7.1370], time: '21:00' },
    { id: 'D', pos: [47.0000, 7.1170], time: '21:00' },
    { id: 'E', pos: [46.9950, 7.0950], time: '21:00' },
    { id: 'M', pos: [47.0030, 7.1070], time: '22:00', isCenter: true },
  ];

  // Define the connections between checkpoints with distances
  const connections = [
    { from: 'A', to: 'B', distance: 1 },
    { from: 'A', to: 'E', distance: 1 },
    { from: 'A', to: 'M', distance: 14 },
    { from: 'B', to: 'C', distance: 8 },
    { from: 'B', to: 'M', distance: 5 },
    { from: 'C', to: 'D', distance: 5 },
    { from: 'C', to: 'M', distance: 7 },
    { from: 'D', to: 'E', distance: 9 },
    { from: 'D', to: 'M', distance: 6 },
    { from: 'E', to: 'M', distance: 8 },
  ];

  // Prepare polylines for the connections
  const polylines = connections.map(conn => {
    const fromPoint = checkpoints.find(cp => cp.id === conn.from);
    const toPoint = checkpoints.find(cp => cp.id === conn.to);

    if (!fromPoint || !toPoint) return null;

    return {
      positions: [fromPoint.pos, toPoint.pos],
      distance: conn.distance,
      midpoint: [
        (fromPoint.pos[0] + toPoint.pos[0]) / 2,
        (fromPoint.pos[1] + toPoint.pos[1]) / 2
      ]
    };
  }).filter(Boolean);

  // Custom styles
  const checkpointIcon = createCustomIcon('#ffffff', '');
  const centerIcon = createCustomIcon('#000000', '');

  const polylineStyle = {
    color: '#222222',
    weight: 3
  };

  const labelStyle = {
    "background": '#222222',
    "color": '#ffffff',
    "padding": '2px 8px',
    "font-weight": 'bold',
    "text-align": 'center',
    "border": '2px solid white',
    "box-shadow": '0 2px 4px rgba(0,0,0,0.3)',
    "font-size": '14px'
  };

  return (
    <div style={{ height: '800px', borderRadius: '1rem', overflow: 'hidden' }}>
      <MapContainer
        center={mapCenter}
        zoom={14}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Render connections (edges) */}
        {polylines.map((line, idx) => (
          <React.Fragment key={`line-${idx}`}>
            <Polyline positions={line.positions} pathOptions={polylineStyle} />
            <Marker
              position={line.midpoint}
              icon={L.divIcon({
                className: 'distance-label',
                html: `<div style="${Object.entries(labelStyle).map(([k, v]) => `${k}:${v}`).join(';')}">${line.distance}</div>`,
                iconSize: [33, 33],
                iconAnchor: [12, 12]
              })}
            />
          </React.Fragment>
        ))}

        {/* Render checkpoints (nodes) */}
        {checkpoints.map(checkpoint => (
          <React.Fragment key={`checkpoint-${checkpoint.id}`}>
            <Marker
              position={checkpoint.pos}
              icon={checkpoint.isCenter ? centerIcon : checkpointIcon}
            >
              <Popup>
                <div style={{ textAlign: 'center' }}>
                  <strong>{checkpoint.isCenter ? 'Marschzentrum' : `Kontrollposten ${checkpoint.id}`}</strong>
                  <br />
                  <span>{checkpoint.time}</span>
                </div>
              </Popup>
            </Marker>

            {/* Add a separate marker for the label */}
            <Marker
              position={checkpoint.pos}
              icon={L.divIcon({
                className: 'checkpoint-label',
                html: `<div style="
                  background: ${checkpoint.isCenter ? '#000000' : '#cc0000'};
                  color: white;
                  padding: 2px 8px;
                  border-radius: 4px;
                  font-weight: bold;
                  white-space: nowrap;
                  margin-top: ${checkpoint.isCenter ? '-45px' : '-40px'};
                  text-align: center;
                ">${checkpoint.isCenter ? 'Marschzentrum' : `Kontrollposten ${checkpoint.id}`}<br>${checkpoint.time}</div>`,
                iconSize: [140, 40],
                iconAnchor: [70, 0]
              })}
              interactive={false}
            />
          </React.Fragment>
        ))}

        {/* Add distance circles for scale */}
        <Circle
          center={mapCenter}
          radius={1000}
          pathOptions={{ color: '#cc0000', weight: 1, opacity: 0.3, fillOpacity: 0.05 }}
        />
        <Circle
          center={mapCenter}
          radius={2000}
          pathOptions={{ color: '#cc0000', weight: 1, opacity: 0.3, fillOpacity: 0.05 }}
        />
      </MapContainer>
    </div>
  );
};

export default BerneseMarchMap;