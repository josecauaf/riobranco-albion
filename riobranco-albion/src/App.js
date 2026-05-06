import React from 'react';
import { APIProvider, Map, Polygon } from '@vis.gl/react-google-maps';
import { latLngToCell, cellToBoundary } from "h3-js"; // Importação necessária

// --- 1. COLOQUE AS FUNÇÕES UTILITÁRIAS AQUI (FORA DO COMPONENTE) ---
// Isso evita que a função seja recriada toda vez que o React atualizar a tela
const getHexagonCoords = (lat, lng, level = 8) => {
  const h3Index = latLngToCell(lat, lng, level); 
  const boundary = cellToBoundary(h3Index); 
  return boundary.map(([lat, lng]) => ({ lat, lng }));
};

// --- 2. SEU COMPONENTE PRINCIPAL ---
function App() {
  const center = { lat: -9.974, lng: -67.807 }; // Rio Branco
  
  // Gerando a colmeia usando a função lá de cima
  const hiveCoords = getHexagonCoords(-9.974, -67.807, 9);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <Map
          defaultCenter={center}
          defaultZoom={14}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          {/* Exemplo de Colmeia renderizada */}
          <Polygon
            paths={hiveCoords}
            fillColor={'#f7b500'}
            fillOpacity={0.6}
            strokeColor={'#fb8c00'}
            strokeWeight={1}
          />
        </Map>
      </APIProvider>
    </div>
  );
}

export default App;