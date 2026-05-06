import React from 'react';
import { APIProvider, Map, Polygon } from '@vis.gl/react-google-maps';

// Coordenadas centrais (Rio Branco como exemplo)
const center = { lat: -9.974, lng: -67.807 };

// Exemplo de Zona Vermelha (Albion Style)
const redZoneCoords = [
  { lat: -9.970, lng: -67.810 },
  { lat: -9.970, lng: -67.800 },
  { lat: -9.980, lng: -67.800 },
  { lat: -9.980, lng: -67.810 },
];

export default function AlbionMapsApp() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <APIProvider apiKey={'SUA_CHAVE_AQUI'}>
        <Map
          defaultCenter={center}
          defaultZoom={14}
          mapId={'ALBION_MAP_ID'} // Opcional: para estilos customizados
        >
          {/* Renderizando uma Zona de Perigo */}
          <Polygon
            paths={redZoneCoords}
            fillColor={'#FF0000'}
            fillOpacity={0.3}
            strokeColor={'#8B0000'}
            strokeWeight={2}
          />
          
          {/* Aqui entrará a lógica das Colmeias com H3 */}
        </Map>
      </APIProvider>
    </div>
  );
}