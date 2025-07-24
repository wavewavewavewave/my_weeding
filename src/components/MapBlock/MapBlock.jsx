import React from 'react'
import './mapblock.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapBlock() {
  const placemark = {
    geometry: [52.424841, 31.010679],
  };
  return (
    <YMaps>
      <div className='map-container'>
        <Map
          defaultState={{ center: [52.424841, 31.010679], zoom: 16 }}
          style={{ width: '100%', height: '400px' }}
        >
          <Placemark geometry={placemark.geometry} />
        </Map>
      </div>
    </YMaps>
  )
}