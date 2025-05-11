// components/RouteMap/RouteMap.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/RouteMap.css';

const RouteMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load and initialize the map
    const loadMap = () => {
      if (!window.google) {
        // If Google Maps API not loaded, create a script tag to load it
        const mapScript = document.createElement('script');
        mapScript.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY';
        mapScript.async = true;
        mapScript.defer = true;

        // When script loads, initialize map
        mapScript.onload = initMap;

        document.head.appendChild(mapScript);
      } else {
        // If Google Maps API already loaded, initialize map
        initMap();
      }
    };

    // Initialize the map with markers and routes
    const initMap = () => {
      // For demonstration, we'll use a static image instead of actual Google Maps API
      // In a real implementation, you'd use the Google Maps JavaScript API here
      const mapContainer = mapRef.current;
      if (mapContainer) {
        const mapImage = document.createElement('img');
        mapImage.src = 'https://www.bernerdm.ch/wp-content/uploads/2024/12/map-preview.jpg';
        mapImage.alt = 'Bernese Distance March Route Map';
        mapImage.className = 'static-map-image';

        // Clear any previous content
        mapContainer.innerHTML = '';
        mapContainer.appendChild(mapImage);

        // Add route markers for demonstration
        const checkpoints = [
          { left: '10%', top: '50%', label: '1' },
          { left: '25%', top: '30%', label: '2' },
          { left: '45%', top: '40%', label: '3' },
          { left: '65%', top: '25%', label: '4' },
          { left: '75%', top: '45%', label: '5' },
          { left: '90%', top: '55%', label: '6' }
        ];

        checkpoints.forEach((point, index) => {
          const marker = document.createElement('div');
          marker.className = 'map-marker';
          marker.textContent = point.label;
          marker.style.left = point.left;
          marker.style.top = point.top;

          // Add animation delay to stagger marker appearances
          marker.style.animationDelay = `${index * 0.2}s`;

          mapContainer.appendChild(marker);
        });

        // Add route lines
        const routeLine = document.createElement('div');
        routeLine.className = 'route-line';
        mapContainer.appendChild(routeLine);
      }
    };

    loadMap();

    // Cleanup function
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  return (
    <div className="route-map-container">
      <div className="map-overlay">
        <div className="map-title">Bernese Distance March 2025</div>
        <div className="map-legend">
          <div className="legend-item">
            <div className="legend-marker"></div>
            <span>Checkpoint</span>
          </div>
          <div className="legend-item">
            <div className="legend-line"></div>
            <span>Route Options</span>
          </div>
        </div>
      </div>
      <div ref={mapRef} className="route-map">
        {/* Map will be loaded here */}
        <div className="map-loading">
          <div className="spinner"></div>
          <span>Loading map...</span>
        </div>
      </div>
    </div>
  );
};

export default RouteMap;